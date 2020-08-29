import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SubService} from '../../../services/sub/sub.service';

@Component({
  selector: 'app-sub-create',
  templateUrl: './sub-create.component.html',
  styleUrls: ['./sub-create.component.scss']
})
export class SubCreateComponent implements OnInit {

  sub: FormGroup;
  errorSub = false;
  validateSub = false;

  constructor(private formBuilder: FormBuilder, private subService: SubService) {
    this.sub = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      firstHour: ['', Validators.required],
      nextHalfHour: ['', Validators.required],
      dayPrice: ['', Validators.required],
      withoutEngagement: ['', Validators.required],
      withEngagement: ['', Validators.required],
      numberOfEngagementMonth: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.errorSub = Object.keys(this.sub.controls).some(input => this.sub.get(input).invalid);

    const formData = this.sub.getRawValue();
    const jsonForm = JSON.stringify(formData);

    if (this.isValid()) {
      this.errorSub = false;
      this.subService.createSub(formData).subscribe(
        res => console.log(res),
        error => console.log(error)
      );
      this.validateSub = true;
    }

  }

  isValid(): boolean {
    if (this.errorSub === false){
      return true;
    }
  }

}
