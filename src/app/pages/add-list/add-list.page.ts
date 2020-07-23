import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ListItens } from 'src/app/core/models/list-itens.model';
import { ListManagementService } from 'src/app/core/services/list-management.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.page.html',
  styleUrls: ['./add-list.page.scss'],
})
export class AddListPage implements OnInit {
  public list: ListItens = new ListItens();
  public newValue = { value: '', isChecked: false };

  constructor(
    activatedroute: ActivatedRoute,
    private listManagementService: ListManagementService,
    private router: Router
  ) {
    activatedroute.params.subscribe(async (params) => {
      if (params.id) {
        this.list = await this.listManagementService.getList(params.id);
      }
    });
  }

  ngOnInit() {}

  public addItem(): void {
    this.list.values.push({ ...this.newValue });
    this.newValue.value = '';
  }

  public removeItem(index) {
    this.list.values.splice(index, 1);
  }

  public async save(): Promise<void> {
    if (this.list.uuid) {
      this.listManagementService.updateList(this.list);
    } else {
      this.listManagementService.addList(this.list);
    }
    this.router.navigate(['/']);
  }
}
