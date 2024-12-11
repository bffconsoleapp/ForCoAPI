import { gql } from 'apollo-server';

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

export default typeDefs;