import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../../services/service/service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  services: any = [];
  displayedColumns: string[] = ['name', 'type', 'amount', 'description', 'price', 'update', 'delete'];

  constructor(private serviceService: ServiceService) {
    this.services = this.getAllServices();
  }

  ngOnInit(): void {
  }

  getAllServices(): any {
    this.serviceService.getAllServices()
      .subscribe(value => this.services = value);
  }


  deleteProduct(id): any {
    console.log(id);
    this.serviceService.deleteService(id).subscribe(complete => this.getAllServices());
    window.location.reload();
  }

}
