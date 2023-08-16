import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../../services/blog.service';
import { IBlog } from '../../models/blog';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css'],
  providers: [BlogService],
})
export class AddBlogComponent {
  blogAddForm!: FormGroup;
  @Output() updateList = new EventEmitter();

  constructor(private blogService: BlogService) {
    this.blogAddForm = new FormGroup({
      title: new FormControl('', Validators.required),
      body: new FormControl('', Validators.required),
    });
  }

  addNewBlog() {
    if (this.blogAddForm.valid) {
      this.blogService
        .AddNewBlog(this.blogAddForm.value)
        .subscribe((newBlog: IBlog) => {
          console.log(newBlog, 'Added successfully');
          if (newBlog) alert('Blog added successfully');
          this.updateList.emit(newBlog);
        });
    }
  }
}
