import { Module } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import { EstudiantesResolver } from './estudiantes.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estudiante } from './entities/estudiante.entity';

@Module({
  providers: [EstudiantesResolver, EstudiantesService],
  imports:[
    TypeOrmModule.forFeature([Estudiante])
  ]
})
export class EstudiantesModule {}
