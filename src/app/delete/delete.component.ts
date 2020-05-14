import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Center } from '../models/center.model';
import { CenterService } from '../center.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  center : Center[];
  constructor(private router: Router, private centerService: CenterService) { }

  ngOnInit(): void {
    this.centerService.getCenterId().subscribe(data =>this.center=data);

  }

  handleSuccessfulResponse(response) {
    this.center = response;
  }
  delete(center:Center): any {
    this.centerService.delete(center.centerId).subscribe(
      data => {
       
      alert("Deleted Successfully")
      }
    );
    this.router.navigate(['/delete'])

}
}