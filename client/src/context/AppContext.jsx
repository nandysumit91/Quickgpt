import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authAPI, chatAPI, setAuthToken, removeAuthToken, isAuthenticated } from "../utils/api";


const AppContext = createContext()

export const AppContextProvider = ({children}) => {
const navigate = useNavigate()
const [user , setUser] = useState(null);
const [chats , setChats] = useState([]);
const [selectedChat , setSelectedChat] = useState(null);
const [theme , setTheme] = useState(localStorage.getItem('theme') || 'light');

const fetchUser = async () => {
    try {
        if (isAuthenticated()) {
            const response = await authAPI.getUserData();
            if (response.success) {
                setUser(response.user);
            } else {
                removeAuthToken();
                setUser(null);
            }
        } else {
            setUser(null);
        }
    } catch (error) {
        console.error('Failed to fetch user:', error);
        removeAuthToken();
        setUser(null);
    }
}

const fetchUsersChats = async () => {
    try {
        const response = await chatAPI.getChats();
        if (response.success) {
            setChats(response.chats || []);
            if (response.chats && response.chats.length > 0) {
                setSelectedChat(response.chats[0]);
            } else {
                setSelectedChat(null);
            }
        }
    } catch (error) {
        console.error('Failed to fetch chats:', error);
        setChats([]);
        setSelectedChat(null);
    }
}

useEffect(()=>{
    if(theme === 'dark'){
        document.documentElement.classList.add('dark');
    }else{
        document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme)
},[theme])


useEffect(()=>{
    if(user){
        fetchUsersChats()
    }
    else{
        setChats([])
        setSelectedChat(null)
    }
},[user])

useEffect(()=>{
    fetchUser()
},[])


const login = async (credentials) => {
    try {
        const response = await authAPI.login(credentials);
        if (response.success) {
            setAuthToken(response.token);
            setUser(response.user);
            return { success: true };
        }
        return { success: false, message: response.message };
    } catch (error) {
        console.error('Login failed:', error);
        return { success: false, message: error.message };
    }
};

const register = async (userData) => {
    try {
        const response = await authAPI.register(userData);
        if (response.success) {
            setAuthToken(response.token);
            setUser(response.user);
            return { success: true };
        }
        return { success: false, message: response.message };
    } catch (error) {
        console.error('Registration failed:', error);
        return { success: false, message: error.message };
    }
};

const logout = () => {
    removeAuthToken();
    setUser(null);
    setChats([]);
    setSelectedChat(null);
    navigate('/login');
};

const value = {
    navigate, user, setUser, fetchUser, login, register, logout,
    chats, setChats, selectedChat, setSelectedChat, fetchUsersChats,
    theme, setTheme
}
    return (
    <AppContext.Provider value = {value}>
        {children}
    </AppContext.Provider>
)
}
export  const useAppContext = ()=> useContext(AppContext)