import {Column, Entity, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class Producto {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({type: 'text'})
    detalis: string;

    @Column()
    price: number;

    @Column()
    stok: number;
}

