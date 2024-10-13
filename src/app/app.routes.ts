import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { galeria1 } from './index/index.component';

export const routes: Routes = [
    {path: '', component: galeria1
    }, 

    {path: 'login', component: LoginComponent
    },

    {path: 'cadastro', component: CadastroComponent
    }, 


];
