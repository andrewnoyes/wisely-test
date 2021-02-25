import { Entity, Column, JoinTable, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import { BaseEntity } from './base.entity';
import { Inventory } from './inventory.entity';

@Entity()
export class Reservation extends BaseEntity {
    @ApiProperty()
    @Column()
    public name: string;

    @ApiProperty()
    @Column()
    public email: string;

    @ApiProperty()
    @Column()
    public partySize: number;

    @ApiProperty()
    @Column()
    public inventoryId: number;

    @ApiProperty({ type: () => Inventory })
    @ManyToOne(() => Inventory, (inventory) => inventory.reservations, { eager: true })
    @JoinTable()
    public inventory: Inventory;
}
