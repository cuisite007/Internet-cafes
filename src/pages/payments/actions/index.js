export function stateWillUpdate(payload) {
  return {
    type: 'payments/stateWillUpdate',
    payload,
  };
}
