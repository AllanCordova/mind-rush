import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public emailForm: string = '';
  public passwordForm: string = '';

  public constructor(private authService: AuthService) {}

  public handlerSubmit(): void {
    if (
      this.emailForm.trim() === 'admin' &&
      this.passwordForm.trim() === 'admin'
    ) {
      this.authService.loginAsAdmin();
    }
  }

  public logout(): void {
    this.authService.logout();
  }
}
