import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor-example',
  templateUrl: './ngfor-example.component.html',
  styleUrls: ['./ngfor-example.component.css']
})
export class NgForExampleComponent {
  people: any[] = [
    {
      'name': 'Douglas Pace'
    },
    {
      'name': 'Mcleod Mueller'
    },
    {
      'name': 'Day Meyers'
    },
    {
      'name': 'Aguirre Ellis'
    },
    {
      'name': 'Cook Tyson'
    }
  ];
}