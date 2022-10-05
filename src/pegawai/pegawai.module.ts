import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PegawaiController } from './controllers/pegawai/pegawai.controller';
import { Pegawai } from './entities/pegawai.entity';
import { PegawaiService } from './service/pegawai/pegawai.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pegawai])],
  controllers: [PegawaiController],
  providers: [PegawaiService],
})
export class PegawaiModule {}
