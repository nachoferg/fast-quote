/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFarm = /* GraphQL */ `
  mutation CreateFarm(
    $input: CreateFarmInput!
    $condition: ModelfarmConditionInput
  ) {
    createFarm(input: $input, condition: $condition) {
      farmName
      visitDate
      results
      createdAt
      updatedAt
    }
  }
`;
export const updateFarm = /* GraphQL */ `
  mutation UpdateFarm(
    $input: UpdateFarmInput!
    $condition: ModelfarmConditionInput
  ) {
    updateFarm(input: $input, condition: $condition) {
      farmName
      visitDate
      results
      createdAt
      updatedAt
    }
  }
`;
export const deleteFarm = /* GraphQL */ `
  mutation DeleteFarm(
    $input: DeleteFarmInput!
    $condition: ModelfarmConditionInput
  ) {
    deleteFarm(input: $input, condition: $condition) {
      farmName
      visitDate
      results
      createdAt
      updatedAt
    }
  }
`;
