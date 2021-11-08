import { connect } from 'dva';
import { bindActionCreators } from 'redux';
import Index from './components/index';

import * as actions from './actions';

const mapStateToProps = (state) => ({
  ...state.layout,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
