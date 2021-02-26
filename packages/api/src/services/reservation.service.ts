import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateReservationDto } from '../dtos';
import { Inventory, Reservation } from '../entities';

@Injectable()
export class ReservationService {
    public constructor(
        @InjectRepository(Reservation)
        private readonly _reservationRepository: Repository<Reservation>,
        @InjectRepository(Inventory)
        private readonly _inventoryRepository: Repository<Inventory>
    ) {}

    public async findAllByDate(restaurantId: number, date: Date): Promise<Reservation[]> {
        const results = await this._inventoryRepository.find({
            where: { restaurantId, date },
            relations: ['reservations'],
        });

        const reservations: Reservation[] = [];
        for (const result of results) {
            reservations.push(...result.reservations);
        }

        return reservations;
    }

    public async createReservation(dto: CreateReservationDto): Promise<Reservation> {
        const inventory = await this._inventoryRepository.findOne({
            where: { id: dto.inventoryId },
            relations: ['reservations'],
        });

        if (!inventory) {
            throw new NotFoundException(`No inventory found for ID: ${dto.inventoryId}`);
        }

        if (inventory.reservations.length === inventory.reservationLimit) {
            throw new BadRequestException('No reservation availability for this time slot');
        }

        const reservation = new Reservation();
        reservation.name = dto.name;
        reservation.email = dto.email;
        reservation.partySize = dto.partySize;
        reservation.inventoryId = inventory.id;
        reservation.inventory = inventory;

        return await this._reservationRepository.save(reservation);
    }
}
