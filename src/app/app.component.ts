import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'starwars';
  peopleM: any[] = [];
  url = 'https://starwars-visualguide.com/assets/img/characters';
  url2 = 'https://swapi.dev/api/people';
  tempUrl = '';
  images: any[] = [];
  tempImages: any[] = [];
  color:string='red';


  constructor(private http:HttpClient) {
    // for(let i = 1; i <= 83; i++) {
    //   if(i !== 17) {
    //     this.tempUrl = `${this.url}/${i}${'.jpg'}`;
    //     this.images.push(this.tempUrl);
    //   }
    // }
  }
  async ngOnInit() {
    for (let i = 1; i <= 9; i++) {
      let tempUrl='';
      tempUrl = `${this.url2}/${'?page='}${i}`;

      this.http.get<any>(tempUrl).subscribe(data => {
        this.peopleM.push(data.results); 
      })
      await this.http.get<any>(tempUrl).toPromise().then(data => {
      })
    }
    
  }



  // constructor(private apidata: ApidataService) {
  //   // console.log('apidata', apidata);
  //   // for (let i = 1; i <= 9; i++) {
  //   //   apidata.peoples(i).subscribe((data: any) => {
  //   //     console.log("data",data.results);
  //   //     this.peopleM.push(data.results);
  //   //     console.log('i', i);
  //   //   });
  //   // }

  //   // this.temppeopleM = this.peopleM;
   
  //   // this.tempImages = this.images;
  // }
  
  // async await

  // async getData(url2: string) {
  //   let data = await this.apidata.getDataSynchronous(url2);
  //   console.log('data', data.results);
  //   this.peopleM.push(data.results);  
  // }
  // ngOnInit(): void {
  //   for (let i = 1; i <= 9; i++) {
  //     this.tempUrl = `${this.url2}/${'?page='}${i}`;
  //     this.getData(this.tempUrl);
  //   }
  // }
}
