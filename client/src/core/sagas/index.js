import {all} from 'redux-saga/effects';
import {dashBoardWatcher} from './DashboardSaga';

export default function* rootSaga() {
    yield all([
        dashBoardWatcher()
    ])
  }