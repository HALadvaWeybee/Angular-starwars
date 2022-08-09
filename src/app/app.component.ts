import { getLocaleMonthNames } from '@angular/common';
import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { ApidataService } from './services/apidata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'starwars';
  peopleM: any[] = [];
  people: string = '';
  url='https://starwars-visualguide.com/assets/img/characters';
  tempUrl='';
  images:any[]=[];
  
  constructor(private apidata: ApidataService) {
    console.log('apidata', apidata);
    
    for (let i = 1; i <= 9; i++) {
          apidata.peoples(i).subscribe((data: any) => {
          console.log("data",data.results);
          this.peopleM.push(data.results);
          console.log('i', i);
        });             
    }

    for(let i = 1; i <= 83; i++) {
      if(i !== 17) {
        this.tempUrl = `${this.url}/${i}${'.jpg'}`;
        this.images.push(this.tempUrl);
      }
    }
  }
}
