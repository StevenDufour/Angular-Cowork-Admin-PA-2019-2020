import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product/product.service';
import {EventService} from '../../../services/event/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  events: any = [];
  displayedColumns: string[] = ['name', 'description', 'amount', 'type', 'update', 'delete'];

  constructor(private eventService: EventService) {
    this.events = this.getAllEvents();
  }

  ngOnInit(): void {
  }

  getAllEvents(): any {
    this.eventService.getAllEvents()
      .subscribe(value => this.events = value);
  }


  deleteEvent(id): any {
    console.log(id);
    this.eventService.deleteEvent(id).subscribe(complete => this.getAllEvents());
    window.location.reload();
  }

}
