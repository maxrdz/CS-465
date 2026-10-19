import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Authentication } from '../services/authentication';
import { RouterModule } from '@angular/router';

// had to import this to force a re-render of this component on initial load
// (not sure why it wouldn't render the trip cards on the initial page load?)
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  constructor(private authenticationService: Authentication, private cdr: ChangeDetectorRef) {}
  ngOnInit() {}
  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }
  public onLogout(): void {
    // make sure this component is re-rendered with the latest data
    this.cdr.markForCheck();

    return this.authenticationService.logout();
  }
}