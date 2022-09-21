import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ValueBase } from 'src/app/models/value-base';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
  @Input() value!: ValueBase<any> | any;
  @Input() form!: FormGroup;

  get isValid() { return this.form.controls[this.value.key].valid; }

  constructor() { }

  ngOnInit(): void {
  }

}
