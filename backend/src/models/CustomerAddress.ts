import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm';

import Address from './Address';
import Customer from './Customer';

@Entity('customer_addresses')
export default class CustomerAddresses {
  @PrimaryGeneratedColumn() 
  id: number;

  @OneToOne(type => Address) @JoinColumn() 
  address_id: Address;
  
  @OneToOne(type => Customer) @JoinColumn() 
  customer_id: Customer;
}