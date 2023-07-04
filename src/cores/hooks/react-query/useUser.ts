import { useMutation } from 'react-query';
import { postLogin, postRegister } from '../../services/User.service';

export const useLogin = () => useMutation('login', postLogin);

export const useRegister = () => useMutation('register', postRegister);
