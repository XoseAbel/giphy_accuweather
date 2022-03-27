import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { RootState } from 'src/redux/shared.types';

export default interface Props {
  selector: (mainState: RootState) => string | null;
  action: ActionCreatorWithPayload<void>;
}
