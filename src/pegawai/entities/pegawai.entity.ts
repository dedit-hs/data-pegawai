import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pegawai {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: number;

  @Column()
  status: string;
}
