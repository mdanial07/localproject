import { Component, Inject, OnInit } from '@angular/core'
import { ApiServiceService } from '../../api-service.service'
import { environment } from '../../../environments/environment'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material'

@Component({
    selector: 'homepage',
    templateUrl: './HomePage.html',
    styleUrls: ['../Styles/HomePage.scss']
})
export class HomePage implements OnInit {
    posts = []
    audio = []
    comment = []
    commentBtnStatus = []
    constructor(private service: ApiServiceService, public dialog: MatDialog, public snackBar: MatSnackBar) { }
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
            minHeight: '0px',
            maxHeight: "500px",
            data: post.comments
        })
        dialogRef.afterClosed().subscribe()
    }
    postComment(post) {
        if (this.comment[post.id] != "" && this.comment[post.id] != null && this.comment[post.id] != undefined) {
            this.commentBtnStatus[post.id] = true
            let obj = {
                type: "c",
                post_id: `${post.id}`,
                user_id: 1,
                comment: `${this.comment[post.id]}`
            }
            this.service.postComment(obj).subscribe(res => {
                this.commentBtnStatus[post.id] = false
                this.snackBar.open("Comment Posted", "", {
                    duration: 2000,
                });
                this.comment[post.id] = null
                this.getPosts()
            }, error => {
                this.commentBtnStatus[post.id] = false
            })
        }
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