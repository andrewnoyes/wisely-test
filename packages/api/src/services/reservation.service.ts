import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Reservation } from '../entities';

@Injectable()
export class ReservationService {
    public constructor(
        @InjectRepository(Reservation)
        private readonly _reservationRepository: Repository<Reservation>
    ) {}

    public async findAll(): Promise<Reservation[]> {
        return await this._reservationRepository.find();
    }
}
