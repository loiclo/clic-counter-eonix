/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import counterReducer from './reducers/counterReducer';
// import languageProviderReducer from './containers/LanguageProvider/reducer';
// import globalReducer from './containers/App/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    counter: counterReducer,
    // language: languageProviderReducer,
    // global: globalReducer,
    ...injectedReducers,
  });

  return rootReducer;
}