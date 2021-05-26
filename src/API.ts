/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateQuoteInput = {
  qid: string,
  owner: string,
  duration?: string | null,
  smoker?: string | null,
  gender?: string | null,
  quote?: number | null,
  age?: number | null,
  test?: string | null,
  updatedAt?: string | null,
  createdAt?: string | null,
};

export type ModelQuoteConditionInput = {
  duration?: ModelStringInput | null,
  smoker?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  quote?: ModelFloatInput | null,
  age?: ModelIntInput | null,
  test?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelQuoteConditionInput | null > | null,
  or?: Array< ModelQuoteConditionInput | null > | null,
  not?: ModelQuoteConditionInput | null,
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

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Quote = {
  __typename: "Quote",
  qid?: string,
  owner?: string,
  duration?: string | null,
  smoker?: string | null,
  gender?: string | null,
  quote?: number | null,
  age?: number | null,
  test?: string | null,
  updatedAt?: string,
  createdAt?: string,
};

export type UpdateQuoteInput = {
  qid: string,
  owner: string,
  duration?: string | null,
  smoker?: string | null,
  gender?: string | null,
  quote?: number | null,
  age?: number | null,
  test?: string | null,
  updatedAt?: string | null,
  createdAt?: string | null,
};

export type DeleteQuoteInput = {
  qid: string,
  owner: string,
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

export type ModelQuoteFilterInput = {
  qid?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  duration?: ModelStringInput | null,
  smoker?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  quote?: ModelFloatInput | null,
  age?: ModelIntInput | null,
  test?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelQuoteFilterInput | null > | null,
  or?: Array< ModelQuoteFilterInput | null > | null,
  not?: ModelQuoteFilterInput | null,
};

export type ModelIDInput = {
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

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelQuoteConnection = {
  __typename: "ModelQuoteConnection",
  items?:  Array<Quote | null > | null,
  nextToken?: string | null,
};

export type CreateQuoteMutationVariables = {
  input?: CreateQuoteInput,
  condition?: ModelQuoteConditionInput | null,
};

export type CreateQuoteMutation = {
  createQuote?:  {
    __typename: "Quote",
    qid: string,
    owner: string,
    duration?: string | null,
    smoker?: string | null,
    gender?: string | null,
    quote?: number | null,
    age?: number | null,
    test?: string | null,
    updatedAt: string,
    createdAt: string,
  } | null,
};

export type UpdateQuoteMutationVariables = {
  input?: UpdateQuoteInput,
  condition?: ModelQuoteConditionInput | null,
};

export type UpdateQuoteMutation = {
  updateQuote?:  {
    __typename: "Quote",
    qid: string,
    owner: string,
    duration?: string | null,
    smoker?: string | null,
    gender?: string | null,
    quote?: number | null,
    age?: number | null,
    test?: string | null,
    updatedAt: string,
    createdAt: string,
  } | null,
};

export type DeleteQuoteMutationVariables = {
  input?: DeleteQuoteInput,
  condition?: ModelQuoteConditionInput | null,
};

export type DeleteQuoteMutation = {
  deleteQuote?:  {
    __typename: "Quote",
    qid: string,
    owner: string,
    duration?: string | null,
    smoker?: string | null,
    gender?: string | null,
    quote?: number | null,
    age?: number | null,
    test?: string | null,
    updatedAt: string,
    createdAt: string,
  } | null,
};

export type GetQuoteQueryVariables = {
  qid?: string,
  owner?: string,
};

export type GetQuoteQuery = {
  getQuote?:  {
    __typename: "Quote",
    qid: string,
    owner: string,
    duration?: string | null,
    smoker?: string | null,
    gender?: string | null,
    quote?: number | null,
    age?: number | null,
    test?: string | null,
    updatedAt: string,
    createdAt: string,
  } | null,
};

export type ListQuotesQueryVariables = {
  qid?: string | null,
  owner?: ModelStringKeyConditionInput | null,
  filter?: ModelQuoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListQuotesQuery = {
  listQuotes?:  {
    __typename: "ModelQuoteConnection",
    items?:  Array< {
      __typename: "Quote",
      qid: string,
      owner: string,
      duration?: string | null,
      smoker?: string | null,
      gender?: string | null,
      quote?: number | null,
      age?: number | null,
      test?: string | null,
      updatedAt: string,
      createdAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateQuoteSubscription = {
  onCreateQuote?:  {
    __typename: "Quote",
    qid: string,
    owner: string,
    duration?: string | null,
    smoker?: string | null,
    gender?: string | null,
    quote?: number | null,
    age?: number | null,
    test?: string | null,
    updatedAt: string,
    createdAt: string,
  } | null,
};

export type OnUpdateQuoteSubscription = {
  onUpdateQuote?:  {
    __typename: "Quote",
    qid: string,
    owner: string,
    duration?: string | null,
    smoker?: string | null,
    gender?: string | null,
    quote?: number | null,
    age?: number | null,
    test?: string | null,
    updatedAt: string,
    createdAt: string,
  } | null,
};

export type OnDeleteQuoteSubscription = {
  onDeleteQuote?:  {
    __typename: "Quote",
    qid: string,
    owner: string,
    duration?: string | null,
    smoker?: string | null,
    gender?: string | null,
    quote?: number | null,
    age?: number | null,
    test?: string | null,
    updatedAt: string,
    createdAt: string,
  } | null,
};
