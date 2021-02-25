import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as moment from 'moment';

import { CreateInventoryDto } from '../dtos';
import { Inventory, Restaurant } from '../entities';

const RESERVATION_INTERVAL_MINS = 15;

@Injectable()
export class InventoryService {
    public constructor(
        @InjectRepository(Inventory)
        private readonly _inventoryRepository: Repository<Inventory>,
        @InjectRepository(Restaurant)
        private readonly _restaurantRepository: Repository<Restaurant>
    ) {}

    public async createInventory(
        restaurantId: number,
        dto: CreateInventoryDto
    ): Promise<Inventory[]> {
        if (!(await this._restaurantRepository.findOne(restaurantId))) {
            throw new NotFoundException(`No restaurant found for ID ${restaurantId}`);
        }

        // TODO: - check for duplicates based on time, date, and restaurantId

        const times = this.createTimeRanges(dto.startTime, dto.endTime);
        const inventories: Inventory[] = [];
        for (const date of dto.dates) {
            for (const time of times) {
                const inventory = new Inventory();
                inventory.reservationLimit = dto.reservationLimit;
                inventory.time = time;
                inventory.date = date;
                inventory.restaurantId = restaurantId;
                inventories.push(inventory);
            }
        }

        return await this._inventoryRepository.save(inventories);
    }

    public async findAllByDate(restaurantId: number, date: Date): Promise<Inventory[]> {
        return await this._inventoryRepository.find({ where: { restaurantId, date } });
    }

    private createTimeRanges(start: Date, end?: Date): Date[] {
        // end is optional so that a single time can be set
        if (!end) {
            return [start];
        }

        // only concerned about the time, so normalizing the date portion
        // when saved in DB only the time is included, but this is needed for the evaluation in while loop
        const startTime = moment(start).year(1900).month(0).date(1).second(0).millisecond(0);
        const endTime = moment(end).year(1900).month(0).date(1).second(0).millisecond(0);
        const ranges: Date[] = [];

        while (startTime <= endTime) {
            ranges.push(startTime.toDate());
            startTime.add(RESERVATION_INTERVAL_MINS, 'm');
        }

        return ranges;
    }
}
