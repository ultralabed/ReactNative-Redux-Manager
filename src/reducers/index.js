import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';

export default combineReducers({
  // This is default reducer state
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer
});
