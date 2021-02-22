import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createCustomers1613768523574 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'customers',
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
          name: 'name',
          type: 'varchar',
          length: '100',
        },

        {
          name: 'date_birth',
          type: 'date'
        },

        {
          name: 'cpf',
          type: 'integer',
          length: '11',
        },

        {
          name: 'rg',
          type: 'integer',
          length: '20',
        },

        {
          name: 'phone',
          type: 'varchar'
        },
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('customers');
  }
}