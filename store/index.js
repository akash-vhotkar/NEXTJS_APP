import { applyMiddleware, combineReducers , legacy_createStore as createStore} from 'redux';
import { entitiesReducer, queriesReducer, queryMiddleware } from 'redux-query';

export const getQueries = state => state.queries;
export const getEntities = state => state.entities;
const reducer = combineReducers({
  entities: entitiesReducer,
  queries: queriesReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(queryMiddleware( getQueries, getEntities)),
);

export default store;