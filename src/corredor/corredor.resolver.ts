import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { CorredorService } from './corredor.service';
import { Corredor } from './entities/corredor.entity';
import { CreateCorredorInput } from './dto/create-corredor.input';
import { UpdateCorredorInput } from './dto/update-corredor.input';
import { ParseUUIDPipe } from '@nestjs/common';

@Resolver(() => Corredor)
export class CorredorResolver {
  constructor(private readonly corredorService: CorredorService) {}

  @Mutation(() => Corredor)
  async createCorredor(@Args('createCorredorInput') createCorredorInput: CreateCorredorInput)
  :Promise<Corredor> {
    return this.corredorService.create(createCorredorInput);
  }

  @Query(() => [Corredor], { name: 'corredores' })
  async findAll():Promise<Corredor[]> {
    return this.corredorService.findAll();
  }

  @Query(() => Corredor, { name: 'corredor' })
  findOne(@Args('id', { type: () => ID}, ParseUUIDPipe ) id: string): Promise<Corredor> {
    return this.corredorService.findOne(id);
  }

  @Mutation(() => Corredor)
  updateCorredor(@Args('updateCorredorInput') updateCorredorInput: UpdateCorredorInput): Promise<Corredor> {
    return this.corredorService.update(updateCorredorInput.id, updateCorredorInput);
  }

  @Mutation(() => Corredor)
  removeCorredor(@Args('id', { type: () => ID }) id: string): Promise<Corredor> {
    return this.corredorService.remove(id);
  }
}
