import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase';
import { MensajeAlertaService } from './mensajeAlerta.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;
  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    public afs: AngularFirestore,
    private msj: MensajeAlertaService
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', '');
      }
    });
  }

  async login(email: string, password: string): Promise<void> {
    var result = await this.afAuth.signInWithEmailAndPassword(email, password);
    this.router.navigate(['header']);
  }

  async logout(): Promise<void>{
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['home']);
}

  async register(email: string, password: string) {
    var result = await this.afAuth.createUserWithEmailAndPassword(email, password);
    this.msj.mensajeCorrecto('Se ha registrado correctamente', email);
    this.router.navigate(['home']);
    //this.sendMailVerification();
  }
  /*async sendMailVerification(): Promise<void> {
    await this.afAuth.currentUser.sendEmailVerification();
    this.router.navigate(['home']);
  }*/

  async sendPasswordResetEmail(passwordResetEmail: string): Promise<void> {
    return await this.afAuth.sendPasswordResetEmail(passwordResetEmail);
  }

  async loginWithGoogle(): Promise<void>{
    await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    this.router.navigate(['header']);
  }


}
