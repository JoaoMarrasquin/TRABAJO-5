import { ObjectType, Field, Int,ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'corredores'})
@ObjectType()
export class Corredor {
  @PrimaryGeneratedColumn('uuid')
  @Field(()=> ID)
  id:string;

  @Column()
  @Field(()=>String)
  nombre:string;

  @Column()
  @Field(()=>String)
  peso:string;

  @Column()
  @Field(()=>String)
  altura:string;

  @Column()
  @Field(()=>String)
  edad:string;

  @Column()
  @Field(()=>Boolean)
  estado:boolean;
}
