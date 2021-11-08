export function stateWillUpdate(payload) {
  return {
    type: 'layout/stateWillUpdate',
    payload,
  };
}
