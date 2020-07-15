import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public peopleInfo:any = {
    username:'1111',
    sex:1
  }

  constructor() { }

  ngOnInit() {

  }

  getValue(){
    console.log(this.peopleInfo.username);
  }

}
