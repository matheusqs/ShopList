import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListItens } from 'src/app/core/models/list-itens.model';
import { ListManagementService } from 'src/app/core/services/list-management.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.page.html',
  styleUrls: ['./add-list.page.scss'],
})
export class AddListPage implements OnInit {

  public list: ListItens = new ListItens();
  public newValue: string;

  constructor(
    private listManagementService: ListManagementService,
    private router: Router
  ) { }

  ngOnInit() { }

  public addNewItem(): void {
    this.list.values.push(this.newValue);
  }

  public async save(): Promise<void> {
    this.listManagementService.addList(this.list);
    this.router.navigate(['/']);
  }

}
