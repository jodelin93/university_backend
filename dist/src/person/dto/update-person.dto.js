"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
const create_person_dto_1 = require("./create-person.dto");
class UpdatePersonDto extends (0, swagger_1.PartialType)(create_person_dto_1.CreatePersonDto) {
}
exports.default = UpdatePersonDto;
//# sourceMappingURL=update-person.dto.js.map