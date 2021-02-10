import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('products')
export class ProductsController {

  @Get()
  getAll(): string {
    return 'List all products.'
  }

  @Get(':id')
  getOne(@Param() params): string {
    return `Returns product data ${params.id}.`
  }

  @Post()
  create(@Body() product): string {
    console.log(product)

    return 'Created product.'
  }

  @Put()
  update(@Body() product): string {
    console.log(product)

    return 'Updated product.'
  }

  @Delete(':id')
  delete(@Param() params): string {
    return `Deleted product ${params.id}.`
  }
}