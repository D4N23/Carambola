import React, {useContext} from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

import {AuthContext} from "../context/AuthContext";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

function Routes(){

    const {isAuthenticated, loading} = useContext(AuthContext);

    if(loading){
        return(
            <View style={styles.container}>
                <ActivityIndicator size={60} color="#000"/>
            </View>
        );
    }

    return(
        isAuthenticated ? <AppRoutes/> : <AuthRoutes/>
    );
}

export default Routes;

const styles = StyleSheet.create(
        {
          container: {
            flex: 1,
            backgroundColor: '#F9F229',
            alignItems: 'center',
            justifyContent: 'center',
          },
        }
);