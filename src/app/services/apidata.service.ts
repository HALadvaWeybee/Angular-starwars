import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApidataService {
  url = 'https://swapi.dev/api/people';
  constructor(private http: HttpClient) {}

  peoples(i: number) {
    let tempUrl = '';
    tempUrl = `${this.url}/${'?page='}${i}`;
    return this.http.get(tempUrl);
  }
}
