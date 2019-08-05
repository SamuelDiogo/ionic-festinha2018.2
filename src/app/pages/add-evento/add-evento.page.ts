import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController} from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { EventoService } from 'src/app/services/evento.service';
import { Evento } from 'src/app/model/evento';

@Component({
  selector: 'app-add-evento',
  templateUrl: './add-evento.page.html',
  styleUrls: ['./add-evento.page.scss'],
  
})

export class AddEventoPage implements OnInit {
  
  public evento: Evento;
  public key:string;

  constructor(
    public alertController: AlertController,
    public router: Router,
    public EventoService: EventoService,
    public activeRouter:ActivatedRoute,
    private loadingCtrl: LoadingController,
    
  ) { }

  showLoading(){
    this.loadingCtrl.create({
      message: "Cadastrando...",
      spinner: "lines-small"
    }).then((loading) => {
      loading.present();

    })
    
  }

  closeLoading(){
    this.loadingCtrl.dismiss();
  }

  ngOnInit() {
    this.evento = new Evento;

    this.key = this.activeRouter.snapshot.paramMap.get("key");
    if(this.key){
    this.EventoService.get(this.key).subscribe(
     res => this.evento = res,
     err => this.key = null
    );
    }
  }
  
  onSubmit(form) {
    if (form.valid) {
      //salvando os dados
    if(!this.key){
      this.EventoService.save(this.evento)
        .then(
          res => {
            this.loadingCtrl.dismiss();
            this.presentAlert("Aviso", "Cadastrado!");
            form.reset();
            this.router.navigate(['/']);
          },
          err=>{
            this.loadingCtrl.dismiss();
            this.presentAlert("Epa!", "Erro ao cadastrar!");
          }
        ).catch(
          err=>{
            this.loadingCtrl.dismiss();
            this.presentAlert("Epa", "Erro ao acessar o sistema!");
            this.router.navigate(['/']);
          },
        )
      }else{
        //atualizando os dados
        this.EventoService.update(this.evento, this.key)
        .then(
          res => {
            this.presentAlert("Aviso", "Atulizado!");
            form.reset();
            this.router.navigate(['/']);
          },
          err=>{
            this.presentAlert("Epa!", "Erro ao atualizar!");

        }
      )
    }
  }
}

  async presentAlert(titulo: string, texto: string) {
    const alert = await this.alertController.create({
      header: titulo,
      //subHeader: 'Subtitle',
      message: texto,
      buttons: ['OK']
    });

    await alert.present();
  }
}

