import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsers1613657923735 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'users',
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
          name: 'login',
          type: 'varchar',
          length: '40',
        },

        {
          name: 'email',
          type: 'varchar',
          length: '80',
        },

        {
          name: 'password',
          type: 'varchar',
          length: '30',
        },
      ]
    }));

    await queryRunner
       .manager
       .createQueryBuilder()
       .insert()
       .into('users')
       .values([
         { name: 'Administrador', login: 'admin', email: 'admin@admin.com', password: '1234' },
       ])
       .execute()
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }

}
