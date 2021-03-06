export const transactionDefinition = {
  name: 'Transaction',
  properties: {
    TransactionId: {
      type: 'string',
      required: true,
      id: true,
    },
    dateTime: {
      type: 'date',
      required: true,
    },
    accountNo: {
      type: 'string',
      required: true,
    },
    amount: {
      type: 'number',
      required: true,
    },
    transactionType: {
      type: 'string',
      required: true,
    },
  },
};
