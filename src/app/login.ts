import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './login.html',
    styleUrl: './login.css'
})
export class LoginPage {
    activeTab: 'login' | 'register' = 'login';

    email = '';
    senha = '';

    nome = '';
    telefone = '';
    cadastroEmail = '';
    cadastroSenha = '';
    confirmarSenha = '';
    registerMessage = '';
    registerError = false;

    setTab(tab: 'login' | 'register'): void {
        this.activeTab = tab;
        this.registerMessage = '';
        this.registerError = false;
    }

    onSubmit(): void {
        console.log('Login submetido', { email: this.email, senha: this.senha });
    }

    onRegisterSubmit(): void {
        if (this.cadastroSenha !== this.confirmarSenha) {
            this.registerError = true;
            this.registerMessage = 'A confirmação de senha precisa estar exatamente igual à senha.';
            return;
        }

        this.registerError = false;
        this.registerMessage = 'Cliente cadastrado com sucesso.';

        console.log('Cadastro cliente', {
            nome: this.nome,
            telefone: this.telefone,
            email: this.cadastroEmail,
            senha: this.cadastroSenha
        });
    }
}
