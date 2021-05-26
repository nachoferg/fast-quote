/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getQuote = /* GraphQL */ `
  query GetQuote($qid: ID!, $owner: String!) {
    getQuote(qid: $qid, owner: $owner) {
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
export const listQuotes = /* GraphQL */ `
  query ListQuotes(
    $qid: ID
    $owner: ModelStringKeyConditionInput
    $filter: ModelQuoteFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listQuotes(
      qid: $qid
      owner: $owner
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
