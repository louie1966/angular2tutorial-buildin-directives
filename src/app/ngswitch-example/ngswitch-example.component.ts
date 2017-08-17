import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch-example',
  templateUrl: './ngswitch-example.component.html',
  styleUrls: ['./ngswitch-example.component.css']
})
export class NgSwitchExampleComponent {
  people: any[] = [
    {
      'name': 'Douglas Pace',
      'age': 35,
      'country': 'MARS'
    },
    {
      'name': 'Mcleod Mueller',
      'age': 32,
      'country': 'USA'
    },
    {
      'name': 'Day Meyers',
      'age': 21,
      'country': 'HK'
    },
    {
      'name': 'Aguirre Ellis',
      'age': 34,
      'country': 'UK'
    },
    {
      'name': 'Cook Tyson',
      'age': 32,
      'country': 'USA'
    }
  ];
}
