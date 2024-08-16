import {
  PayloadAction,
  SliceCaseReducers,
  ValidateSliceCaseReducers,
  createSlice,
} from "@reduxjs/toolkit";

export enum GENERIC_STATUS {
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

interface GenericState<T> {
  data?: T;
  status: GENERIC_STATUS;
}

export const createGenericSlice = <
  T,
  Reducers extends SliceCaseReducers<GenericState<T>>
>({
  name = "",
  initialState,
  reducers,
}: {
  name: string;
  initialState: GenericState<T>;
  reducers: ValidateSliceCaseReducers<GenericState<T>, Reducers>;
}) => {
  return createSlice({
    name,
    initialState,
    reducers: {
      start(state) {
        state.status = GENERIC_STATUS.LOADING;
      },
      error(state: GenericState<T>, action: PayloadAction<T>) {
        state.data = action.payload;
        state.status = GENERIC_STATUS.SUCCESS;
      },
      success(state: GenericState<T>, action: PayloadAction<T>) {
        state.data = action.payload;
        state.status = GENERIC_STATUS.ERROR;
      },
      ...reducers,
    },
  });
};
