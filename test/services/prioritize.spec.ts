import { expect } from 'chai';

import prioritize from '../../src/services/prioritize';
import DataRepo from '../../src/repository/dataRepo';
import { Transaction } from '../../src/types';

const LatenciesTable = DataRepo.getLatencies();

function _calculateTotalTime(transactions: Transaction[]): number {
  return transactions
    .map((tr) => LatenciesTable[tr.bankCountryCode])
    .reduce((acc, number) => acc + number, 0);
}
suite('Testing prioritize services:', () => {
  test('should  prioritize services works correctly', async () => {
    const sampleTransactions = await DataRepo.getTransactions();

    [90, 60, 50].forEach((timeLimit) => {
      const { totalMoney, usedTransaction } = prioritize(
        sampleTransactions,
        timeLimit,
        LatenciesTable,
      );
      expect(usedTransaction).to.be.an('array');
      expect(_calculateTotalTime(usedTransaction)).lessThanOrEqual(timeLimit);
    });
  });
});
