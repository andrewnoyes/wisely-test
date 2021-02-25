import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export abstract class BaseEntity {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    public id: number;

    @ApiProperty()
    @CreateDateColumn({ type: 'timestamp with time zone' })
    public created: Date;

    @ApiProperty()
    @UpdateDateColumn({ type: 'timestamp with time zone' })
    public updated: Date;
}
