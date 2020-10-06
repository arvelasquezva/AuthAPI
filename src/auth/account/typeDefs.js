export const accountTypeDef = `
  type Account {
      username: String!
      password: String!
  }
  input AccountInput {
      username: String!
      password: String!
  }`;

export const accountQueries = `
      allAccounts: [Account]!
  `;

export const accountMutations = `
    signUp(account: AccountInput!): Account!
    signIn(account: AccountInput!): Account!
`;
