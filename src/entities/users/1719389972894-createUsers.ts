import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1719389972894 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table ({
              name: "users",
              columns: [
                {
                  name: "id",
                  type: "int",
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: "increment",
                },
                {
                  name: "role_name",
                  type: "enum",
                  enum: ["rrhh", "candidate"],
                  enumName: "roleEnum",
                  default: "'candidate'",
                },
                {
                  name: "email",
                  type: "varchar",
                  length: "255",
                  isUnique: true,
                },
                {
                  name: "password_hash",
                  type: "varchar",
                  length: "255",
                },
                {
                  name: "first_name",
                  type: "varchar",
                  length: "50",
                  isNullable: true,
                },
                {
                  name: "last_name",
                  type: "varchar",
                  length: "50",
                  isNullable: true,
                },
                {
                  name: "phone_number",
                  type: "varchar",
                  length: "50",
                  isNullable: true,
                },
              ],
            }),
            true
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
