export default {
  namespace: 'layout',
  state: {
    menus: {},
    selectedKeys: [],
  },
  reducers: {
    stateWillUpdate(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ search }) => {});
    },
  },
};
