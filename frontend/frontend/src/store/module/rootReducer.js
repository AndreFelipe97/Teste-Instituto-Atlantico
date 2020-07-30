import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer'
import titleHeader from './titleHeader/reducer';
import breadcrumb from './breadcrumb/reducer'

export default combineReducers({
  auth,
  user,
  titleHeader,
  breadcrumb,
})