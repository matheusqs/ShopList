import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListItens } from 'src/app/core/models/list-itens.model';
import { ListManagementService } from 'src/app/core/services/list-management.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage {

  public canShowMarkedItens = false;
  public list: ListItens = new ListItens();

  // tslint:disable-next-line: variable-name
  constructor(
    _Activatedroute: ActivatedRoute,
    public listManagementService: ListManagementService
    ) {
    _Activatedroute.params.subscribe(async params => {
      this.list = await this.listManagementService.getList(params.id);
    });
  }

  public showMarkedItens() {
    this.canShowMarkedItens = true;
  }

  public hideMarkedItens() {
    this.canShowMarkedItens = false;
  }

  public createListUnmarkedItens() {
    // const list: ListItens;
    // Object.assign(list, this.list);
    // list.values = this.list.values.map(() => );
  }

}
