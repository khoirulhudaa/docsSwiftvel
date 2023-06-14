import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import storage from "redux-persist/lib/storage";
import authSlice from './authSlice';

const persistConfig = {
    key: "root",
    storage,
    transforms: [
        encryptTransform({
            secretKey: "dragme",
            onError: function(error) {
                console.log(error)
            }
        })
    ]
}


const rootReducer = combineReducers({
    authReducers: authSlice,
});

const persistReducers = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    devTools: true,
});

export const persistor = persistStore(store);
export default store;