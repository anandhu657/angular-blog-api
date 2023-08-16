import { Component } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { IBlog } from '../../models/blog';

@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.css'],
  providers: [BlogService],
})
export class ListBlogComponent {
  blogs: IBlog[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    // this.getAllBlog();
    this.blogService.getAllBlogs().subscribe((blogs: IBlog[]) => {
      this.blogs=blogs
    });
  }

  getAllBlog(event:any) {
    console.log("getAllBlog Called");
    this.blogService.getAllBlogs().subscribe((blogs: IBlog[]) => {
      this.blogs.unshift(event);
    });
  }
}
