import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { AuthService } from '../../services/auth-service.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.98)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  public isAdmin: boolean = false;

  public constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isAdmin$.subscribe((admin) => {
      this.isAdmin = admin;
    });
  }

  public scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
