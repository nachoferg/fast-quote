/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFarmInput = {
  id?: string | null,
  farmName: string,
  visitDate: string,
  results: string,
};

export type ModelfarmConditionInput = {
  results?: ModelStringInput | null,
  and?: Array< ModelfarmConditionInput | null > | null,
  or?: Array< ModelfarmConditionInput | null > | null,
  not?: ModelfarmConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type farm = {
  __typename: "farm",
  farmName?: string,
  visitDate?: string,
  results?: string,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateFarmInput = {
  farmName?: string | null,
  visitDate?: string | null,
  results?: string | null,
};

export type DeleteFarmInput = {
  id?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelfarmFilterInput = {
  farmName?: ModelStringInput | null,
  visitDate?: ModelStringInput | null,
  results?: ModelStringInput | null,
  and?: Array< ModelfarmFilterInput | null > | null,
  or?: Array< ModelfarmFilterInput | null > | null,
  not?: ModelfarmFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelfarmConnection = {
  __typename: "ModelfarmConnection",
  items?:  Array<farm | null > | null,
  nextToken?: string | null,
};

export type CreateFarmMutationVariables = {
  input?: CreateFarmInput,
  condition?: ModelfarmConditionInput | null,
};

export type CreateFarmMutation = {
  createFarm?:  {
    __typename: "farm",
    farmName: string,
    visitDate: string,
    results: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFarmMutationVariables = {
  input?: UpdateFarmInput,
  condition?: ModelfarmConditionInput | null,
};

export type UpdateFarmMutation = {
  updateFarm?:  {
    __typename: "farm",
    farmName: string,
    visitDate: string,
    results: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFarmMutationVariables = {
  input?: DeleteFarmInput,
  condition?: ModelfarmConditionInput | null,
};

export type DeleteFarmMutation = {
  deleteFarm?:  {
    __typename: "farm",
    farmName: string,
    visitDate: string,
    results: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetFarmQueryVariables = {
  farmName?: string,
  visitDate?: string,
};

export type GetFarmQuery = {
  getFarm?:  {
    __typename: "farm",
    farmName: string,
    visitDate: string,
    results: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFarmsQueryVariables = {
  farmName?: string | null,
  visitDate?: ModelStringKeyConditionInput | null,
  filter?: ModelfarmFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListFarmsQuery = {
  listFarms?:  {
    __typename: "ModelfarmConnection",
    items?:  Array< {
      __typename: "farm",
      farmName: string,
      visitDate: string,
      results: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateFarmSubscription = {
  onCreateFarm?:  {
    __typename: "farm",
    farmName: string,
    visitDate: string,
    results: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFarmSubscription = {
  onUpdateFarm?:  {
    __typename: "farm",
    farmName: string,
    visitDate: string,
    results: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFarmSubscription = {
  onDeleteFarm?:  {
    __typename: "farm",
    farmName: string,
    visitDate: string,
    results: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
