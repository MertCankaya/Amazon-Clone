import axios from "axios"

const instance = axios.create({
    //The API (cloud functions) URL
    baseURL: "https://us-central1-clone-ff34b.cloudfunctions.net/api"

})

export default instance;