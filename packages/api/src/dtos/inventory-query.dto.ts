import { ApiProperty } from '@nestjs/swagger';

export class InventoryQueryDto {
    @ApiProperty()
    public date: Date;
}
