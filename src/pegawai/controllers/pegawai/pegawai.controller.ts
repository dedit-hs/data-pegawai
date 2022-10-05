import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { PegawaiDto } from 'src/pegawai/dtos/pegawai.dto';
import { PegawaiService } from 'src/pegawai/service/pegawai/pegawai.service';

@Controller('pegawai')
export class PegawaiController {
  constructor(private pegawaiService: PegawaiService) {}

  @Get()
  getAllPegawai() {
    return this.pegawaiService.getAllPegawai();
  }

  @Get(':id')
  getPegawai(@Param('id', ParseIntPipe) id: number) {
    return this.pegawaiService.getPegawai(id);
  }

  @Post()
  addPegawai(@Body() newPegawai: PegawaiDto) {
    return this.pegawaiService.createPegawai(newPegawai);
  }

  @Put(':id')
  async updatePegawai(
    @Param('id') id: number,
    @Body() pegawaiDetails: Partial<PegawaiDto>,
  ) {
    await this.pegawaiService.updatePegawai(id, { ...pegawaiDetails });
    return await this.pegawaiService.getPegawai(id);
  }

  @Delete(':id')
  deletePegawai(@Param('id') id: number) {
    this.pegawaiService.deletePegawai(id);
    return {
      message: 'Data berhasil di hapus.',
    };
  }
}
