import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootSaga from "./root-saga";
import rootReducer from "./root-reducer";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

// export const persistor = persistStore(store);
