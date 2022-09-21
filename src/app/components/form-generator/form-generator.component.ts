import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlService, FormValueService } from 'src/app/services';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent implements OnInit {
  form!: FormGroup;
  payLoad = '';
  values!: any[];

  constructor(private readonly fcService: FormControlService, private readonly service: FormValueService) { }

  ngOnInit(): void {
    this.service.getFormValue().subscribe(data => {
      this.values = data;
      this.form = this.fcService.toFormGroup(this.values);
    });
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
