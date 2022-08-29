import DataRepo from './repository/dataRepo';
import prioritize from './services/prioritize';
const LatenciesTable = DataRepo.getLatencies();

(async () => {
  const sampleTransactions = await DataRepo.getTransactions();
  [1000, 90, 60, 50].forEach((timeLimit) => {
    const { totalMoney, usedTransaction } = prioritize(
      sampleTransactions,
      timeLimit,
      LatenciesTable
    );
    console.log(
      `Max USD value that can be processed in "${timeLimit}ms" is ${totalMoney} | transactions count is : "${usedTransaction.length}"`
    );
  });
})().catch((e) => {
  console.log(e);
  process.exit(0);
});

// Caught other errors
process
  .on('unhandledRejection', (reason, p) => {
    console.error('Unhandled Rejection at Promise', {
      reason,
      p,
    });
  })
  .on('uncaughtException', (err) => {
    console.error('Uncaught Exception thrown', {
      err,
    });
  });
