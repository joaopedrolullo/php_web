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
          type: 'varchar'
        },

        {
          name: 'date_birth',
          type: 'date'
        },

        {
          name: 'cpf',
          type: 'varchar'
        },

        {
          name: 'rg',
          type: 'varchar'
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