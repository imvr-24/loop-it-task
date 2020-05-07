import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  members: {id: number, title: string, subtitle: string, content: string, location: string, url: string}[] = [
    {id: 1,title: 'Title', subtitle: 'Subtitle', content: 'Content here', location: 'Hyderabad', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {id: 2,title: 'Title', subtitle: 'Subtitle', content: 'Content here', location: 'Tampa', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {id: 3,title: 'Title', subtitle: 'Subtitle', content: 'Content here', location: 'Sydney', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {id: 4,title: 'Title', subtitle: 'Subtitle', content: 'Content here', location: 'Detroit', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {id: 5,title: 'Title', subtitle: 'Subtitle', content: 'Content here', location: 'Arizona', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {id: 6,title: 'Title', subtitle: 'Subtitle', content: 'Content here', location: 'Tampa', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {id: 7,title: 'Title', subtitle: 'Subtitle', content: 'Content here', location: 'Chicago', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {id: 8,title: 'Title', subtitle: 'Subtitle', content: 'Content here', location: 'Detroit', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {id: 9,title: 'Title', subtitle: 'Subtitle', content: 'Content here', location: 'Melbourne', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    
  ];

  constructor() { }

  getMembers() {
    return this.members;
  }

  getMember(id:number) {
    return this.members[id];
  }

}
