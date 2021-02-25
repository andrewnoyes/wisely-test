import { Controller, Get, Post, HttpCode, HttpStatus, Param, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CreateRestaurantDto } from '../dtos';
import { Restaurant } from '../entities';
import { RestaurantService } from '../services';

@ApiTags('Restaurants')
@Controller('api/restaurants')
export class RestaurantController {
    public constructor(private readonly _restaurantService: RestaurantService) {}

    @ApiOperation({
        operationId: 'getRestaurants',
        summary: 'Get list of restaurants',
    })
    @ApiResponse({ status: HttpStatus.OK, type: Restaurant, isArray: true })
    @Get()
    public async getRestaurants(): Promise<Restaurant[]> {
        return await this._restaurantService.findAll();
    }

    @ApiOperation({
        operationId: 'getRestaurantById',
        summary: 'Get a restaurant by ID',
    })
    @ApiResponse({ status: HttpStatus.OK, type: Restaurant })
    @Get(':restaurantId')
    public async getRestaurantById(
        @Param('restaurantId') restaurantId: number
    ): Promise<Restaurant> {
        return await this._restaurantService.findById(restaurantId);
    }

    @ApiOperation({
        operationId: 'createRestaurant',
        summary: 'Create a restaurant',
    })
    @ApiResponse({ status: HttpStatus.OK, type: Restaurant })
    @Post()
    @HttpCode(200)
    public async createRestaurant(@Body() restaurantDto: CreateRestaurantDto): Promise<Restaurant> {
        return await this._restaurantService.createRestaurant(restaurantDto);
    }
}
