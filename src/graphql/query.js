const getLoanAccount = ` {
    LoanAccount {
      name

      display_name
      total_loan

      line_ids {
        id
        display_name
      }
    }
  }
`;

export {getLoanAccount};
