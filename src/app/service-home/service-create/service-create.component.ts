import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ServiceService} from '../../../services/service/service.service';

@Component({
  selector: 'app-service-create',
  templateUrl: './service-create.component.html',
  styleUrls: ['./service-create.component.scss']
})
export class ServiceCreateComponent implements OnInit {
  service: FormGroup;
  errorService = false;
  validateService = false;

  constructor(private formBuilder: FormBuilder, private serviceService: ServiceService) {
    this.service = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      amount: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.errorService = Object.keys(this.service.controls).some(input => this.service.get(input).invalid);

    const formData = this.service.getRawValue();
    const jsonForm = JSON.stringify(formData);
    console.log(formData);

    if (this.isValid()) {
      this.errorService = false;
      this.serviceService.createService(formData).subscribe(
        res => console.log(res),
        error => console.log(error)
      );
      this.validateService = true;
    }

  }

  isValid(): boolean {
    if (this.errorService === false){
      return true;
    }
  }

}
