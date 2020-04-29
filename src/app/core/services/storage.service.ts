import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  public async setValue(key: string, value: any): Promise<void> {
    try {
      await this.storage.set(key, value);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async getValue(key: string): Promise<any> {
    try {
      return await this.storage.get(key);
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }

  public async getAllValues() {
    const values = [];
    const keys = await this.storage.keys();

    for (const key of keys) {
      values.push(await this.storage.get(key));
    }
    
    return values;
  }
}
