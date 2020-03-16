import produce from 'immer';

export default function(state = [], action) {
  switch (action.type) {
    case '@cart/ADD':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.product.id);

        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({ ...action.product, amount: 1 });
        }
      });
    case '@cart/REMOVE':
      return produce(state, draft => {
        const product = draft.find(p => p.id === action.id);

        draft.splice(draft.indexOf(product), 1);
      });
    case '@cart/UPDATE_AMOUNT':
      return produce(state, draft => {
        const product = draft.find(p => p.id === action.id);

        if (action.amount > 0) {
          product.amount = action.amount;
        }
      });
    default:
      return state;
  }
}
