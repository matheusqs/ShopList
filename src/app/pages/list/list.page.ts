import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListItens } from 'src/app/core/models/list-itens.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage {

  public canShowMarkedItens = false;
  public list: ListItens;

  // tslint:disable-next-line: variable-name
  constructor(private _Activatedroute: ActivatedRoute) {
    this._Activatedroute.params.subscribe(params => {
      const values = params.values.split(',');
      const test = values.map((value) => ({ value, isChecked: false }));
      this.list = { values: test, title: params.title, description: params.description };
    });
  }

  public showMarkedItens() {
    this.canShowMarkedItens = true;
  }

  public hideMarkedItens() {
    this.canShowMarkedItens = false;
  }

  public createListUnmarkedItens() {
    const list: ListItens;
    Object.assign(list, this.list);
    list.values = this.list.values.map(() => );
  }

}
