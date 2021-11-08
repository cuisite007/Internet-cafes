export function stateWillUpdate(payload) {
  return {
    type: 'breakdowns/stateWillUpdate',
    payload,
  };
}
