import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListItens } from 'src/app/core/models/list-itens.model';
import { ListManagementService } from 'src/app/core/services/list-management.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
})
export class ListsPage implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    public listManagementService: ListManagementService
  ) { }

  public async ngOnInit() { }

  public navigateList(list: ListItens) {
    this.router.navigate(['/show-list', list]);
  }

  public ngOnDestroy() { }

}
