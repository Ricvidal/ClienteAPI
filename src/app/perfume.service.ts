import { Perfume } from './perfume';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfumeService {

  constructor(private http: HttpClient) { }

  getPerfumes(): Observable<Perfume[]>{
    return this.http.get<Perfume[]>('http://ec2-3-87-16-94.compute-1.amazonaws.com:8080/perfumes');
  }

  getPerfumeById(id: string): Observable<Perfume>{
    return this.http.get<Perfume>('http://ec2-3-87-16-94.compute-1.amazonaws.com:8080/perfumes/' + id);
  }

  updatePerfume(id: string, perfume: any): Observable<Perfume>{
    return this.http.put<Perfume>('http://ec2-3-87-16-94.compute-1.amazonaws.com:8080/perfumes/' + id, perfume);
  }

  addPerfume(perfume: any): Observable<Perfume>{
    return this.http.post<Perfume>('http://ec2-3-87-16-94.compute-1.amazonaws.com:8080/perfumes/', perfume);
  }
}