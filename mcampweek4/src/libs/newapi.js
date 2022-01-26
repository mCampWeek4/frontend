import axios from 'axios';
import { get } from 'react-scroll/modules/mixins/scroller';

const baseUrl = 'http://192.249.18.111:443';

const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };

//login related api


export const fetchToken = async (name, password) => {
    try {
        let response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {...headers,},
        body: JSON.stringify({
            "name": name,
            "password": password
          })
      });
      let json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };

export const createUser = async (name, password) => {
    try {
        let response = await fetch(`${baseUrl}/user/new`, {
        method: 'POST',
        headers: {...headers,},
        body: JSON.stringify({
            "name": name,
            "password": password
          })
      });
      let json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };

//user related api
export const editUser = async (name, password, token) => {
    try {
        const response = await fetch(`${baseUrl}/user/${name}/edit`, {
            method: 'POST',
            headers: {...headers, "Authorization": token},
            body: JSON.stringify({
                "password": password  
            })
        });
        let json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
};

export const fetchAllFridgeIngredient = async (userId, token) => {
    try {
        let response = await fetch(`${baseUrl}/fridge/ingredient`, {
        method: 'POST',
        headers: {
          ...headers,
          "Authorization": token,
        },
        body: JSON.stringify({
            "id": userId,
        })
      });
      let json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };

export const fetchIngredientItem = async (id, token) => {
    try {
        let response = await fetch(`${baseUrl}/ingredient/specific/${id}`, {
        method: 'GET',
        headers: {
          ...headers,
          "Authorization": token,
        },
      });
      let json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };

//fridge related api
// export const fetchAllFridgeIngredient = async (userId, token) => {
//     try {
//         const response = axios.get(`${baseUrl}/fridge/ingredient`, {
//             userId: {userId},
//         },
//         headers(token)
//         );
//         return response.data;
//     } catch (error) {
//         console.log(error);
//     }
// };


export const addFridgeIngredient = async (userId, ingredient, token) => {
    try {
        const response = await fetch(`${baseUrl}/fridge/ingredient/add`, {
            method: 'POST',
            headers: {
                ...headers,
                "Authorization": token,
            },
            body: JSON.stringify({
                "id": userId,
                "ingredientId": ingredient
            })
        });
        let json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
};


export const deleteFridgeIngredient = async (userId, ingredient, token) => {
    try{
        const response = await fetch(`${baseUrl}/fridge/ingredient/delete`, {
            method: 'POST',
            headers: {
                ...headers,
                "Authorization": token,
            },
            body: JSON.stringify({
                "id": userId,
                "ingredientId": ingredient
            })
        });
        let json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
};

//recipe related api
export const fetchRecipe = async (ingredient, level, time, token) => {
    try {
        const response = await fetch(`${baseUrl}/recipe`, {
            method: 'POST',
            headers: {
                ...headers,
                "Authorization": token,
            },
            body: JSON.stringify({
                "ingredientIdString": ingredient,
                "levelString": level,
                "time": time
            })
        })
        let json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
};

export const fetchMoreRecipe = async (ingredient, descriptionId , token) => {
    try {
        const response = await fetch(`${baseUrl}/recipe/more`, {
            method: 'POST',
            headers: {
                ...headers,
                "Authorization": token,
            },
            body: JSON.stringify({
                "ingredientIdString": ingredient,
                "description_id_recipe": descriptionId
            })
        })
        let json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
};


//food related api
export const fetchAllFood = async (token) => {
    try {
        const response = await fetch(`${baseUrl}/food`, {
            method: 'GET',
            headers: {
                ...headers,
                "Authorization": token,
            }
        });
        let json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
};

export const fetchSpecificFood = async (foodName, token) => {
    try {
        const response = await fetch(`${baseUrl}/food/${foodName}`, {
            method: 'GET',
            headers: {
                ...headers,
                "Authorization": token,
            }
        });
        let json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
};

//ingredient related api
export const fetchAllIngredient = async (token) => {
    try {
        const response = await fetch(`${baseUrl}/ingredient`, {
            method: 'GET',
            headers: {
                ...headers,
                "Authorization": token,
            }
        });
        let json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
};

export const fetchIngredient = async (foodId, token) => {
    try {
        const response = await fetch(`${baseUrl}/ingredient/${foodId}`, {
            method: 'GET',
            headers: {
                ...headers,
                "Authorization": token,
            }
        });
        let json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
};