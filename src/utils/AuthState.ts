import { iUser } from './iUser';

export interface AuthState {
  user?: iUser;
  isLoading: boolean;
}
