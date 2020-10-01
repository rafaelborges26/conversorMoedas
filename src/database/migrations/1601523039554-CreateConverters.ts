import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateConverters1601523039554 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'converters',
                columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    generationStrategy: 'uuid'
                },
                {
                    name: 'typeConvert',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'typeConverted',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'valueInside',
                    type: 'decimal',
                    isNullable: false
                },
                {
                    name: 'valueOutside',
                    type: 'decimal',
                    isNullable: false
                },
                {
                    name: 'date',
                    type: 'timestamp',
                    isNullable: false
                }

                
                ],
                

            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('converters')
    }

}
