import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { ListItens } from '../models/list-itens.model';
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
    this._lists = ((await this.storageService.getAllValues()) as ListItens[]) || [];
    this.emitLists();
  }

  public addList(list: ListItens) {
    const uuid = uuidv4();
    list.uuid = uuid;
    this.storageService.setValue(uuid, list);
    this._lists.push(list);
    this.emitLists();
  }

  public async getList(key: string): Promise<ListItens> {
    return await this.storageService.getValue(key);
  }

  public emitLists(): void {
    this.lists$.next(this._lists);
  }
}
