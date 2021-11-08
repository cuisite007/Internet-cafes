/* eslint-disable import/no-anonymous-default-export */

export default {
  namespace: 'bill',
  state: {
    num: 0,
  },
  reducers: {
    stateWillUpdate(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {},
  subscriptions: {},
};
