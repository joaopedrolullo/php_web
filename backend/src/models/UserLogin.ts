import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  login: string;

  @Column()
  password: string;
}