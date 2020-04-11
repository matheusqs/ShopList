import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(
    private menuController: MenuController,
    private router: Router
  ) { }

  ngOnInit() { }

  openMenu() {
    this.menuController.open();
  }

  navVisualizeList() {
    this.router.navigate(['/']);
  }

  navEditList() {
    this.router.navigate(['/']);
  }

  navNewList() {
    this.router.navigate(['/add-list']);
  }

}
