import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { API_KEYWORD_URL } from '../Api';

// Function to fetch message from the API
const getMessage = async () => {
  const response = await axios.get(`${API_KEYWORD_URL}/get`);
  return response.data;
};

// Function to post a message to the API
const postMessage = async (keyword, token) => {
  const response = await axios.post(`${API_KEYWORD_URL}/post`, { keyword }, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

// Custom hook for fetching message data using React Query
const useGetMessage = () => {
  return useQuery('message', getMessage);
};

// Custom hook for posting a message using React Query
const usePostMessage = () => {
  const queryClient = useQueryClient();

  return useMutation(postMessage, {
    // Invalidate the 'message' query cache on successful posting to trigger a refetch
    onSuccess: () => {
      queryClient.invalidateQueries('message');
    },
  });
};

export { useGetMessage, usePostMessage };
