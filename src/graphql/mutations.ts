/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createQuote = /* GraphQL */ `
  mutation CreateQuote(
    $input: CreateQuoteInput!
    $condition: ModelQuoteConditionInput
  ) {
    createQuote(input: $input, condition: $condition) {
      qid
      owner
      duration
      smoker
      gender
      quote
      age
      updatedAt
      createdAt
    }
  }
`;
export const updateQuote = /* GraphQL */ `
  mutation UpdateQuote(
    $input: UpdateQuoteInput!
    $condition: ModelQuoteConditionInput
  ) {
    updateQuote(input: $input, condition: $condition) {
      qid
      owner
      duration
      smoker
      gender
      quote
      age
      updatedAt
      createdAt
    }
  }
`;
export const deleteQuote = /* GraphQL */ `
  mutation DeleteQuote(
    $input: DeleteQuoteInput!
    $condition: ModelQuoteConditionInput
  ) {
    deleteQuote(input: $input, condition: $condition) {
      qid
      owner
      duration
      smoker
      gender
      quote
      age
      updatedAt
      createdAt
    }
  }
`;
