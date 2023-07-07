import { Module } from '@nestjs/common';
import { CorredorService } from './corredor.service';
import { CorredorResolver } from './corredor.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Corredor } from './entities/corredor.entity';

@Module({
  providers: [CorredorResolver, CorredorService],
  imports:[
    TypeOrmModule.forFeature([Corredor])
  ]
})
export class CorredorModule {}
