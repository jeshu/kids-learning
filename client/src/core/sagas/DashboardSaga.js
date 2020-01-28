import { put, takeLatest } from 'redux-saga/effects'

export function* fetchDashboardData() {
    console.log("fetch method called...");
    
    yield put({ type: "LOADING" });
    try {
        const data = yield fetch("/data/dashboard.json")
            .then(res => res.json());
        yield put({ type: 'DASHBOARD_LOADED', payload: {data} });
    } catch (err) {
        yield put({ type:"DASHBOARD_LOAD_ERROR"})
    }
}

export function* dashBoardWatcher() {
    console.log("saga called...");
    
    yield takeLatest('LOAD_DASHBOARD_DATA', fetchDashboardData)
}