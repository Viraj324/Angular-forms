// dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../local-storage.service';
import { SignUpModel } from '../login/login.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: SignUpModel[] = [];

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    const localUsers = this.localStorageService.getData('angular17users');
    this.users = localUsers ? localUsers : [];
  }
}
