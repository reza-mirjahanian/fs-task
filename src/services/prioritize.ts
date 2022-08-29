import Decimal from 'decimal.js';
import { Latency, TableCell, Transaction } from '../types';

export default function prioritize(
  transactions: Transaction[],
  totalTime = 1000,
  latencies: Latency,
): TableCell {
  // Table[0-5000][0-1000] = {totalMoney: new Decimal(0), usedTransaction: []}  - Default value
  // We keep track of transactions and used time, at the same time.
  const table: TableCell[][] = Array(transactions.length + 1)
    .fill(null)
    .map(() => Array(totalTime + 1).fill({
      totalMoney: new Decimal(0),
      usedTransaction: [],
    }));

  for (let i = 0; i < transactions.length; i++) {
    const currentTr = transactions[i];
    const currentTrLatency = latencies[currentTr.bankCountryCode];

    for (let weight = 0; weight <= totalTime; weight++) {
      if (currentTrLatency <= weight) {
        // Creating the possible next table cell.
        const newCell: TableCell = {
          totalMoney: new Decimal(currentTr.amount).plus(
            table[i][weight - currentTrLatency].totalMoney,
          ),
          usedTransaction: [
            ...table[i][weight - currentTrLatency].usedTransaction,
            currentTr,
          ],
        };

        table[i + 1][weight] = newCell.totalMoney.greaterThan(
          table[i][weight].totalMoney,
        )
          ? newCell
          : table[i][weight];
      } else {
        table[i + 1][weight] = table[i][weight]; // clone
      }
    }
  }

  return table[transactions.length][totalTime];
}
