# Bank Tech Test - In Progress

## Table of contents
* [Requirements](#requirements)
* [Acceptance Criteria](#acceptance-criteria)
* [Tech](#tech)
* [User Stories](#user-stories)
* [Run the App](#run-the-app)
* [The End Result](#the-end-result)

A simple bank account app in which the user can deposit or withdraw money and get a bank statement.

This challenge is set at part of the Individual Technical Challenge week at Makers in which you aim to achieve professional code quality standards.

Following feedback from the first iteration I am now making improvements.

### Requirements

* You should be able to interact with your code via a REPL like IRB or the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance Criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

### Tech
|   |Tech|
|---|---|
|Development | nodeJS |
|Test | Jest |
|Linting | ES lint |

### User Stories

I converted the requirements and acceptance criteria into user stories to break requirements down and to give myself an order to work through.

```
As a user,
So that I can deposit money,
I would like to be able to add money to my account

As a user,
So that I can withdraw money,
I would like to be able to take money from my account

As a user,
So that I can review all of my transactions,
I would like to be able view my transactions on a bank statement which includes the date, debit/credit and balance.

As a user,
So that I can understand my bank statement better,
I would like my bank statement to list transactions in order, with the newest being first and oldest last.
```

I then sketched out a map to give myself a high level understanding of how the methods would fit together and what order the program would execute different functions in.

### Run the App

Clone this repo and `npm install`

To run on a repl I used esm.
To install:  `npm install esm`

Then run the repl with`node -r esm`

When you're in the repl;

```
import account from './main/account.js'

const myaccount = new Account()
```
To make deposits and withdrawals;
```
myaccount.makeDeposit(amount, date)
myaccount.makeWithdrawal(amount, date)
```
To get a bank statement in the repl
```
myaccount.getStatement()
```
### The End Result

![alt text](https://github.com/AlexLewis10/bank-tech-test2/blob/master/image/account-screenshot.png)
