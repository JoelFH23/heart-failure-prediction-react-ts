//const API_URL = "https://python-server-g5cg.onrender.com/v1/predict";
const API_URL = "https://jsonplaceholder.typicode.com/todos/";

export const makePrediction = (): Promise<any> => {
    return fetch(API_URL).then((response) => response.json());
};
