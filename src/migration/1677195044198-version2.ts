import { MigrationInterface, QueryRunner } from "typeorm";

export class version21677195044198 implements MigrationInterface {
    name = 'version21677195044198'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`faculte\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nom_faculte\` varchar(255) NOT NULL, \`degree\` varchar(255) NOT NULL, \`duree\` int NOT NULL DEFAULT '4', \`description\` text NULL, \`note_de_passage\` int NULL, \`nombre_matiere\` int NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`faculte\``);
    }

}
