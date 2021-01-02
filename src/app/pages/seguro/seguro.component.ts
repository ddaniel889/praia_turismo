import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-seguro',
  templateUrl: './seguro.component.html',
  styleUrls: ['./seguro.component.css']
})
export class SeguroComponent implements OnInit {
  form: FormGroup;
  plan: FormGroup;
  getCot:FormGroup;
  getCotCat:FormGroup; 
  devCam:FormGroup;
  cotDest:FormGroup;
  newEmision:FormGroup;
  newPaxx:FormGroup;
  eProceso:FormGroup;
  vProcess:FormGroup; 
  vFecha: FormGroup;   
  vDetalle:FormGroup;
  vCancel:FormGroup;

  public login: string;
  public detalle: string;
  constructor(private httpClient: HttpClient, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      login: new FormControl(),
      senha: new FormControl()
  });

  this.plan = this.fb.group({
    loginPlan: new FormControl(),
    senhaPlan: new FormControl(),
    seguroPlan: new FormControl()
});

this.getCot = this.fb.group({
  userCot: new FormControl(),
  senhaCot: new FormControl(),
  cod: new FormControl(),
  finicio: new FormControl(),
  ffin: new FormControl(),
  numeroPax: new FormControl(),
  famPax: new FormControl(),
  destPax: new FormControl(),
  codcanelacion: new FormControl(),
  codcovid: new FormControl()

});

this.getCotCat= this.fb.group({
  getlogin: new FormControl(),
  senhaCat: new FormControl(),
  destinoCat: new FormControl(),
  finicioCat: new FormControl(),
  ffinCat: new FormControl(),
  numeroCat: new FormControl(),
  destCat: new FormControl(),
  codcanelacionCat: new FormControl(),
  codcovidCat: new FormControl()
});

this.devCam = this.fb.group({                    
  logCam: new FormControl(),
  senhaCam: new FormControl(),
  valorCam: new FormControl(),
});

this.cotDest = this.fb.group({                   
  userDest: new FormControl(),
  senhaDest: new FormControl(),
  dest: new FormControl(), 
  catDest: new FormControl(),
  ffinDest: new FormControl(),
  finicioDest: new FormControl(),      
  numeroPaxDest: new FormControl(),
  familiaCotDest: new FormControl(), 
  cancelDest: new FormControl(),
  covidDest: new FormControl(),

});

this.newEmision = this.fb.group({                   
  userEmision: new FormControl(),
  senhaEmision: new FormControl(),
  planEmision: new FormControl(), 
  numPaxE: new FormControl(),
  ffinEmision: new FormControl(),
  finicioEmision: new FormControl(),      
  destEmision: new FormControl(),
  familiaCot: new FormControl(), 
  codCancel: new FormControl(),
  codCovid: new FormControl(),

});

this.newPaxx = this.fb.group({                   
  usuarioPax: new FormControl(),
  senhaPax: new FormControl(),
  procesoId: new FormControl(), 
  pax: new FormControl(),
  sexo: new FormControl(),
  paxFech: new FormControl(),      
  idade: new FormControl(),
  paxGestante: new FormControl(), 
  semanaGestacao: new FormControl(),
  docTipo: new FormControl(),
  numDoc: new FormControl(),
  endereco: new FormControl(), 
  numUPax: new FormControl(),
  cep: new FormControl(),
  barrio: new FormControl(), 
  complemento: new FormControl(),
  cidade: new FormControl(),
  uf: new FormControl(),
  email: new FormControl(), 
  telefono: new FormControl(),
  celular: new FormControl()

});

  this.eProceso = this.fb.group({                   
    logProcess: new FormControl(),
    senhaProcess: new FormControl(),
    procesoId: new FormControl()
  
  });

  this.vProcess = this.fb.group({                   
    vlogin: new FormControl(),
    vSenha: new FormControl(),
    vProcesoid: new FormControl()
  
  });

  this.vFecha = this.fb.group({                   
    logFecha: new FormControl(),
    senhaFecha: new FormControl(),
    iniFecha: new FormControl(),
    finFecha: new FormControl()
  
  });

  this.vDetalle = this.fb.group({                   
    logDetalle: new FormControl(),
    senhaDetalle: new FormControl(),
    processNum: new FormControl(),
    idiomaNum: new FormControl()
  
  });

  this.vCancel = this.fb.group({                   
    logCancel: new FormControl(),
    senhaCancel: new FormControl(),
    numCancel: new FormControl()
  
  });

 
  console.log(this.form.value);
  }


  
  GetPlanos(): void {
    //http://www.affinityassistencia.com.br/ws/exemplos/getPlanos.asp
    console.log('hello');
    console.log(this.form.value);
  }

  GetPlanosById(): void {
    //http://www.affinityassistencia.com.br/ws/exemplos/getPlanosById.asp
    console.log('hello');
    console.log(this.plan.value);
  }

  GetCotacao(): void {
    //http://www.affinityassistencia.com.br/ws/exemplos/getCotacao.asp
    console.log('hello');
    console.log(this.getCot.value)
  }

  GetCotacaoCategoria(): void {
    //nacionales o internacionales
    //http://www.affinityassistencia.com.br/ws/exemplos/getCotacaoCategoria.asp
    console.log('hello'); 
    console.log(this.getCotCat.value)
  }

  GetCambio(): void {
    //cambio
    //http://www.affinityassistencia.com.br/ws/exemplos/getCambio.asp
    console.log('hello'); 
    console.log(this.devCam.value);
  }

  getCotacaoDestino(): void {
    //cotizacion por destino
    //http://www.affinityassistencia.com.br/ws/exemplos/getCotacaoCategoria.asp
    console.log('hello'); 
    console.log(this.cotDest.value)
  }

  newProcesso(): void {
    //nuevo proceso
    //http://www.affinityassistencia.com.br/ws/exemplos/newProcesso.asp
    console.log('hello');
    console.log(this.newEmision.value) 
  }

  newPax(): void {
    //nuevo pasajero
    //http://www.affinityassistencia.com.br/ws/exemplos/newPax.asp
    console.log('hello');  
    console.log(this.newPaxx.value)
  }

  emitirProceso(): void {
    //nuevo pasajero
    //http://www.affinityassistencia.com.br/ws/exemplos/EmitirProcesso.asp
    console.log(this.eProceso.value);
    console.log('hello');  
  }

  getVoucherProcesso(): void {
    //nuevo pasajero
    //http://www.affinityassistencia.com.br/ws/exemplos/getVoucherProcesso.asp
    console.log('hello'); 
    console.log(this.vProcess.value); 
  }


  getVoucherFecha(): void {
    //nuevo pasajero
    //http://www.affinityassistencia.com.br/ws/exemplos/getVoucherByData.asp
    console.log('hello'); 
    console.log(this.vFecha.value);
  }    

  getDetail(): void {
    //nuevo pasajero
    //http://www.affinityassistencia.com.br/ws/exemplos/getVoucher.asp
    console.log('hello');  
    console.log(this.vDetalle.value);
  } 

  cancelVaucher(): void {
    //nuevo pasajero
    //http://www.affinityassistencia.com.br/ws/exemplos/getCancelamento.asp
    console.log('hello'); 
    console.log(this.vCancel.value); 
  } 
}
