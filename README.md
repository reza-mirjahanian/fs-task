## FS challenge

### Reza Mirjahanian

Instructions: Use the api_latencies.json to tell how long each API call takes.
Use the transactions.csv to calculate the total USD values for each question.

Notes: For simplicity, please ignore the time to run the prioritization itself, your goal is to fit the maximum USD transaction amount into the allotted time slots.
Please briefly describe your algorithm and why you think it's optimal. If you had multiple solutions in mind, why did you choose this particular one?

#### Setup

- Node.JS 14 ( or later )
- Install dependencies `yarn` or `npm i`
- `npm start` - Runs project.
- `npm run start-watch` - Runs project(nodemon).
- `npm test` - Runs tests.
- `npm run test-watch` - Runs tests(nodemon).
- `npm run coverage` - Runs code coverage.

#### Questions ❔

- What is the max USD value that can be processed in 50ms, 60ms, 90ms, 1000ms?
  > - Max USD value that can be processed in "1000ms" is 35471.81 | transactions count is : "48"
  >
  > - Max USD value that can be processed in "90ms" is 6972.29 | transactions count is : "8"
  >
  > - Max USD value that can be processed in "60ms" is 4675.71 | transactions count is : "5"
  >
  > - Max USD value that can be processed in "50ms" is 4139.43 | transactions count is : "5"

#### My Comments:

- 💡 I've used Decimal.js for money calculations. It makes my code slower and more verbose.
- 💡 My unit tests are not good enough and need more time.

I've used the "0–1 knapsack problem (Dynamic Programming)" to solve this. Memory usage is one of the concerns with large data sets in this method. I guess there is a more memory-efficient knapsack out there, but I went with a simple one. I think dynamic Programming gives us the most accurate answer here.

- 💡 Possible methods I know:

1 . Brute force: [ O(2 power N) ]

2 . 0/1 Knapsack Problem [ O(VE) ]

3 . Greedy algorithm [generally faster, but no such guarantee of getting an Optimal Solution]

| Feature         | Greedy method                                                                                                                               | Dynamic programming                                                                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Feasibility     | In a greedy Algorithm, we make whatever choice seems best at the moment in the hope that it will lead to global optimal solution.           | In Dynamic Programming we make decision at each step considering current problem and solution to previously solved sub problem to calculate optimal solution . |
| Optimality      | In Greedy Method, sometimes there is no such guarantee of getting Optimal Solution.                                                         | It is guaranteed that Dynamic Programming will generate an optimal solution as it generally considers all possible cases and then choose the best.             |
| Recursion       | A greedy method follows the problem solving heuristic of making the locally optimal choice at each stage.                                   | A Dynamic programming is an algorithmic technique which is usually based on a recurrent formula that uses some previously calculated states.                   |
| Memoization     | It is more efficient in terms of memory as it never look back or revise previous choices                                                    | It requires dp table for memoization and it increases it’s memory complexity.                                                                                  |
| Time complexity | Greedy methods are generally faster. For example, Dijkstra’s shortest path algorithm takes O(ELogV + VLogV) time.                           | Dynamic Programming is generally slower. For example, Bellman Ford algorithm takes O(VE) time.                                                                 |
| Fashion         | The greedy method computes its solution by making its choices in a serial forward fashion, never looking back or revising previous choices. | Dynamic programming computes its solution bottom up or top down by synthesizing them from smaller optimal sub solutions.                                       |
| Example         | Fractional knapsack .                                                                                                                       | 0/1 knapsack problem                                                                                                                                           |

[Source](www.geeksforgeeks.org)
