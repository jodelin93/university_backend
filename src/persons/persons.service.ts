import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person } from './entities/person.entity';

@Injectable()
export class PersonsService {
  constructor(
    @InjectRepository(Person) private personRepo: Repository<Person>,
  ) {}
  async create(createPersonDto: CreatePersonDto) {
    return await this.personRepo.save(createPersonDto);
  }

  findAll() {
    return `This action returns all persons`;
  }

  async findOne(id: number) {
    return await this.personRepo.findOneBy({id});
  }

  async update(id: number, updatePersonDto: UpdatePersonDto) {
    const onePerson = await this.findOne(id)
    if (!onePerson) {
      throw new BadRequestException(`person with id ${id} does not found`)
    }
    const person=await this.personRepo.preload({ id, ...updatePersonDto })
    return await this.personRepo.save(person)
  }

  async remove(id: number) {
    const person= await this.findOne(id)
    return await this.personRepo.remove(person)
  }
}
