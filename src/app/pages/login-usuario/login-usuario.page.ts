import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { MensagensService } from 'src/app/services/mensagens.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.page.html',
  styleUrls: ['./login-usuario.page.scss'],
})
export class LoginUsuarioPage implements OnInit {

  protected email:string;
  protected pws:string;

  constructor(
    public afAuth: AngularFireAuth,
    public msg:MensagensService,
    public router: Router,
    ) { }
    

  ngOnInit() {
  }

  onSubmit(form){
    if(form.valid){
      this.login();
    }else{
      this.msg.presentAlert("ERRO","Campos obrigatorios!")
    }
  }

  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.email,this.pws).then(
      res=>{
        this.router.navigate(['/']);
        console.log(res.user.uid);

      },
      err=>{
        this.msg.presentAlert("erro!","usuario não localizado");
        //this.email = null
        //this.pws = null
      }
    );
  }

  loginWeb() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
