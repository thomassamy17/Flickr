import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ImagesNetwork} from './images-network';

@Injectable({
  providedIn: 'root'
})

export class ImagesService {

  constructor(private http: HttpClient) {
  }

  getImagesFromNetwork(word: string): Observable<ImagesNetwork> {
    // tslint:disable-next-line:max-line-length
    return this.http.get<ImagesNetwork>('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=535a87a2f2c770de1777c7a7931a724f&tags=' + word + '&format=json&nojsoncallback=1%27');
  }
}
