import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsPositive } from 'class-validator';

@InputType()
export class CreateEstudianteInput {

  @Field(()=>String )
  @IsNotEmpty()
  identificacion:string;

  @Field(()=>String )
  @IsNotEmpty()
  nombre:string;

  @Field(()=>String )
  @IsNotEmpty()
  direccion:string;

  @Field(()=>[String], {nullable:true} )
  @IsNotEmpty()
  telefono:string[];

  @Field(()=>Int )
  @IsPositive()
  tipo: number;

  @Field(()=>Boolean )
  @IsOptional()
  estado:boolean;

  
}
