import { getRepository } from 'typeorm';
import Category from '../models/Category';
import Transaction from '../models/Transaction';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category_id: Category;
}

class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category_id,
  }: Request): Promise<Transaction> {
    const transactionRepository = getRepository(Transaction);

    const newTranscation = transactionRepository.create({
      title,
      value,
      type,
      category_id,
    });

    await transactionRepository.save(newTranscation);
  }
}

export default CreateTransactionService;
