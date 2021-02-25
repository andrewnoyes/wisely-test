import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Inventory, Reservation, Restaurant } from './entities';
import { InventoryController, ReservationController, RestaurantController } from './controllers';
import { InventoryService, ReservationService, RestaurantService } from './services';
import { dbConfig } from './config';

@Module({
    imports: [
        TypeOrmModule.forRoot(dbConfig),
        TypeOrmModule.forFeature([Inventory, Reservation, Restaurant]),
    ],
    controllers: [InventoryController, ReservationController, RestaurantController],
    providers: [InventoryService, ReservationService, RestaurantService],
})
export class AppModule {}
