import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    peso;
    altura;
    result;
    texto;
  
  constructor(public navCtrl: NavController) {
    
  }
  calcularIMC(){
    this.result=this.peso/((this.altura*this.altura)/10000);
/*IMC abaixo de 16 aponta magreza grave e pode causar insuficiência cardíaca, anemia grave e enfraquecimento do sistema imunológico.
IMC entre 16 e 17 aponta magreza moderada, o que pode levar à infertilidade, queda de cabelo e falta de menstruação.
IMC entre 17 e 18,5 é a magreza leve, o que pode resultar em estresse, ansiedade e fadiga.
IMC entre 18,5 e 25 é considerado saudável, apresentando menor risco para doenças.
IMC entre 25 e 30 indica sobrepeso, podendo levar à fadiga, varizes e má circulação.
IMC entre 30 e 35 aponta obesidade de grau I, podendo resultar em diabetes, infarto, angina e aterosclerose.
IMC entre 35 e 40 indica obesidade de grau II (severa), podendo causar falta de ar e apneia do sono.*/
this.texto = "cu."
   if(this.result<16){
    this.texto="Magreza grave, pode causar insuficiência cardíaca, anemia grave e enfraquecimento do sistema imunológico";
   }else if(this.result>16 && this.result<17){
  this.texto="Magreza moderada, o que pode levar à infertilidade, queda de cabelo e falta de menstruação";
   }else if(this.result>=17 && this.result<18.5){
  this.texto="Magreza leve, o que pode resultar em estresse, ansiedade e fadiga";
   }
   else if(this.result>=18.5 && this.result<25){
  this.texto="Considerado saudável, apresentando menor risco para doenças";
   }else if(this.result>=25 && this.result<30){
  this.texto="Sobrepeso, podendo levar à fadiga, varizes e má circulação.";
   }else if(this.result>=30 && this.result<35){
  this.texto="Obesidade de grau I, podendo resultar em diabetes, infarto, angina e aterosclerose";
   }else if(this.result>=35){
  this.texto="Obesidade de grau II (severa), podendo causar falta de ar e apneia do sono.";
   }
  }

}
