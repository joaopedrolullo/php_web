import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm';

import Address from './Address';
import Customer from './Customer';

@Entity('customerAddresses')
export default class CustomerAddresses {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @OneToOne(() => Address)
  @JoinColumn({ name: 'addressId' })
  addressId: Address;

  @OneToOne(() => Customer)
  @JoinColumn({ name: 'customerId' })
  customerId: Customer;
}