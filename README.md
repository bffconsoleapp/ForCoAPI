Certainly! Below is the GraphQL schema and resolver code as per your specifications:

```graphql
#schema-codegen-start
const typeDefs = `
  type CreditUnion {
    id: ID!
    Contract_Number: String!
    Credit_Union_Name: String!
    Credit_Union_State: String!
    Premium_Reports: [PremiumReport]
    Premium_Adjustments: [PremiumAdjustment]
    Single_Premium_Certificate_Returns: [SinglePremiumCertificateReturn]
  }

  type PremiumReport {
    id: ID!
    Premium_Reports: [PremiumReport]
  }

  type PremiumAdjustment {
    id: ID!
    Product_Name: String!
    Report_Period: String!
    Status: String!
    Last_Update: String!
    Period_Ending: String!
    Adjustment_Type_to_the_Credit_Union: String!
    Comment: String!
    Total_Borrower_Fees_: Float!
    CU_Retail_Rate: Float!
    Protected_Loan_Amount: Float!
    Pay_Rate: Float!
    Premium_Due: Float!
    Total_Amount: Float!
  }

  type SinglePremiumCertificateReturn {
    id: ID!
    Single_Premium_Certificate_Returns: [SinglePremiumCertificateReturn]
  }

  input EditPremiumAdjustmentInput {
    id: ID!
    Comment: String!
    Total_Borrower_Fees: Float!
    CU_Retail_Rate: Float!
    Protected_Loan_Amount: Float!
    Pay_Rate: Float!
    Premium_Due: Float!
    Total_Amount: Float!
  }

  type Query {
    searchCreditUnionByContractNumber(contractNumber: String!): [CreditUnion]
    searchCreditUnionByName(name: String!): [CreditUnion]
    searchCreditUnionByState(state: String!): [CreditUnion]
    searchCreditUnionByNameAndState(name: String!, state: String!): [CreditUnion]
  }

  type Mutation {
    editPremiumAdjustment(input: EditPremiumAdjustmentInput!): PremiumAdjustment
  }
`;
#schema-codegen-end
```

```javascript
//resolver-codegen-start
const resolvers = {
  Query: {
    searchCreditUnionByContractNumber: (_, { contractNumber }) => {
      // Placeholder data
      const creditUnions = [
        {
          id: '1',
          Contract_Number: '1234',
          Credit_Union_Name: 'Credit Union A',
          Credit_Union_State: 'CA',
          Premium_Reports: [],
          Premium_Adjustments: [],
          Single_Premium_Certificate_Returns: [],
        }
        // Add more entries as needed
      ];
      return creditUnions.filter(cu => cu.Contract_Number === contractNumber);
    },
    searchCreditUnionByName: (_, { name }) => {
      // Placeholder data
      const creditUnions = [
        {
          id: '1',
          Contract_Number: '1234',
          Credit_Union_Name: 'Credit Union A',
          Credit_Union_State: 'CA',
          Premium_Reports: [],
          Premium_Adjustments: [],
          Single_Premium_Certificate_Returns: [],
        }
        // Add more entries as needed
      ];
      return creditUnions.filter(cu => cu.Credit_Union_Name === name);
    },
    searchCreditUnionByState: (_, { state }) => {
      // Placeholder data
      const creditUnions = [
        {
          id: '1',
          Contract_Number: '1234',
          Credit_Union_Name: 'Credit Union A',
          Credit_Union_State: 'CA',
          Premium_Reports: [],
          Premium_Adjustments: [],
          Single_Premium_Certificate_Returns: [],
        }
        // Add more entries as needed
      ];
      return creditUnions.filter(cu => cu.Credit_Union_State === state);
    },
    searchCreditUnionByNameAndState: (_, { name, state }) => {
      // Placeholder data
      const creditUnions = [
        {
          id: '1',
          Contract_Number: '1234',
          Credit_Union_Name: 'Credit Union A',
          Credit_Union_State: 'CA',
          Premium_Reports: [],
          Premium_Adjustments: [],
          Single_Premium_Certificate_Returns: [],
        }
        // Add more entries as needed
      ];
      return creditUnions.filter(
        cu => cu.Credit_Union_Name === name && cu.Credit_Union_State === state
      );
    },
  },
  Mutation: {
    editPremiumAdjustment: (_, { input }) => {
      // Placeholder data
      const premiumAdjustments = [
        {
          id: '1',
          Product_Name: 'Product A',
          Report_Period: '2023-Q1',
          Status: 'Active',
          Last_Update: '2023-01-15',
          Period_Ending: '2023-03-31',
          Adjustment_Type_to_the_Credit_Union: 'Type A',
          Comment: 'Initial report',
          Total_Borrower_Fees_: 100.0,
          CU_Retail_Rate: 1.5,
          Protected_Loan_Amount: 5000.0,
          Pay_Rate: 0.5,
          Premium_Due: 50.0,
          Total_Amount: 200.0,
        }
        // Add more entries as needed
      ];

      const adjustmentIndex = premiumAdjustments.findIndex(pa => pa.id === input.id);
      if (adjustmentIndex > -1) {
        // Update the PremiumAdjustment
        premiumAdjustments[adjustmentIndex] = { ...premiumAdjustments[adjustmentIndex], ...input };
        return premiumAdjustments[adjustmentIndex];
      }
      return null;
    },
  },
};
//resolver-codegen-end
```
