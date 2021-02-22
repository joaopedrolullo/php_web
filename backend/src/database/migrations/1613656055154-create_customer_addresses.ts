import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createCustomerAddresses1613656055154 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'customer_addresses',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },

        {
          name: 'address_id',
          type: 'integer'
        },

        {
          name: 'customer_id',
          type: 'integer'
        }
      ],

      foreignKeys: [
        {
          name: 'FkAddresses',
          columnNames: ['address_id'],
          referencedTableName: 'addresses',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },

        {
          name: 'FkCustomer',
          columnNames: ['customer_id'],
          referencedTableName: 'customer',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('customer_addresses');
  }

}
