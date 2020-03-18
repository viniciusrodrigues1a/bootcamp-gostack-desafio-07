import produce from 'immer';

export default function(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        const { product } = action;
        draft.push(product);
      });
    case '@cart/REMOVE':
      return produce(state, draft => {
        const product = draft.find(p => p.id === action.id);

        draft.splice(draft.indexOf(product), 1);
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS':
      return produce(state, draft => {
        const { id, amount } = action;
        const product = draft.find(p => p.id === id);

        if (product && amount > 0) {
          product.amount = amount;
        }
      });
    default:
      return state;
  }
}
