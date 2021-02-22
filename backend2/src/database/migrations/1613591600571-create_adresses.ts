import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createAdresses1613591600571 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'addresses',
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
          name: 'address',
          type: 'varchar',
          length: '80',
        },

        {
          name: 'complement',
          type: 'varchar',
          length: '80',
        },

        {
          name: 'city',
          type: 'varchar',
          length: '80',
        },

        {
          name: 'state',
          type: 'varchar',
          length: '80',
        },

        {
          name: 'country',
          type: 'varchar',
          length: '60',
        },

        {
          name: 'zip_code',
          type: 'varchar'
        },
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('addresses');
  }

}
