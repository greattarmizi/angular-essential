import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit{
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      medium: new FormControl('Movies'),
      name: new FormControl('', Validators.compose([
        Validators.required, 
        Validators.pattern('[\\w\\-\\s\\/]+')])),
      category: new FormControl(''),
      year: new FormControl('', this.yearValidator)
    });
  }

  yearValidator(control: FormControl) {
    if(control.value.trim().length === 0){
      return null;
    }

    const year = parseInt(control.value, 10);
    const minYear = 1900;
    const maxYear = 2100;
    console.log('yearc 1: ' + year);
    if (year >= minYear && year <= maxYear) {
      console.log('year 2: ' + year);
      return null;
    } else {
      console.log('year 3: ' + year);
      return { year: true};
    } 

  }

  onSubmit(mediaItem){
    console.log(mediaItem);
  }  

}