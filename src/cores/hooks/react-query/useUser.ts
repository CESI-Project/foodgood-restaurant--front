import { useMutation } from 'react-query';
import { postLogin, postRegister } from '../../services/User.service';

export const useUser = () => useMutation('login', postLogin);

export const useRegister = () => useMutation('register', postRegister);
