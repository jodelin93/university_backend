import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstracService } from 'src/commons/abstract.service';
import { Repository } from 'typeorm';
import { UpdateFaculteDto } from './dto/update-faculte.dto';
import { Faculte } from './entities/faculte.entity';

@Injectable()
export class FaculteService extends AbstracService {

  constructor(
    @InjectRepository(Faculte) private faculteRepo: Repository<Faculte>,
  ) {
    super(faculteRepo);
  }

  async create(createFaculteDto: any) {
    const faculte = await this.faculteRepo.findOne({ where: { nom_faculte: createFaculteDto.nom_faculte } })
    if (faculte) {
      throw new BadRequestException("Faculte Existante");
    }
    return  await this.faculteRepo.save(createFaculteDto)
  }

  async find() {
    return await super.find() ;
  }

  async findOne(id: number) {
    return await super.findOne({id});
  }

  async update(id: number, faculteRepo: UpdateFaculteDto) {
    const faculte = await this.faculteRepo.preload({ id, ...faculteRepo });
    return   await this.faculteRepo.save(faculte);
  }

  async remove(id: number) {
    return await super.remove(id)
  }
}
