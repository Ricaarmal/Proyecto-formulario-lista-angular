import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  


  recibiendoElForm(bliss){
    console.log(bliss.value)
  }



  ngOnInit() {
  }

}
