import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { RootState } from 'src/redux/shared.types';
import { ActionsSearch } from '../ButtonSearch/ButtonSearch.types';

export default interface Props {
  selector: (mainState: RootState) => string;
  action: ActionCreatorWithPayload<any, string>;
  actionsSearch: ActionsSearch;
}
