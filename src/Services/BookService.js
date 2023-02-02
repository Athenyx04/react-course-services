import { get } from './services';
import { Book } from '../Models/Book';

export const getBooks = (page, size) => {
  return get('books', { page, size }).then((response) => {
    return response.map((bookDto) => Book(bookDto));
  });
};
