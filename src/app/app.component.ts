import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { DataService } from './services/data.service';
import { RestService } from './services/rest.service';

interface EventsResponse extends Response {
  date: string;
  name: string; 
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  
  providers: [
    DataService,
    RestService
  ]
})
export class AppComponent {
  title = 'Dane pierwszego zdarzenia pobranego przez API:';
  date = '';
  name = '';

  constructor(private dataService: DataService) {    
    this.dataService.fetch('http://127.0.0.1:8000/events/?format=json')
      .subscribe((response: EventsResponse): void => {
        this.date = response[0].date;
        this.name = response[0].name;
        console.log(response[0]);
      });
  }  
  
}
