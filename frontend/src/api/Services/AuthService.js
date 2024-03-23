import axios from 'axios';
import { useMutation, useQuery } from 'react-query';
import { API_USERS_URL } from '../Api';

// Function to register a new user
const registerUser = async ({ fullName, email, password }) => {
  try {
    const response = await axios.post(`${API_USERS_URL}/register`, { fullName, email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Function to verify user's email
const verifyEmail = async ({ email, verificationCode }) => {
  try {
    const response = await axios.post(`${API_USERS_URL}/verify-email`, { email, verificationCode });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Function to log in a user
const loginUser = async ({ email, password }) => {
  try {
    const response = await axios.post(`${API_USERS_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Function to get user details
const getUser = async () => {
  try {
    const response = await axios.get(`${API_USERS_URL}/user`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// React Query mutation for user registration
const useRegisterMutation = () => useMutation(registerUser);

// React Query mutation for verifying user's email
const useVerifyEmailMutation = () => useMutation(verifyEmail);

// React Query mutation for user login
const useLoginMutation = () => useMutation(loginUser);

// React Query query for getting user details
const useUserQuery = () => useQuery('user', getUser);

const AuthService = {
  useRegisterMutation,
  useVerifyEmailMutation,
  useLoginMutation,
  useUserQuery,
};

export default AuthService;
