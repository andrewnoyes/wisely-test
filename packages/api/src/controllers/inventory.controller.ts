import { Body, Controller, Param, Post, HttpCode, HttpStatus, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CreateInventoryDto, InventoryQueryDto } from '../dtos';
import { Inventory } from '../entities';
import { InventoryService } from '../services';

@ApiTags('Inventory')
@Controller('api/restaurants/:restaurantId/inventories')
export class InventoryController {
    public constructor(private readonly _inventoryService: InventoryService) {}

    @ApiOperation({
        operationId: 'createInventory',
    })
    @ApiResponse({ status: HttpStatus.OK, type: Inventory, isArray: true })
    @Post()
    @HttpCode(200)
    public async createInventory(
        @Param('restaurantId') restaurantId: number,
        @Body() dto: CreateInventoryDto
    ): Promise<Inventory[]> {
        return await this._inventoryService.createInventory(restaurantId, dto);
    }

    @ApiOperation({
        operationId: 'getInventoryByDate',
    })
    @ApiResponse({ status: HttpStatus.OK, type: Inventory, isArray: true })
    @Get()
    public async getInventoryByDate(
        @Param('restaurantId') restaurantId: number,
        @Query() query: InventoryQueryDto
    ): Promise<Inventory[]> {
        return await this._inventoryService.findAllByDate(restaurantId, query.date);
    }
}
