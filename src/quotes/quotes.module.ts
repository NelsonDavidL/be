import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuoteService } from './quotes.service';
import { QuoteController } from './quotes.controller';
import { Quote } from './entities/quote.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Quote])],
  providers: [QuoteService],
  controllers: [QuoteController]
})
export class QuoteModule {}
