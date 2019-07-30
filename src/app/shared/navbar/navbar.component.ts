import { Component, Input } from '@angular/core';
import { NavbarTextService } from '../../core/navbar-text.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input()
  rootLink: string;
  text = '';
  constructor(private textService: NavbarTextService) {
    textService.changeEmitted$.subscribe((textChange) => this.text = textChange);
  }
}
