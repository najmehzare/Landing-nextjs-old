import { combineReducers, configureStore ,getDefaultMiddleware } from '@reduxjs/toolkit'
import usersReducer from './slices/usersSlice';
import modalReducer from './slices/modalSlice';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
const rootReducer = combineReducers({
    users : usersReducer,
    modal : modalReducer
})
 
const persistConfig = {
  key: 'root',
  storage,
  whitelist : []
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({serializableCheck :false ,})
})

const persistor = persistStore(store)

export { store, persistor };
