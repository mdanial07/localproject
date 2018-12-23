import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material'
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'blogs',
    templateUrl: './Blogs.html',
    styleUrls: ['../Styles/Blogs.scss']
})
export class Blogs implements OnInit {
    constructor(private http: HttpClient, public dialog: MatDialog) { }
    Blog
    comment = []
    ngOnInit() {
        this.getBlogs()
    }
    getBlogs() {
        this.http.get('https://grainmarket.qubolt.com/api/admin/get/blogs').subscribe(res => {
            console.log(res)
            this.Blog = res
        })
    }
    postComment(blog) {
        if (this.comment[blog] != "" && this.comment[blog] != null && this.comment[blog] != undefined) {
            let obj = {
                comment: `${this.comment[blog]}`,
                type: "c",
                blog_id: "1",
                user_id: "1"
            }
            console.log(obj)
            const dialogRef = this.dialog.open(CommentDetailsDialog, {
                data: obj
            })
            dialogRef.afterClosed().subscribe(rer => {
                this.comment[blog] = null
                this.getBlogs()
            })
        }
    }
}

@Component({
    selector: 'comment-detail-view',
    templateUrl: 'CommentDetails.html',
})
export class CommentDetailsDialog implements OnInit {

    constructor(public dialogRef: MatDialogRef<Blogs>, @Inject(MAT_DIALOG_DATA) public data, public snackBar: MatSnackBar, private http: HttpClient) { }

    ngOnInit() { }

    btnStatus
    form = new FormGroup({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email])
    })

    submit() {
        if (this.form.valid) {
            this.btnStatus = true
            let obj = { ...this.data, ...this.form.value }
            this.http.post("http://grainmarket.qubolt.com/api/admin/post/blog/comment", obj).subscribe(res => {
                console.log(res)
                this.btnStatus = false
                this.dialogRef.close()
            }, error => {
                this.btnStatus = false
            })
        }
    }
}