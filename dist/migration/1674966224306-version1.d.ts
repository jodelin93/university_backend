import { MigrationInterface, QueryRunner } from "typeorm";
export declare class version11674966224306 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
