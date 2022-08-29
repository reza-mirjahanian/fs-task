import Decimal from 'decimal.js';

//CSV file transactions
export type Transaction = {
  id: string; // a UUID of transaction
  amount: number; //  in USD, typically a value between 0.01 and 1000 USD.
  bankCountryCode: string; // a 2-letter country code of where the bank is located
};

export type Latency = Record<string, number>; // {Country, delay} .json files

export type TableCell = { totalMoney: Decimal; usedTransaction: Transaction[] }; // dynamic programming table
