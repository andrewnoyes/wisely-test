import { Entity, Column, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import { BaseEntity } from './base.entity';
import { Inventory } from './inventory.entity';

@Entity()
export class Restaurant extends BaseEntity {
    @ApiProperty()
    @Column()
    public name: string;

    @OneToMany(() => Inventory, (inventory) => inventory.restaurant)
    public inventories: Inventory[];
}
