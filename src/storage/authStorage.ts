import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEYS  = {
    AUTH : "isAuthenticated",
    BOARDING : "hasSeenBoarding"
}

export const setAuthStatus = async (status : boolean) => {
    try {
        await AsyncStorage.setItem(STORAGE_KEYS.AUTH, status ? "true" : "false");
    } catch (error) {
        console.error("Error setting authentication status:", error);
    }
}

export const getAuthStatus = async ()=> {
    try {
        const status = await AsyncStorage.getItem(STORAGE_KEYS.AUTH);
        return status === "true";
    } catch (error) {
        console.error("Error getting authentication status:", error);
        return false;
    }
}

export const setBoardingStatus = async (status : boolean) => {
    try {
        await AsyncStorage.setItem(STORAGE_KEYS.BOARDING, status ? "true" : "false");
    } catch (error) {
        console.error("Error setting boarding status:", error);
    }
}

export const getBoardingStatus = async () => {
    try {
        const status = await AsyncStorage.getItem(STORAGE_KEYS.BOARDING);
        return status === "true";
    } catch (error) {
        console.error("Error getting boarding status:", error);
        return false;
    }
}

export const logout = async () => {
    try {
        await AsyncStorage.removeItem(STORAGE_KEYS.AUTH);
        await AsyncStorage.removeItem(STORAGE_KEYS.BOARDING);
    }
    catch (error) {
        console.error("Error logging out:", error);
    }
}