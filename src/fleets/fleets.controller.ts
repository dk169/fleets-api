import { Controller, Get, Post, Body, Param, HttpCode } from '@nestjs/common';
import { FleetsService } from './fleets.service';
import { InputLocation } from './dto/input.location.dto';

@Controller('fleets')
export class FleetsController {
  constructor(private readonly fleetsService: FleetsService) {}

  @Post('/getShipsByDistance')
  @HttpCode(200)
  getShipsByDistance(@Body() inputLocation: InputLocation) {
    return this.fleetsService.getShipsByDistance(inputLocation);
  }

  @Get(':country')
  filterByCountry(@Param('country') country: string) {
    return this.fleetsService.filterByCountry(country);
  }

  @Get()
  findAll() {
    return this.fleetsService.findAll();
  }
}
