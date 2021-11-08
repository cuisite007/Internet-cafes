/* eslint-disable import/no-anonymous-default-export */

export default {
  namespace: 'details',
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
