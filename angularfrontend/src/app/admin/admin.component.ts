import { Component, OnInit } from '@angular/core';
import {SidebarService} from '../shared/sidebar.service';
import {mainContentAnimation} from '../animation/animation';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  title = 'angularfrontend';
  sideNavState: any;

  constructor(private sideBarService: SidebarService ) {
  }


  ngOnInit(): void{
    this.sideBarService.sideBareObservbal.subscribe(
        (navState: string) => {
          this.sideNavState = navState;
        }
    );
  }
}
