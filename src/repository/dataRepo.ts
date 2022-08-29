import path from 'path';

const latencies = require('./latencies.json');
import csv from 'csvtojson';
import { Transaction, Latency } from '../types';

//@todo maybe reading CSV as stream, line by line, by a generator *function

export default {
  getLatencies: (): Latency => {
    return latencies;
  },
  getTransactions: async (): Promise<Transaction[]> => {
    try {
      return await csv({
        headers: ['id', 'amount', 'bankCountryCode'],
      }).fromFile(path.resolve(__dirname, '', 'transactions.csv'));
    } catch (e) {
      console.error('Error in reading "transactions.csv" file');
      throw e;
    }
  },
};
