import { IsUUID } from 'class-validator';
import { CreateEstudianteInput } from './create-estudiante.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateEstudianteInput extends PartialType(CreateEstudianteInput) {

  @Field(() => ID)
  @IsUUID()
  id: string;
  
}
