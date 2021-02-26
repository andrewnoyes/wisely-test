import { Controller, Get, HttpStatus, Param, Post, HttpCode, Body, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CreateReservationDto, DateQueryDto } from '../dtos';
import { Reservation } from '../entities';
import { ReservationService } from '../services';

@ApiTags('Reservations')
@Controller('api/restaurants/:restaurantId/reservations')
export class ReservationController {
    public constructor(private readonly _reservationService: ReservationService) {}

    @ApiOperation({
        operationId: 'getReservationsByDate',
    })
    @ApiResponse({ status: HttpStatus.OK, type: Reservation, isArray: true })
    @Get()
    public async getReservations(
        @Param('restaurantId') restaurantId: number,
        @Query() query: DateQueryDto
    ): Promise<Reservation[]> {
        return await this._reservationService.findAllByDate(restaurantId, query.date);
    }

    @ApiOperation({
        operationId: 'createReservation',
    })
    @ApiResponse({ status: HttpStatus.OK, type: Reservation })
    @Post()
    @HttpCode(200)
    public async createReservation(
        @Param('restaurantId') restaurantId: number,
        @Body() reservationDto: CreateReservationDto
    ): Promise<Reservation> {
        return await this._reservationService.createReservation(reservationDto);
    }
}
