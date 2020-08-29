import { Component, OnInit } from '@angular/core';
import {SubService} from '../../../services/sub/sub.service';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.scss']
})
export class SubComponent implements OnInit {
  subs: any = [];
  displayedColumns: string[] = ['name', 'description', 'firstHour', 'nextHalfHour', 'dayPrice', 'withEngagement', 'withoutEngagement', 'numberOfEngagementMonth', 'update', 'delete'];

  constructor(private subService: SubService) {
    this.subs = this.getAllSubs();
  }

  ngOnInit(): void {
  }

  getAllSubs(): any {
    this.subService.getAllSubs()
      .subscribe(value => this.subs = value);
  }


  deleteSub(id): any {
    console.log(id);
    this.subService.deleteSub(id).subscribe(complete => this.getAllSubs());
    window.location.reload();
  }

}
