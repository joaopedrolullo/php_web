import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm';

import Address from './Address';
import Customer from './Customer';

@Entity('customerAddresses')
export default class CustomerAddresses {
  @PrimaryGeneratedColumn() 
  id: number;

  @OneToOne(type => Address) @JoinColumn({ name: 'addressId' }) 
  addressId: Address;
  
  @OneToOne(type => Customer) @JoinColumn({ name: 'customerId' }) 
  customerId: Customer;
}