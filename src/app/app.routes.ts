import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';

export const routes: Routes = [
    {path: '', component: LoginComponent
    },

    {path: 'cadastro', component: CadastroComponent
    }
];
