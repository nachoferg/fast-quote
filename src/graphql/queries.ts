/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFarm = /* GraphQL */ `
  query GetFarm($farmName: String!, $visitDate: AWSDate!) {
    getFarm(farmName: $farmName, visitDate: $visitDate) {
      farmName
      visitDate
      results
      createdAt
      updatedAt
    }
  }
`;
export const listFarms = /* GraphQL */ `
  query ListFarms(
    $farmName: String
    $visitDate: ModelStringKeyConditionInput
    $filter: ModelfarmFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listFarms(
      farmName: $farmName
      visitDate: $visitDate
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        farmName
        visitDate
        results
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
