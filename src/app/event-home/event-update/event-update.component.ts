import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../../services/product/product.service';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../../../services/event/event.service';

@Component({
  selector: 'app-event-update',
  templateUrl: './event-update.component.html',
  styleUrls: ['./event-update.component.scss']
})
export class EventUpdateComponent implements OnInit {
  event: FormGroup;
  errorEvent = false;
  validateEvent = false;
  events: any = [];

  constructor(private formBuilder: FormBuilder, private eventService: EventService, private activatedRoute: ActivatedRoute) {
    this.event = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      amount: ['', Validators.required],
      type: ['', Validators.required]
    });
    this.getById(this.activatedRoute.snapshot.params.id);
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.errorEvent = Object.keys(this.event.controls).some(input => this.event.get(input).invalid);

    const formData = this.event.getRawValue();
    const jsonForm = JSON.stringify(formData);

    if (this.isValid()) {
      this.errorEvent = false;
      this.eventService.updateEvent(formData).subscribe(
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

  getById(id): any {
    this.eventService.getById(id)
      .subscribe(value => {
        this.events = value;
      });
  }

}
