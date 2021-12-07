import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {
  //public formCrear = new FormGroup ({});
  //constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //this.formCrear = this.formBuilder.group({
     // nombre:['',[Validators.required, Validators.nombre]]
    //});

  }

}
