import { Injectable } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductsService {
  products: Product[] = [
    new Product('LIV0001', 'TDD e DDD na prática', 29.90),
    new Product('LIV0002', 'Dominando a DOM', 19.90),
    new Product('LIV0003', 'NestJS - Escale sem limites', 49.90),
  ];

  getAll(): Product[] {
    return this.products;
  }

  getOne(id: number): Product {
    return this.products[0];
  }

  create(product: Product) {
    this.products.push(product);
  }

  update(product: Product): Product {
    return product;
  }

  delete(id: number) {
    this.products.pop();
  }
}