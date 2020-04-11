import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ListItens } from '../models/list-itens.model';
import { StorageKeys } from '../models/storage-keys.enum';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ListManagementService {

  // tslint:disable-next-line: variable-name
  private _lists: ListItens[];
  public lists$ = new BehaviorSubject<ListItens[]>([]);

  constructor(private storageService: StorageService) {
    this.reloadLists();
  }

  public async reloadLists(): Promise<void> {
    this._lists = ((await this.storageService.getValue(StorageKeys.LISTS)) as ListItens[]) || [];
    this.emitLists();
  }

  public addList(list: ListItens) {
    this.storageService.setValue(StorageKeys.LISTS, [...this._lists, list]);
    this._lists.push(list);
    this.emitLists();
  }

  public emitLists(): void {
    this.lists$.next(this._lists);
  }
}
