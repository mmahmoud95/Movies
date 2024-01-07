import axios from "axios";

export const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/",
    headers: {},
    params: {
        api_key: "5ce16522b7c2658b1bdfda1ff76ebfb3",
        // page: 1,
    },
});
