import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  public canShowMarkedItens = false;
  public list;

  // tslint:disable-next-line: variable-name
  constructor(private _Activatedroute: ActivatedRoute) {
    this._Activatedroute.params.subscribe(params => {
      debugger;
      const values = params.values.split(',');
      const test = values.map((value) => ({ value, isChecked: false }));
      this.list = { values: test, title: params.title, description: params.description, isChecked: false };
    });
  }

  ngOnInit() { }

  showMarkedItens() {
    this.canShowMarkedItens = true;
  }

  hideMarkedItens() {
    this.canShowMarkedItens = false;
  }

}
