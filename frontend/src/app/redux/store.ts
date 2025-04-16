import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const rootReducer = combineSlices({});

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([]),
});

export type RootState = ReturnType<typeof rootReducer>;

/**
 * Типизированный хук для селектора
 */
export function useAppSelector<TSelected>(selector: (state: RootState) => TSelected) {
    return useSelector<RootState, TSelected>(selector);
}
