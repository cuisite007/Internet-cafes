export function stateWillUpdate(payload) {
  return {
    type: 'bill/stateWillUpdate',
    payload,
  };
}
