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
  /*getArticle(articleId) {
    return fetch(`${config.API_ENDPOINT}/articles/${articleId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },*/
};

export default ItemsApiService;
