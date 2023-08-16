import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { IBlog } from '../models/blog';
import { Observable } from 'rxjs';

@Injectable()
export class BlogService {
  constructor(private http: HttpClient) {}

  getAllBlogs():Observable<IBlog[]> {
    return this.http.get<IBlog[]>(`${environment.apiUrl}`);
  }

  AddNewBlog(newBlog:IBlog):Observable<IBlog>{
    return this.http.post<IBlog>(`${environment.apiUrl}`,newBlog)
  }
}
