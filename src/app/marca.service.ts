import { Marca } from './marca';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor(private http: HttpClient) { }

  getMarcas(): Observable<Marca[]>{
    return this.http.get<Marca[]>('http://ec2-52-90-201-225.compute-1.amazonaws.com:8080/marcas');
  }

  getMarcaById(id: string): Observable<Marca>{
    return this.http.get<Marca>('http://ec2-52-90-201-225.compute-1.amazonaws.com:8080/marcas/' + id);
  }

  updateMarca(id: string, marca: any): Observable<Marca>{
    return this.http.put<Marca>('http://ec2-52-90-201-225.compute-1.amazonaws.com:8080/marcas/' + id, marca);
  }

  addMarca(marca: any): Observable<Marca>{
    return this.http.post<Marca>('http://ec2-52-90-201-225.compute-1.amazonaws.com:8080/marcas/', marca);
  }

  deleteMarca(id: string): Observable<Marca>{
    return this.http.delete<Marca>('http://ec2-52-90-201-225.compute-1.amazonaws.com:8080/marcas/' + id);
  }
}
