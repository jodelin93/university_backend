"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.version21677195044198 = void 0;
class version21677195044198 {
    constructor() {
        this.name = 'version21677195044198';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`faculte\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nom_faculte\` varchar(255) NOT NULL, \`degree\` varchar(255) NOT NULL, \`duree\` int NOT NULL DEFAULT '4', \`description\` text NULL, \`note_de_passage\` int NULL, \`nombre_matiere\` int NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`faculte\``);
    }
}
exports.version21677195044198 = version21677195044198;
//# sourceMappingURL=1677195044198-version2.js.map