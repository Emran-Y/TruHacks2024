import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { API_USERS_URL } from '../Api';
import { useQuery } from 'react-query';

const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_USERS_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'An error occurred while registering user');
  }
};

const verifyEmail = async (verificationData) => {
  try {
    const response = await axios.post(`${API_USERS_URL}/verify-email`, verificationData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'An error occurred while verifying email');
  }
};

const loginUser = async (loginData) => {
  try {
    const response = await axios.post(`${API_USERS_URL}/login`, loginData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'An error occurred while logging in');
  }
};

const useRegisterUserMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(registerUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
    },
  });
};

const useVerifyEmailMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(verifyEmail, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
    },
  });
};

const getUsers = async () => {
  try {
    const response = await axios.get(`${API_USERS_URL}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'An error occurred while fetching users');
  }
};
const useLoginUserMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(loginUser, {
    onSuccess: (data) => {
      // Handle successful login, e.g., store token in local storage
      localStorage.setItem('token', data.token);
      // Invalidate user data query to trigger refetch
      queryClient.invalidateQueries('users');
    },
  });
};

const useGetUsersQuery = () => {
  return useQuery('users', getUsers);
};



export {
  useRegisterUserMutation,
  useVerifyEmailMutation,
  useLoginUserMutation,
  useGetUsersQuery,
};