import TokenService from "./token-services";
import config from "../config";

const ItemsApiService = {
  getItems() {
    return fetch(`${config.API_ENDPOINT}/home`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  postitem(item) {
    return fetch(`${config.API_ENDPOINT}/add-item`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(item),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default ItemsApiService;
