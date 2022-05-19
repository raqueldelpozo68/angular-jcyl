import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-datos-bancarios',
  templateUrl: './datos-bancarios.component.html',
  styleUrls: ['./datos-bancarios.component.css']
})
export class DatosBancariosComponent implements OnInit {

  formGroup!: FormGroup;


  constructor(private formBuilder: FormBuilder) { 
        this.formGroup = formBuilder.group(
          {entidad: new FormControl('', Validators.min(3333)), sucursal:'0000', dc:'', cuenta:''}
        )
  }

  ngOnInit(): void {

  }

  enviar(){
    console.log(this);
  }

}
