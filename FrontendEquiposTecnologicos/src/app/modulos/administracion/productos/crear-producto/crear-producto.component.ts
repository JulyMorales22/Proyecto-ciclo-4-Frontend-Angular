import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  //fgValidador: FormGroup = this.fb.group({

  //})
  constructor(/*private fb:FormBuilder*/) { }

  ngOnInit(): void {
  }

}
