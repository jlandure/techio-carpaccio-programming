We want to build our ecommerce website to sell our products.
We will build a retail calculator. It is a runnable application with three inputs and one output.

Our model is a B2B and B2C company so we want to sell to big companies and also simple customers.

Be simple: in our platform, only one item can be bought at the time.

The product must accept 3 inputs from the user:
- How many items
- Price per item
- 2-letters state code

The program have to output the total price.

Give a discount base on the total price and don't forget to add the tax to the discounted price depending on the state tax rate.

Here is the table of discount rate:

| Order value   | Discount Rate |
| ------------- | ------------- |
| $1,000        | 3%            |
| $5,000        | 5%            |
| $7,000        | 7%            |
| $10,000       | 10%           |
| $50,000       | 15%           |

Here is the table of tax rate:

| State   | Tax rate |
| ------- | -------- |
| UT      | 3%       |
| NV      | 5%       |
| TX      | 7%       |
| AL      | 10%      |
| CA      | 15%      |