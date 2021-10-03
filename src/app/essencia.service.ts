import { Essencia } from './essencia';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EssenciaService {

  constructor(private http: HttpClient) { }

  getEssencias(): Observable<Essencia[]>{
    return this.http.get<Essencia[]>('http://ec2-3-91-123-95.compute-1.amazonaws.com:8080/essencias');
  }

  getEssenciaById(id: string): Observable<Essencia>{
    return this.http.get<Essencia>('http://ec2-3-91-123-95.compute-1.amazonaws.com:8080/essencias/' + id);
  }

  updateEssencia(id: string, essencia: any): Observable<Essencia>{
    return this.http.put<Essencia>('http://ec2-3-91-123-95.compute-1.amazonaws.com:8080/essencias/' + id, essencia);
  }

  addEssencia(essencia: any): Observable<Essencia>{
    return this.http.post<Essencia>('http://ec2-3-91-123-95.compute-1.amazonaws.com:8080/essencias/', essencia);
  }

  deleteEssencia(id: string): Observable<Essencia>{
    return this.http.delete<Essencia>('http://ec2-3-91-123-95.compute-1.amazonaws.com:8080/essencias/' + id);
  }
}
