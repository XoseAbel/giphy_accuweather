import { AsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'src/redux/shared.types';

export default interface Props {
  action: AsyncThunk<any, void, { rejectValue: { message: string }; getState: () => RootState }>;
  title: string;
  checkValue: (mainState: RootState) => string;
}
