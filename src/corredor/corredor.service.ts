import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCorredorInput } from './dto/create-corredor.input';
import { UpdateCorredorInput } from './dto/update-corredor.input';
import { Corredor } from './entities/corredor.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CorredorService {
 
  constructor( 
    @InjectRepository(Corredor)
    private readonly corredoresRepository:Repository<Corredor> ){}

  async create(createCorredorInput: CreateCorredorInput): Promise<Corredor>  {
    const newCorredor= this.corredoresRepository.create(createCorredorInput);
    return await this.corredoresRepository.save(newCorredor); 
  }

  async findAll(): Promise<Corredor[]> {
    return this.corredoresRepository.find();
  }

  async findOne(id: string): Promise<Corredor> {
     const corredor= await  this.corredoresRepository.findOneBy({id});
     if (!corredor) throw new NotFoundException(`Not found`)
     return corredor;
  }

  async update(id: string, updateCorredorInput: UpdateCorredorInput): Promise<Corredor> {
    
    const corredor = await this.corredoresRepository.preload(updateCorredorInput);
    if (!corredor) throw new NotFoundException(`Not found`)
    return this.corredoresRepository.save(corredor);

  }

  async remove(id: string): Promise<Corredor> {

    const corredor= await  this.findOne(id);

    await this.corredoresRepository.update({id:id},{estado:false});

    // await this.corredoresRepository.remove(corredor);

    return {...corredor, id};

  }
}
