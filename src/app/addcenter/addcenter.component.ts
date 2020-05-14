import { Component, OnInit } from '@angular/core';
import { Center } from '../models/center.model';
import { Router } from '@angular/router';
import { CenterService } from '../center.service';
@Component({
  selector: 'app-addcenter',
  templateUrl: './addcenter.component.html',
  styleUrls: ['./addcenter.component.css']
})
export class AddcenterComponent implements OnInit {
  center: Center = new Center();
  constructor(private router: Router, private centerService: CenterService) { }

  ngOnInit(): void {
  }

  addCenter(): void {
    this.centerService.addCenter(this.center).subscribe(
      data => {
        console.log("response recieved");
      alert("Center Added Successfully")
      },
      error => {
        console.log("exception occured");
        
        

}
    )
}

}
