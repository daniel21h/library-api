import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './product.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'docker',
      database: 'library',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Product])
  ],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService],

})
export class AppModule { }
