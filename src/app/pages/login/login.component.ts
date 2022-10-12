import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  jsonInFisica = {
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    maschio: 'maschio',
    femmina: '',
    cod_fiscale: '',
    tipo_indirizzo: 'via',
    indirizzo: '',
    comune: '',
    provincia: '',
    cap: '',
    pec: '',
    fax: '',
    maggiorenne: false,
    prodotto_auto: false,
    prodotto_vita: false,
    prodotto_salute: false,
  };

  jsonInGiuridica = {
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    maschio: 'maschio',
    femmina: '',
    cod_fiscale: '',
    tipo_indirizzo: 'via',
    indirizzo: '',
    comune: '',
    provincia: '',
    cap: '',
    pec: '',
    fax: '',
    maggiorenne: false,
    prodotto_auto: false,
    prodotto_vita: false,
    prodotto_salute: false,
  };

  @ViewChild('loginFormFisica') loginFormFisica!: NgForm;
  showErrorsFisica = false;

  @ViewChild('loginFormGiuridica') loginFormGiuridica!: NgForm;
  showErrorsGiuridica = false;

  constructor(private router: Router) {}

  signIn() {
    if (this.loginFormFisica.form.invalid) {
      this.showErrorsFisica = true;
    } else {
      console.log(this.jsonInFisica.maschio);
    }
  }

  signInGiuridica() {
    if (this.loginFormGiuridica.form.invalid) {
      this.showErrorsGiuridica = true;
    } else {
      console.log(this.jsonInGiuridica.maschio);
    }
  }
}
