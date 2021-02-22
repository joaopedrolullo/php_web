import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';

@Entity('customers')
export default class Customer {
  @PrimaryGeneratedColumn('increment')
  id: number;
  
  @Column()
  name: string;
  
  @Column()
  date_birth: string;
  
  @Column()
  cpf: number;
  
  @Column()
  rg: number;
  
  @Column()
  phone: string;
}