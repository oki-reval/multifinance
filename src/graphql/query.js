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

const getDetailLoanAccount = `{
    LoanAccount(domain:$domain, limit:$limit) 
      {   
        id
        name
        display_name
        principal
        total_payment
        line_ids {
          id
          display_name
          amount
        }   
      }
    }
    `;

const variableDetail = name => {
  return {
    domain: [['name', '=', name]],
    user_info: 'True',
    partner_id: 'True',
    limit: 1000,
  };
};

export {getLoanAccount, getDetailLoanAccount, variableDetail};
