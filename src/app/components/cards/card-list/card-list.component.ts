import { Component, Input, OnInit } from '@angular/core';
import { CardProductService } from '../../../services/card.product.service'; 
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router'; 
import { Product } from '../../../interfaces/products'; 

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent implements OnInit {
  
  @Input() products: Product[] = [];
  productsCards: any[] = [];
  faArrowLeft = faArrowLeft;

  constructor(
    private cardProductService: CardProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.cardProductService.getProducts().subscribe((data: any[]) => {
    //   this.productsCards = data;
    // });
    this.loadProducts();
  }
  previous() {
    this.router.navigate(['']);
  }
  loadProducts() {
    this.cardProductService.getProducts().subscribe(data => {
      this.productsCards = data; 
    });
  }
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
