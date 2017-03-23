import { Component, OnInit } from '@angular/core';
import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { Product } from '../_models/index';

@Component({
  moduleId: module.id,
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent {
  currentUser: User;
  products: Product[] = [];

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
}
