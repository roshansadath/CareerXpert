import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIUrl } from 'src/app/constants/constant';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  constructor(private http: HttpClient) { }

  getJobPostingListData(): Observable<any>{
    const token = localStorage.getItem('userToken');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get(`${APIUrl}/job_post`, { headers : headers });
  }

  postNewJobData(data: any): Observable<any>{
    const token = localStorage.getItem('userToken');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.post(`${APIUrl}/job_post`, data, { headers : headers });
  }

  getJobDetailAPI(data: any): Observable<any>{
    return this.http.get(`${APIUrl}/employer/postings/detail`, data);
  }

  getJobDetail(data: any){
    
  }
}
