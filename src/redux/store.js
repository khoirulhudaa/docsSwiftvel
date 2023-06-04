import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import { persistReducer, persistStore } from 'redux-persist';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import storage from "redux-persist/lib/storage";

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