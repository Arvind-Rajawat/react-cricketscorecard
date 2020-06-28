import { createStore, applyMiddleware,compose} from "redux";

import  rootReducer,{ RootState }  from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();


let middlewares = applyMiddleware(sagaMiddleware);

var appStore = createStore(rootReducer, compose(middlewares));
sagaMiddleware.run(rootSaga);

export default appStore;










