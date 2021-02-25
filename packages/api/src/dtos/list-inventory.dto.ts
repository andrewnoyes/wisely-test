import { ApiProperty } from '@nestjs/swagger';

export class ListInventoryDto {
    @ApiProperty()
    public date: Date;
}
