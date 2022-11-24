import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  getDAtaHome(){
    return this.httpClient.get('https://demo2871578.mockable.io/api/content/page=/home');
  }

}