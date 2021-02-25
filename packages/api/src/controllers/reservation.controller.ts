import { Controller, Get, HttpStatus, Param, Post, HttpCode, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CreateReservationDto } from '../dtos';
import { Reservation } from '../entities';
import { ReservationService } from '../services';

@ApiTags('Reservations')
@Controller('api/restaurants/:restaurantId/reservations')
export class ReservationController {
    public constructor(private readonly _reservationService: ReservationService) {}

    @ApiOperation({
        operationId: 'getReservations',
        summary: 'Get list of reservations',
    })
    @ApiResponse({ status: HttpStatus.OK, type: Reservation, isArray: true })
    @Get()
    public async getReservations(
        @Param('restaurantId') restaurantId: number
    ): Promise<Reservation[]> {
        return await this._reservationService.findAll();
    }

    @ApiOperation({
        operationId: 'createReservation',
        summary: 'Create a reservation',
    })
    @ApiResponse({ status: HttpStatus.OK, type: Reservation })
    @Post()
    @HttpCode(200)
    public async createReservation(
        @Param('restaurantId') restaurantId: number,
        @Body() reservationDto: CreateReservationDto
    ): Promise<Reservation> {
        // TODO: impl
        // TODO: decide if we want to return reservation+inventory entity or consolidate into DTO
        return Promise.resolve(null);
    }
}
