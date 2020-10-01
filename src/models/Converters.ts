import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('converters')
class Converter {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    typeConvert: string;

    @Column()
    typeConverted: string;

    @Column('decimal')
    valueInside: number;

    @Column('decimal')
    valueOutside: number;

    @Column('timestamp')
    date: Date;

}

export default Converter
