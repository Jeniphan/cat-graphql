import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InputBook } from './dto/book.input';
import { Book } from './models/book.model';

@Resolver()
export class BookResolver {
  @Query(returns => Book)
  getBook(): Book {
    const result: Book = {
      id: '1',
      name: 'BeforeSecond',
      price: 199,
    }
    return result
  }

  @Mutation(returns => Book)
  createBook(@Args('input') input: InputBook): Book {
    const result: Book = {
      id: '2',
      ...input,
    }
    return result
  }
}
