"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFaculteDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_faculte_dto_1 = require("./create-faculte.dto");
class UpdateFaculteDto extends (0, swagger_1.PartialType)(create_faculte_dto_1.CreateFaculteDto) {
}
exports.UpdateFaculteDto = UpdateFaculteDto;
//# sourceMappingURL=update-faculte.dto.js.map