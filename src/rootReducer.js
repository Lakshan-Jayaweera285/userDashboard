import { combineReducers } from 'redux';
import dashboardReducer from './views/Dashboard/reducer';
import userProfileReducer from './views/UserProfile/reducer';
import devicesListReducer from './views/TableList/reducer';
import settingsReducer from './views/Notifications/reducer';

export default combineReducers({
  dashboardReducer: dashboardReducer,
  userProfileReducer: userProfileReducer,
  devicesListReducer: devicesListReducer,
  settingsReducer: settingsReducer,
});
