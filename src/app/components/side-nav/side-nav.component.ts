import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  language='English'
  constructor() { }

  ngOnInit() {
  }

  openNav() {
    let width = document.getElementById("mySidenav").style.width
    if (width == '250px')
      this.closeNav()
    else
      document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

}
