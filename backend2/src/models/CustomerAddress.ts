import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, JoinTable} from 'typeorm';

import Address from './Address';
import Customer from './Customer';

@Entity('customer_addresses')
export default class CustomerAddresses {
  @PrimaryGeneratedColumn() 
  id: number;

  @OneToOne(type => Address) @JoinColumn({ name: 'address_id' }) 
  address_id: Address;
  
  @OneToOne(type => Customer) @JoinColumn({ name: 'customer_id' }) 
  customer_id: Customer;
}