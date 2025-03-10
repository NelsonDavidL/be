import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quote } from './entities/quote.entity';

@Injectable()
export class QuoteService {
  constructor(
    @InjectRepository(Quote) 
    private readonly quoteRespository: Repository<Quote>,
  ) {}

  findAll() {
    return this.quoteRespository.find();
  }

  findOne (id: number) {
    return this.quoteRespository.findOne({ where: { id }});
  }

  create(quote: Partial<Quote>) {
    return this.quoteRespository.save(quote);
  }

  update(id: number, quote: Partial<Quote>) {
    return this.quoteRespository.update(id, quote);
  }

  remove(id: number) {
    return this.quoteRespository.delete(id);
  }
}
