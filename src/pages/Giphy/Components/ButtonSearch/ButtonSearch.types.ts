import { ActionCreatorWithoutPayload, AsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'src/redux/shared.types';

export default interface Props {
  actions: ActionsSearch;
  title: string;
  checkValue: (mainState: RootState) => string;
}

export type ActionsSearch = (
  | ActionCreatorWithoutPayload<string>
  | AsyncThunk<any, void, { rejectValue: { message: string }; getState: () => RootState }>
)[];
