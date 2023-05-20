const API_URL = "https://python-server-g5cg.onrender.com/v1/predict";
//const API_URL = "https://jsonplaceholder.typicode.com/todos/";

export const makePrediction = (data: any): Promise<any> => {
    return fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((response) => response.json());
};
