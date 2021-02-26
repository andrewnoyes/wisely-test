import { Entity, Column, OneToMany, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import { BaseEntity } from './base.entity';
import { Restaurant } from './restaurant.entity';
import { Reservation } from './reservation.entity';

@Entity()
export class Inventory extends BaseEntity {
    @ApiProperty()
    @Column()
    public reservationLimit: number;

    @ApiProperty()
    @Column({ type: 'timestamp' })
    public time: Date;

    @ApiProperty()
    @Column({ type: 'date' })
    public date: Date;

    @ApiProperty()
    @Column()
    public restaurantId: number;

    @ManyToOne(() => Restaurant, (restaurant) => restaurant.inventories)
    public restaurant: Restaurant;

    @OneToMany(() => Reservation, (reservation) => reservation.inventory)
    public reservations: Reservation[];
}
