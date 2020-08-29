import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {ServiceService} from '../../../services/service/service.service';

@Component({
  selector: 'app-service-update',
  templateUrl: './service-update.component.html',
  styleUrls: ['./service-update.component.scss']
})
export class ServiceUpdateComponent implements OnInit {
  service: FormGroup;
  errorService = false;
  validateService = false;
  services: any = [];

  constructor(private formBuilder: FormBuilder, private serviceService: ServiceService, private activatedRoute: ActivatedRoute) {
    this.service = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      type: ['', Validators.required],
      amount: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required]
    });
    this.getById(this.activatedRoute.snapshot.params.id);
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.errorService = Object.keys(this.service.controls).some(input => this.service.get(input).invalid);

    const formData = this.service.getRawValue();
    const jsonForm = JSON.stringify(formData);

    if (this.isValid()) {
      this.errorService = false;
      this.serviceService.updateService(formData).subscribe(
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

  getById(id): any {
    this.serviceService.getById(id)
      .subscribe(value => {
        this.services = value;
        console.log(this.services);
      });
  }

}
