import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pegawai } from './pegawai/entities/pegawai.entity';
import { PegawaiModule } from './pegawai/pegawai.module';
import 'dotenv/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASS,
      database: process.env.DATABASE_NAME,
      entities: [Pegawai],
      synchronize: true,
    }),
    PegawaiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
