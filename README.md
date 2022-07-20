# problem-solving
My solutions to some software problems that I might come across in interviews. Apart from the little helps from Google on how to do certain piece of things, I built and coded each solution I uploaded here. So it's like a "problem portfolio". 

## billChange.js
There are only 5-, 10-, 20- and 50-Euro bills from the customers and we are selling a shovel just for 5 Euros. We start with 0 money. We need to give them a change if necessary. If we don't have sufficient change, then we don't sell anything at all. Otherwise we will pass on the other customer.

If customer input queue is like [5,10,5,20,5,5], we have no problem with cash, and the program outputs the bills we have in the end: [20,5,5]

If customer input queue is like [10, 5, 20, 10, 50], we cannot give change to the first customer, so we give up selling. The program should output false in this case.

The solution script gives proper change to the customers and returns false whenever it cannot give change.
