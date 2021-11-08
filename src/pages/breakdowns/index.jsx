import { Fragment } from 'react';
import { connect } from 'dva';
import { bindActionCreators } from 'redux';
import * as actions from './actions';

import Index from './components/index';

const mapStateToProps = (state) => ({
  ...state.bill,
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)((props) => (
  <Fragment>
    <Index {...props} />
  </Fragment>
));
