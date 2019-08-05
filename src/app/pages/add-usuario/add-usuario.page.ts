import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Usuario } from './../../model/usuario';
import { UsuarioService } from './../../services/usuario.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.page.html',
  styleUrls: ['./add-usuario.page.scss'],
})
export class AddUsuarioPage implements OnInit {

  public usuario: Usuario;
  public key:string;
  protected preview:any;

  constructor(
    public alertController: AlertController,
    public router: Router,
    public usuarioService: UsuarioService,
    private loadingCtrl: LoadingController,
    public activeRouter:ActivatedRoute,
    private camera: Camera,
    private afAuth:AngularFireAuth
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
    this.usuario = new Usuario;
    this.preview = null;
    this.key = this.activeRouter.snapshot.paramMap.get("key");
    if(this.key){
    this.usuarioService.get(this.key).subscribe(
     res => this.usuario = res,
     err => this.key = null
    );
    }
  }

  onSubmit(form) {
    if (form.valid) {
      //salvando os dados
    if(!this.key){
      this.afAuth.auth.createUserWithEmailAndPassword(this.usuario.email, this.usuario.pws)
        .then(
          res => {
            this.loadingCtrl.dismiss();
            this.usuario.email = null;
            this.usuario.pws = null;
            this.usuarioService.save(this.usuario, res.user.uid);
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
        this.usuarioService.update(this.usuario, this.key)
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
tirarfoto(){
  const options: CameraOptions = {
    quality: 50,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  
  this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   // If it's base64 (DATA_URL):
   let base64Image = 'data:image/jpeg;base64,' + imageData;
   this.preview = base64Image;
  }, (err) => {
   // Handle error
  });
}
}
