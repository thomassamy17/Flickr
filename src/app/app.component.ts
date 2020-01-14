import {Component, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Flickr';
  word: string;
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      'word' : [null, Validators.required]
    });
  }

  onSubmit(form) {
    this.word = form.word;
  }

}
