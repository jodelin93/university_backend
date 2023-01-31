"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.version11674966224306 = void 0;
class version11674966224306 {
    constructor() {
        this.name = 'version11674966224306';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`token_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`user_id\` int NOT NULL, \`token\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`expire_date\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`person\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuid\` varchar(36) NOT NULL, \`nom\` varchar(255) NOT NULL, \`prenom\` varchar(255) NOT NULL, \`sexe\` enum ('masculin', 'feminin', 'autres') NOT NULL DEFAULT 'masculin', \`email\` varchar(255) NULL, \`telephone\` varchar(255) NULL, \`date_naissance\` date NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_1e31d698585cca81c3037120ac\` (\`uuid\`), UNIQUE INDEX \`IDX_d2d717efd90709ebd3cb26b936\` (\`email\`), UNIQUE INDEX \`IDX_8d1df1946a6f325d87eb696ac4\` (\`telephone\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`student_informations_compementaires\` (\`id\` int NOT NULL AUTO_INCREMENT, \`ocupation\` varchar(255) NULL, \`personne_resp\` varchar(255) NULL, \`telephone_resp\` varchar(255) NULL, \`maladie\` varchar(255) NULL, \`personne_contact\` varchar(255) NULL, \`annee_fin_etude\` varchar(255) NULL, \`nom_etablissemet\` varchar(255) NULL, \`etude_precedente\` varchar(255) NULL, \`option_precendente\` varchar(255) NULL, \`annee_etude_precedente\` varchar(255) NULL, \`studentId\` int NOT NULL, UNIQUE INDEX \`REL_e80573d1904e044398b1936a13\` (\`studentId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`student\` (\`id\` int NOT NULL AUTO_INCREMENT, \`code\` varchar(255) NULL, \`lieu_naissance\` varchar(255) NOT NULL, \`groupe_sanguin\` varchar(255) NULL, \`statut_matrimonial\` varchar(255) NOT NULL, \`cin\` varchar(255) NULL, \`nif\` varchar(255) NULL, \`isValidate\` tinyint NOT NULL DEFAULT '0', \`isActive\` tinyint NOT NULL DEFAULT '1', \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`personId\` int NOT NULL, UNIQUE INDEX \`REL_1314dc48b129d9a708d996d642\` (\`personId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`employee\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fonction\` varchar(255) NOT NULL, \`date_embauche\` date NOT NULL, \`salaire\` double NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`personId\` int NOT NULL, UNIQUE INDEX \`REL_c6dc0c24b090639f20b86baf30\` (\`personId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`isActive\` tinyint NOT NULL DEFAULT '0', \`personId\` int NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`roleId\` int NULL, UNIQUE INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` (\`username\`), UNIQUE INDEX \`REL_6aac19005cea8e2119cbe7759e\` (\`personId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`roles\` (\`id\` int NOT NULL AUTO_INCREMENT, \`role_name\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_ac35f51a0f17e3e1fe12112603\` (\`role_name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`teacher\` (\`id\` int NOT NULL AUTO_INCREMENT, \`niveau\` enum ('licence', 'maitrise', 'doctorat') NOT NULL DEFAULT 'licence', \`personId\` int NOT NULL, UNIQUE INDEX \`REL_342d2da5c5a5d52dd66fc28775\` (\`personId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`student_informations_compementaires\` ADD CONSTRAINT \`FK_e80573d1904e044398b1936a133\` FOREIGN KEY (\`studentId\`) REFERENCES \`student\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`student\` ADD CONSTRAINT \`FK_1314dc48b129d9a708d996d6421\` FOREIGN KEY (\`personId\`) REFERENCES \`person\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`employee\` ADD CONSTRAINT \`FK_c6dc0c24b090639f20b86baf30c\` FOREIGN KEY (\`personId\`) REFERENCES \`person\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_6aac19005cea8e2119cbe7759e8\` FOREIGN KEY (\`personId\`) REFERENCES \`person\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_c28e52f758e7bbc53828db92194\` FOREIGN KEY (\`roleId\`) REFERENCES \`roles\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`teacher\` ADD CONSTRAINT \`FK_342d2da5c5a5d52dd66fc287754\` FOREIGN KEY (\`personId\`) REFERENCES \`person\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`teacher\` DROP FOREIGN KEY \`FK_342d2da5c5a5d52dd66fc287754\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_c28e52f758e7bbc53828db92194\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_6aac19005cea8e2119cbe7759e8\``);
        await queryRunner.query(`ALTER TABLE \`employee\` DROP FOREIGN KEY \`FK_c6dc0c24b090639f20b86baf30c\``);
        await queryRunner.query(`ALTER TABLE \`student\` DROP FOREIGN KEY \`FK_1314dc48b129d9a708d996d6421\``);
        await queryRunner.query(`ALTER TABLE \`student_informations_compementaires\` DROP FOREIGN KEY \`FK_e80573d1904e044398b1936a133\``);
        await queryRunner.query(`DROP INDEX \`REL_342d2da5c5a5d52dd66fc28775\` ON \`teacher\``);
        await queryRunner.query(`DROP TABLE \`teacher\``);
        await queryRunner.query(`DROP INDEX \`IDX_ac35f51a0f17e3e1fe12112603\` ON \`roles\``);
        await queryRunner.query(`DROP TABLE \`roles\``);
        await queryRunner.query(`DROP INDEX \`REL_6aac19005cea8e2119cbe7759e\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP INDEX \`REL_c6dc0c24b090639f20b86baf30\` ON \`employee\``);
        await queryRunner.query(`DROP TABLE \`employee\``);
        await queryRunner.query(`DROP INDEX \`REL_1314dc48b129d9a708d996d642\` ON \`student\``);
        await queryRunner.query(`DROP TABLE \`student\``);
        await queryRunner.query(`DROP INDEX \`REL_e80573d1904e044398b1936a13\` ON \`student_informations_compementaires\``);
        await queryRunner.query(`DROP TABLE \`student_informations_compementaires\``);
        await queryRunner.query(`DROP INDEX \`IDX_8d1df1946a6f325d87eb696ac4\` ON \`person\``);
        await queryRunner.query(`DROP INDEX \`IDX_d2d717efd90709ebd3cb26b936\` ON \`person\``);
        await queryRunner.query(`DROP INDEX \`IDX_1e31d698585cca81c3037120ac\` ON \`person\``);
        await queryRunner.query(`DROP TABLE \`person\``);
        await queryRunner.query(`DROP TABLE \`token_entity\``);
    }
}
exports.version11674966224306 = version11674966224306;
//# sourceMappingURL=1674966224306-version1.js.map