import produce from 'immer';

export default function(state = [], action) {
  switch (action.type) {
    case '@cart/ADD':
      return produce(state, draft => {
        draft.push(action.product);
      });
    case '@cart/REMOVE':
      return produce(state, draft => {
        const product = draft.find(p => p.id === action.id);

        draft.splice(draft.indexOf(product), 1);
      });
    default:
      return state;
  }
}
