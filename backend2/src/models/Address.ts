import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';

@Entity('addresses')
export default class Address {
  @PrimaryGeneratedColumn('increment')
  id: number;
  
  @Column()
  address: string;
  
  @Column()
  complement: string;
  
  @Column()
  city: string;
  
  @Column()
  state: string;
  
  @Column()
  country: string;
  
  @Column()
  zip_code: string;
}