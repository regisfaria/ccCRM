import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateLeadsTable1607545618066
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'leads',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'usdot',
            type: 'varchar',
          },
          {
            name: 'entity_type',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'operating_status',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'company_name',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'full_name',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'primary_address',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'state',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'zip_code',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'alt_address',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'alt_state',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'alt_zip_code',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'phone_number',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'power_units',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'drivers',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'mcs150_formdate',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'operation_classification',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'carrier_operation',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'cargo_carried',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'bipd_insurance_required',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'cargo_insurance_required',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'bond_insurance_required',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'insurance_carrier',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'policy_surety',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'posted_date',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'coverage_from',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'coverage_to',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'effective_date',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'cancellation_date',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('leads');
  }
}
