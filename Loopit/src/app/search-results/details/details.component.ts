import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  panelOpenState = false;
  id: number;
  member;

  constructor(private searchService:SearchService,
              private route: ActivatedRoute
              ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      this.id = params['id'];
      this.member = this.searchService.getMember(this.id);
    })
  }

  members = this.searchService.getMembers();

}
