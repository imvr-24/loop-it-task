import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(private searchService:SearchService) { }

  ngOnInit(): void {
  }

  members = this.searchService.getMembers();


  folders = [
    {
      name: 'cd',
      updated: true
    }
  ];
  notes = [
    {
      name: 'samp',
      updated: true
    }
  ];

}
