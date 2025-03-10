import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { QuoteService } from './quotes.service';
import { Quote } from './entities/quote.entity';

@Controller('quotes')
export class QuoteController {
    constructor(private readonly quoteService: QuoteService) {}

    @Get()
    findAll() {
        return this.quoteService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id:number) {
        return this.quoteService.findOne(id);
    }
    
    @Post()
    create(@Body() quote: Partial<Quote>){
        return this.quoteService.create(quote);
    }

    @Put(':id')
    update(@Param('id') id:number, @Body() quote: Partial<Quote>){
        return this.quoteService.update(id, quote);
    }

    @Delete(':id')
    remove(@Param('id') id:number) {
        return this.quoteService.remove(id);
    }
}
