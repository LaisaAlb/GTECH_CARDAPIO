import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
      
  }
  productCart(){
    this.router.navigate(['/listProductSelected'])
  }
}
