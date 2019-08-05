import { Component, OnInit } from '@angular/core';
import { EventoService } from 'src/app/services/evento.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-list-evento',
  templateUrl: './list-evento.page.html',
  styleUrls: ['./list-evento.page.scss'],
})
export class ListEventoPage implements OnInit {
  eventos: any;

  constructor(
   
    public eventoService: EventoService,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.eventos = this.eventoService.getAll();
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  remover(key){
    this.eventoService.remove(key).then(
      res => {this.presentAlert("Aviso!", "Evento apagado")}, 
      err =>{this.presentAlert("Erro!", "Não foi possivel apagar o evento!")}
    ) 
  }
  async presentAlert(titulo: string, texto: string) {
    const alert = await this.alertController.create({
      header: titulo,
      //subHeader:'',
      message: texto,
      buttons: ['Ok']
    });

    await alert.present();
  }
}
