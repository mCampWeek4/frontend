import axios from 'axios';

const baseUrl = 'http://192.249.18.111:443';

const headers = (token) => {
    return {
    'Content-Type': 'application/json',
    'Authorization': {token}
    };
};

//login related api
export const fetchToken = async (name, password, token) => {
    try {
        const response = axios.post(`${baseUrl}/login`, {
            name: {name},
            password: {password}
        },
        headers(token)
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

//user related api
export const newUser = async (password, token) => {
    try {
        const response = axios.post(`${baseUrl}/user/edit`, {
            password: {password}
        },
        headers(token)
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

//fridge related api
export const fetchAllFridgeIngredient = async (userId, token) => {
    try {
        const response = axios.get(`${baseUrl}/fridge/ingredient`, {
            userId: {userId},
        },
        headers(token)
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};


export const addFridgeIngredient = async (userId, ingredient, token) => {
    try {
        const response = axios.post(`${baseUrl}/fridge/ingredient/add`, {
            userId: {userId},
            ingredientId: {ingredient}
        },
        headers(token)
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};


export const deleteFridgeIngredient = async (userId, ingredient, token) => {
    try {
        const response = axios.post(`${baseUrl}/fridge/ingredient/delete`, {
            userId: {userId},
            ingredientId: {ingredient}
        },
        headers(token)
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};



//recipe related api
export const fetchRecipe = async (ingredient, level, time, token) => {
    try {
        const response = axios.get(`${baseUrl}/recipe`, {
            ingredientIdString: {ingredient},
            levelString: {level},
            time: {time}
        },
        headers(token)
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};



//food related api
export const fetchAllFood = async (token) => {
    try {
        const response = axios.get(`${baseUrl}/food`, headers(token));
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const fetchSpecificFood = async (foodName, token) => {
    try {
        const response = axios.get(`${baseUrl}/food/${foodName}`, headers(token));
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

//ingredient related api
export const fetchAllIngredient = async (token) => {
    try {
        const response = axios.get(`${baseUrl}/ingredient`, headers(token));
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const fetchIngredient = async (foodId, token) => {
    try {
        const response = axios.get(`${baseUrl}/ingredient/${foodId}`, headers(token));
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

