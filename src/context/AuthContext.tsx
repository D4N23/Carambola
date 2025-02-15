import React, { useState, createContext, ReactNode, useEffect } from 'react';
import { api } from '../services/api.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
    loadingAuth: boolean;
    loading: boolean;
    signOut: () => Promise<void>;
}

type UserProps = {
    id: string;
    name: string;
    email: string;
    token: string;
}

export const AuthContext = createContext({} as AuthContextData);

type AuthProviderProps = {
    children: ReactNode;
}

type SignInProps = {
    email: string;
    password: string;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps>({
        id: '',
        name: '',
        email: '',
        token: '',
    });

    const [loadingAuth, setLoadingAuth] = useState(false)
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function getUser(){
            //pegar as dados salvos do user
            const userInfo = await AsyncStorage.getItem('@carambolaUser');
            let hasUser: UserProps = JSON.parse(userInfo || '{}');

            if(Object.keys(hasUser).length > 0){
                api.defaults.headers.common['Authorization'] = `Bearer ${hasUser.token}`;
            }

            setUser({
                id: hasUser.id,
                name: hasUser.name,
                email: hasUser.email,
                token: hasUser.token
            })

            setLoading(false);
        }

        getUser();

    }, []);

    const isAuthenticated = !!user.name;

    async function signIn({ email, password }: SignInProps) {
        // console.log(email);
        // console.log(password);
        setLoadingAuth(true);
        try {
            const response = await api.post('/login', {
                email,
                password
            });

           const {id, name, token} = response.data;
           const data ={
            ...response.data
           };

           await AsyncStorage.setItem('@carambolaUser', JSON.stringify(data));

           api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

           setUser({
            id,
            name,
            email,
            token
           })

           setLoadingAuth(false);


        } catch (error) {
            console.log('erro ao acessar', error);
            setLoadingAuth(false);
        }


    }

    async function signOut() {
        await AsyncStorage.clear()
        .then(() =>{
            setUser({
                id: '',
                email: '',
                name: '',
                token: ''
            })
        })
    }   

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn,  loadingAuth, loading, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}