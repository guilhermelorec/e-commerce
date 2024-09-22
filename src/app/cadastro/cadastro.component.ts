import { Component } from '@angular/core';
import {FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { NgStyle } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { InputMaskModule } from 'primeng/inputmask';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FloatLabelModule, FormsModule, ButtonModule, NgStyle, InputTextModule,  PasswordModule, InputMaskModule, ToastModule],
  providers:[MessageService],

  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  nome: string | undefined
  cpf: string | undefined
  email: string | undefined
  password: string | undefined

  constructor(private messageService: MessageService){

  }

  salvarUsuario (){
      // this.messageService.add({severity:'success',summary:'sucesso', detail:'usuario cadastrado'})
      this.messageService.add({severity:'error',summary:'erro', detail:'usuario  não cadastrado'})
    }
}
