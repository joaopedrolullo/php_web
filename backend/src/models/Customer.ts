import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';

import Address from './Address';

@Entity('customers')
export default class Customer {
  @PrimaryGeneratedColumn('increment')
  id: number;
  
  @Column()
  name: string;
  
  @Column()
  date_birth: string;
  
  @Column()
  cpf: string;
  
  @Column()
  rg: string;
  
  @Column()
  phone: string;

  @OneToMany(() => Address, address => address.customer, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'customer_id' })
  address: Address[];
}