export const accountTypeDef = `
  type Account {
      nickName: String!
      password: String!
  }
  input AccountInput {
      nickName: String!
      password: String!
  }`;

export const accountQueries = `
      allAccounts: [Account]!
  `;

export const accountMutations = `
    signUp(account: AccountInput!): Account!
    signIn(account: AccountInput!): Account!
`;
