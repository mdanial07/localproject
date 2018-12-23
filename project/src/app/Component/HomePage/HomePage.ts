import { Component, Inject, OnInit } from '@angular/core'
import { ApiServiceService } from '../../api-service.service'
import { environment } from '../../../environments/environment'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'

@Component({
    selector: 'homepage',
    templateUrl: './HomePage.html',
    styleUrls: ['../Styles/HomePage.scss']
})
export class HomePage implements OnInit {
    posts = []
    audio = []
    constructor(private service: ApiServiceService, public dialog: MatDialog) { }
    ngOnInit() {
        this.getPosts()
    }
    getPosts() {
        this.service.retrievePosts().subscribe(res => {
            console.log(res)
            this.posts = res
            this.posts.map(element => {
                this.audio.push(environment.url + element.file.match(/uploads(.*)$/gm))
            })
        })
    }
    viewComments(post) {
        const dialogRef = this.dialog.open(CommentsDialog, {
            width: '70%',
            data: post.comments
        })
        dialogRef.afterClosed().subscribe()
    }
}

@Component({
    selector: 'comments-view',
    templateUrl: 'CommentsView.html',
})
export class CommentsDialog implements OnInit {

    constructor(public dialogRef: MatDialogRef<HomePage>, @Inject(MAT_DIALOG_DATA) public data) { }

    ngOnInit() { }

    onNoClick(): void {
        this.dialogRef.close();
    }
}