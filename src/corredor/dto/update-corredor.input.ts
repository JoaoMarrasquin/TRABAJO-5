import { IsUUID } from 'class-validator';

import { CreateCorredorInput } from './create-corredor.input';
import { InputType, Field, Int, PartialType,ID } from '@nestjs/graphql';

@InputType()
export class UpdateCorredorInput extends PartialType(CreateCorredorInput) {
  
  @Field(() => ID)
  @IsUUID()
  id: string;
}
