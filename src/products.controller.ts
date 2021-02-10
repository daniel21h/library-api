import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Product } from "./product.model";

@Controller('products')
export class ProductsController {
  products: Product[] = [
    new Product('LIV0001', 'TDD e DDD na prática', 29.90),
    new Product('LIV0002', 'Dominando a DOM', 19.90),
    new Product('LIV0003', 'NestJS - Escale sem limites', 49.90),
  ];

  @Get()
  getAll(): Product[] {
    return this.products;
  }

  @Get(':id')
  getOne(@Param() params): Product {
    return this.products[params.id];
  }

  @Post()
  create(@Body() product: Product): string {
    product.id = 100;
    this.products.push(product);

    return 'Created product.';
  }

  @Put()
  update(@Body() product: Product): Product {

    return product
  }

  @Delete(':id')
  delete(@Param() params): Product {

    return this.products.pop()
  }
}