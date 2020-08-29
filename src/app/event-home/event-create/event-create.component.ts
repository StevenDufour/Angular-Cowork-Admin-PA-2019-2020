import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../../services/product/product.service';
import {EventService} from '../../../services/event/event.service';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent implements OnInit {
  event: FormGroup;
  errorEvent = false;
  validateEvent = false;

  constructor(private formBuilder: FormBuilder, private eventService: EventService) {
    this.event = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      amount: ['', Validators.required],
      type: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.errorEvent = Object.keys(this.event.controls).some(input => this.event.get(input).invalid);

    const formData = this.event.getRawValue();
    const jsonForm = JSON.stringify(formData);

    if (this.isValid()) {
      this.errorEvent = false;
      this.eventService.createEvent(formData).subscribe(
        res => console.log(res),
        error => console.log(error)
      );
      this.validateEvent = true;
    }

  }

  isValid(): boolean {
    if (this.errorEvent === false){
      return true;
    }
  }

}
