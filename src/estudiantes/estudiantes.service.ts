import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEstudianteInput, UpdateEstudianteInput } from './dto/inputs';
import { Estudiante } from './entities/estudiante.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EstudiantesService {

  constructor( 
    @InjectRepository(Estudiante)
    private readonly estudiantesRepository:Repository<Estudiante> ){}

  async create(createEstudianteInput: CreateEstudianteInput): Promise<Estudiante>  {
    const newEstudiante= this.estudiantesRepository.create(createEstudianteInput);
    return await this.estudiantesRepository.save(newEstudiante); 
  }

  async findAll(): Promise<Estudiante[]> {
    return this.estudiantesRepository.find();
  }

  async findOne(id: string): Promise<Estudiante> {
     const estudiante= await  this.estudiantesRepository.findOneBy({id});
     if (!estudiante) throw new NotFoundException(`Not found`)
     return estudiante;
  }

  async update(id: string, updateEstudianteInput: UpdateEstudianteInput): Promise<Estudiante> {
    
    const estudiante = await this.estudiantesRepository.preload(updateEstudianteInput);
    if (!estudiante) throw new NotFoundException(`Not found`)
    return this.estudiantesRepository.save(estudiante);

  }

  async remove(id: string): Promise<Estudiante> {

    const estudiante= await  this.findOne(id);

    // await this.estudiantesRepository.update({id:id},{estado:true  });

    await this.estudiantesRepository.remove(estudiante);

    return {...estudiante, id};

  }
}
