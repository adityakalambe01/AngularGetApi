import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'getApi';

  imageList: any[] = [];

  constructor(private http:HttpClient){

  }

  ngOnInit(): void {
    this.http
        .get('https://jsonplaceholder.typicode.com/photos')
        .subscribe((response:any) =>{
          this.imageList = response;
        }, error =>{
          console.log("Something went wrong");
        });
  }

}
