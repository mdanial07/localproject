import { Component, OnInit, OnDestroy } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { AudioRecordingServiceService } from '../../audio-recording-service.service'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
    selector: 'newpost',
    templateUrl: './NewPost.html',
    styleUrls: ['../Styles/NewPost.scss']
})
export class NewPost implements OnInit {
    postText
    btnStatus
    isRecording = false
    recordedTime
    blobUrl; id;
    fd = new FormData

    constructor(private http: HttpClient, private router: Router, private audioRecordingService: AudioRecordingServiceService, private sanitizer: DomSanitizer) {
        this.audioRecordingService.recordingFailed().subscribe(() => {
            this.isRecording = false
        })
        this.audioRecordingService.getRecordedTime().subscribe((time) => {
            this.recordedTime = time
        })
        this.audioRecordingService.getRecordedBlob().subscribe((data) => {
            this.blobUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data.blob))
            this.fd.append('audio', data.blob)
            console.log(this.fd)
            console.log(data.blob)
        })
    }
    startRecording() {
        if (!this.isRecording) {
            this.isRecording = true
            this.audioRecordingService.startRecording()
        }
    }
    abortRecording() {
        if (this.isRecording) {
            this.isRecording = false
            this.audioRecordingService.abortRecording()
        }
    }
    stopRecording() {
        if (this.isRecording) {
            this.audioRecordingService.stopRecording()
            this.isRecording = false
        }
    }
    clearRecordedData() {
        this.blobUrl = null
    }

    ngOnDestroy(): void {
        this.abortRecording()
    }
    ngOnInit() {
        let user = JSON.parse(localStorage.getItem('UserData'));
        if (user) {
            this.id = user.id
            console.log(user.id)
        }
    }
    submit() {
        if (this.postText != "" && this.postText != null && this.postText != undefined) {
            this.btnStatus = true
            this.fd.append('user_id', `${this.id}`)
            this.fd.append('post_category_id', '1')
            this.fd.append('text', `${this.postText}`)
            console.log(this.fd)
            this.http.post("https://grainmarket.qubolt.com/api/admin/post/post/save", this.fd).subscribe(res => {
                console.log(res)
                this.btnStatus = false
                this.router.navigate(["/"])
            }, error => {
                this.btnStatus = false
            })
        }
    }
}