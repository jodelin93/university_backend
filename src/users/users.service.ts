import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstracService } from 'src/commons/abstract.service';
import { PersonsService } from 'src/persons/persons.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Roles } from './entities/roles.entity';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService extends AbstracService {
  constructor(
    private personService: PersonsService,
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(Roles) private roleRepo: Repository<Roles>,
  ) {
    super(userRepo);
  }
  async create(createUserDto: CreateUserDto) {
    const person = await this.personService.findOnePersonByEmail(createUserDto.email)
    if (!person) {
      throw new BadRequestException('email not authorized')
    }

    const personIdsaved=  await this.userRepo.findOne({where:{personId:person.id}})
    const usernamesaved = await this.userRepo.findOne({ where: { username: createUserDto.username } })
    if (personIdsaved || usernamesaved) {
      throw new BadRequestException('username or user alredy exist')
    }
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(createUserDto.password, salt);
    const rolesaved= await this.roleRepo.findOne({where:{role_name:createUserDto.role_name}})
    const user = this.userRepo.create(createUserDto)
    user.password = hash;
    user.person = person;
    if (!rolesaved) {
      const role = new Roles()
      role.role_name = createUserDto.role_name;
      this.roleRepo
      user.role = role;
      
      return await this.userRepo.save(user)
    }
    user.role = rolesaved;
    return await this.userRepo.save(user)
  }



  async findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
