import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValueBase } from '../models/value-base';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {

  constructor() { }

  toFormGroup(values: ValueBase<any>[]) {
    let group: any = {};

    values.forEach(value => {
      group[value.key] = value.required
        ? new FormControl(value.value || '', Validators.required)
        : new FormControl(value.value || '');
    });
    return new FormGroup(group);
  }
}
