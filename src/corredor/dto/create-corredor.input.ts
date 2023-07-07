import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsPositive } from 'class-validator';

@InputType()
export class CreateCorredorInput {
  @Field(()=>String )
  @IsNotEmpty()
  nombre:string;

  @Field(()=>String )
  @IsNotEmpty()
  peso:string;

  @Field(()=>String )
  @IsNotEmpty()
 altura:string;

  @Field(()=>String )
  @IsNotEmpty()
  edad:string;

  @Field(()=>Boolean )
  @IsOptional()
  estado:boolean;
}
