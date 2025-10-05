// API utility for making HTTP requests to the backend

const API_BASE_URL = '/api';

// Get auth token from localStorage
const getAuthToken = () => {
  return localStorage.getItem('token');
};

// Generic API request function
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const token = getAuthToken();
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }
    
    return data;
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};

// Auth API calls
export const authAPI = {
  register: async (userData) => {
    return apiRequest('/user/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },
  
  login: async (credentials) => {
    return apiRequest('/user/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },
  
  getUserData: async () => {
    return apiRequest('/user/data');
  },
};

// Chat API calls
export const chatAPI = {
  getChats: async () => {
    return apiRequest('/chat/get');
  },
  
  createChat: async () => {
    return apiRequest('/chat/create');
  },
  
  deleteChat: async (chatId) => {
    return apiRequest('/chat/delete', {
      method: 'POST',
      body: JSON.stringify({ chatId }),
    });
  },
};

// Message API calls
export const messageAPI = {
  sendTextMessage: async (messageData) => {
    return apiRequest('/message/text', {
      method: 'POST',
      body: JSON.stringify(messageData),
    });
  },
  
  sendImageMessage: async (messageData) => {
    return apiRequest('/message/image', {
      method: 'POST',
      body: JSON.stringify(messageData),
    });
  },
};

// Credit API calls
export const creditAPI = {
  getPlans: async () => {
    return apiRequest('/credit/plan');
  },
  
  purchasePlan: async (planData) => {
    return apiRequest('/credit/purchase', {
      method: 'POST',
      body: JSON.stringify(planData),
    });
  },
};

// Utility functions
export const setAuthToken = (token) => {
  localStorage.setItem('token', token);
};

export const removeAuthToken = () => {
  localStorage.removeItem('token');
};

export const isAuthenticated = () => {
  return !!getAuthToken();
};