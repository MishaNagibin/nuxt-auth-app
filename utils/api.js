import axios from "axios"

class Api {
    constructor() {
        this._url = "https://dev-erpfit.risoma.ru/api/v1/users"
    }

    post = (url, data, config) => this.request(url, "POST", data, config)

    async request(url, method, data, config) {
        try {
            const response = await axios({
                method,
                url: encodeURI(`${this._url}/${url}`),
                data,
                ...config,
            })
            return response.data
        } catch (error) {
            throw error.response?.data
        }
    }
}

export default new Api()
