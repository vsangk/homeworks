import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';


const preloadedState = {
  notes: [],
  tracks: {},
  isRecording:false,
  isPlaying:false
};

const addLoggingToDispatch = (store) => (next) => (action) => {
  const localDispatch = store.dispatch;
  console.log(store.getState());
  console.log(action);
  let returnValue = localDispatch(action);
  console.log(store.getState());
  return returnValue;
};

const configureStore = (state = preloadedState) => (
  createStore(
    rootReducer,
    state,
    applyMiddleware(addLoggingToDispatch)
  )
);

export default configureStore;
