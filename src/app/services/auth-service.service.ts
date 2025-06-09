import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAdminSubject = new BehaviorSubject<boolean>(this.checkAdmin());
  isAdmin$ = this.isAdminSubject.asObservable();

  private checkAdmin(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user?.role === 'admin';
  }

  isAdmin(): boolean {
    return this.checkAdmin();
  }

  loginAsAdmin() {
    localStorage.setItem('user', JSON.stringify({ role: 'admin' }));
    this.isAdminSubject.next(true);
  }

  logout() {
    localStorage.removeItem('user');
    this.isAdminSubject.next(false);
  }
}
