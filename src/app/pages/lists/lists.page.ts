import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListItens } from 'src/app/core/models/list-itens.model';
import { ListManagementService } from 'src/app/core/services/list-management.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
})
export class ListsPage implements OnInit {

  constructor(
    private router: Router,
    public listManagementService: ListManagementService,
    public alertController: AlertController
  ) { }

  public async ngOnInit() { }

  public navList(list: ListItens) {
    this.router.navigate(['/show-list', list.uuid]);
  }

  public navUpdateList(list: ListItens) {
    const uuid = list ? list.uuid : undefined;
    this.router.navigate(['/add-list', uuid]);
  }

  public async removeList(list: ListItens) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Apagar Lista',
      subHeader: 'Você tem certeza disso? Esta ação é definitiva.',
      buttons: [{
        text: 'Apagar',
        handler: () => {
          this.listManagementService.deleteList(list.uuid);
        }
      }, 'Cancelar']
    });

    await alert.present();
  }
}
