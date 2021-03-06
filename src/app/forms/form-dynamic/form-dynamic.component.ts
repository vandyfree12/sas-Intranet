import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormService, DynamicFormControlModel, DynamicFormLayout } from '@ng-dynamic-forms/core';
import { MATERIAL_SAMPLE_FORM_MODEL } from './form-dynamic.model';
import { MATERIAL_SAMPLE_FORM_LAYOUT } from './form-dynamic.layout';

@Component({
  selector: 'app-form-dynamic',
  templateUrl: './form-dynamic.component.html',
  styleUrls: ['./form-dynamic.component.scss']
})
export class FormDynamicComponent implements OnInit {

  formModel: DynamicFormControlModel[] = MATERIAL_SAMPLE_FORM_MODEL;
  formGroup: FormGroup;
  formLayout: DynamicFormLayout = MATERIAL_SAMPLE_FORM_LAYOUT;

  constructor(private formService: DynamicFormService) {}

  ngOnInit() {
      this.formGroup = this.formService.createFormGroup(this.formModel);
  }

  onBlur($event) {
      console.log(`Material blur event on: ${$event.model.id}: `, $event);
  }

  onChange($event) {
      console.log(`Material change event on: ${$event.model.id}: `, $event);
  }

  onFocus($event) {
      console.log(`Material focus event on: ${$event.model.id}: `, $event);
  }

  onMatEvent($event) {
      console.log(`Material ${$event.type} event on: ${$event.model.id}: `, $event);
  }
}
