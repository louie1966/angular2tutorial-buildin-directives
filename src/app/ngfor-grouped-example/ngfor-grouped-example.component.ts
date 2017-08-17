import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor-grouped-example',
  templateUrl: './ngfor-grouped-example.component.html',
  styleUrls: ['./ngfor-grouped-example.component.css']
})
export class NgForGroupedExampleComponent {
  peopleByCountry: any[] = [
    {
      'country': 'UK',
      'people': [
        {
          'name': 'Douglas Pace'
        },
        {
          'name': 'Mcleod Mueller'
        },
      ]
    },
    {
      'country': 'US',
      'people': [
        {
          'name': 'Day Meyers'
        },
        {
          'name': 'Aguirre Ellis'
        },
        {
          'name': 'Cook Tyson'
        }
      ]
    }
  ];
}