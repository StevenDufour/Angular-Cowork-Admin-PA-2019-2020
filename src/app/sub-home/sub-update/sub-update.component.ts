import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {SubService} from '../../../services/sub/sub.service';

@Component({
  selector: 'app-sub-update',
  templateUrl: './sub-update.component.html',
  styleUrls: ['./sub-update.component.scss']
})
export class SubUpdateComponent implements OnInit {

  sub: FormGroup;
  errorSub = false;
  validateSub = false;
  subs: any = [];

  constructor(private formBuilder: FormBuilder, private subService: SubService, private activatedRoute: ActivatedRoute) {
    this.sub = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      firstHour: ['', Validators.required],
      nextHalfHour: ['', Validators.required],
      dayPrice: ['', Validators.required],
      withoutEngagement: ['', Validators.required],
      withEngagement: ['', Validators.required],
      numberOfEngagementMonth: ['', Validators.required],
    });
    this.getById(this.activatedRoute.snapshot.params.id);
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.errorSub = Object.keys(this.sub.controls).some(input => this.sub.get(input).invalid);

    const formData = this.sub.getRawValue();
    const jsonForm = JSON.stringify(formData);

    if (this.isValid()) {
      this.errorSub = false;
      this.subService.updateSub(formData).subscribe(
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

  getById(id): any {
    this.subService.getById(id)
      .subscribe(value => {
        this.subs = value;
      });
  }

}
