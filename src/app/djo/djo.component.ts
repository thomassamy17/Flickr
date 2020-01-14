import {Component, Input, OnInit, OnChanges, SimpleChanges, SimpleChange} from '@angular/core';
import {ImagesService} from '../images.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-djo',
  templateUrl: './djo.component.html',
  styleUrls: ['./djo.component.css']
})
export class DJOComponent implements OnInit {

  @Input() word: string;
  images: any[];
  constructor(private imagesService: ImagesService) {}

  ngOnInit() {
  }

  updateData() {
    this.imagesService.getImagesFromNetwork(this.word).subscribe(data => {
        this.images = data.photos.photo;
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      });
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges() {
    console.log(this.word);
    if (this.word !== undefined) {
      this.updateData();
    }
  }
}
