import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { EstudiantesService } from './estudiantes.service';
import { Estudiante } from './entities/estudiante.entity';
import { UpdateEstudianteInput, CreateEstudianteInput } from './dto/inputs';
import { ParseUUIDPipe } from '@nestjs/common';

@Resolver(() => Estudiante)
export class EstudiantesResolver {
  constructor(private readonly estudiantesService: EstudiantesService) {}

  @Mutation(() => Estudiante)
  async createEstudiante(@Args('createEstudianteInput') createEstudianteInput: CreateEstudianteInput)
  :Promise<Estudiante> {
    return this.estudiantesService.create(createEstudianteInput);
  }

  @Query(() => [Estudiante], { name: 'estudiantes' })
  async findAll():Promise<Estudiante[]> {
    return this.estudiantesService.findAll();
  }

  @Query(() => Estudiante, { name: 'estudiante' })
  findOne(@Args('id', { type: () => ID}, ParseUUIDPipe ) id: string): Promise<Estudiante> {
    return this.estudiantesService.findOne(id);
  }

  @Mutation(() => Estudiante)
  updateEstudiante(@Args('updateEstudianteInput') updateEstudianteInput: UpdateEstudianteInput): Promise<Estudiante> {
    return this.estudiantesService.update(updateEstudianteInput.id, updateEstudianteInput);
  }

  @Mutation(() => Estudiante)
  removeEstudiante(@Args('id', { type: () => ID }) id: string): Promise<Estudiante> {
    return this.estudiantesService.remove(id);
  }
}
