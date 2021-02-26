import { ApiProperty } from '@nestjs/swagger';

export class DateQueryDto {
    @ApiProperty()
    public date: Date;
}
