import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PegawaiDto } from 'src/pegawai/dtos/pegawai.dto';
import { Pegawai } from 'src/pegawai/entities/pegawai.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PegawaiService {
  constructor(
    @InjectRepository(Pegawai)
    private pegawaiRepository: Repository<Pegawai>,
  ) {}

  getAllPegawai() {
    return this.pegawaiRepository.find();
  }

  getPegawai(id: number) {
    return this.pegawaiRepository.findOne({ where: { id } });
  }

  createPegawai(pegawaiDetails: PegawaiDto) {
    const newPegawai = this.pegawaiRepository.create({ ...pegawaiDetails });
    return this.pegawaiRepository.save(newPegawai);
  }

  updatePegawai(id: number, pegawaiDetails: Partial<PegawaiDto>) {
    this.pegawaiRepository.update({ id }, { ...pegawaiDetails });
    return this.pegawaiRepository.findOne({ where: { id } });
  }

  deletePegawai(id: number) {
    this.pegawaiRepository.delete({ id });
    return {
      message: 'Data berhasil dihapus',
    };
  }
}
