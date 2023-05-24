import  {baseUrl} from './utils'
import  {token} from './utils'

 class Api {
    constructor(baseUrl, headers) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }
    _checkResponse(resolve) {
      if (resolve.ok) {
        return resolve.json();
      } else {
        return Promise.reject(`Ошибка ${resolve.status}: ${resolve.statusText}`)
      }
    }

    getUserInfo() {
      return fetch(`${this._baseUrl}/users/me`,
      {
        method: 'GET',
        headers: this._headers
      })
        .then(res => this._checkResponse(res))
    }

    patchUserInfo(data) {
      return fetch(`${this._baseUrl}/users/me`,
        {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify({
            name: data.user_name,
            about: data.biography
          })
        })
        .then(res => this._checkResponse(res))
    }

    getStarterCards() {
      return fetch(`${this._baseUrl}/cards`,
      {
        method: 'GET',
        headers: this._headers
      })
        .then(res => this._checkResponse(res))
    }

    addCardToServer(data) {
      return fetch(`${this._baseUrl}/cards`,
      {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name: data.name,
          link: data.link
        })
      })
        .then(res => this._checkResponse(res))
    }

    deleteCard(data){
      return fetch(`${this._baseUrl}/cards/${data._id}`,
        {
          method: 'DELETE',
          headers: this._headers
        })
        .then(res => this._checkResponse(res))
    }

    setLikes(data) {
      return fetch(`${this._baseUrl}/cards/${data._id}/likes`,
      {
        method: 'PUT',
        headers: this._headers,
      })
        .then(res => this._checkResponse(res))
    }

    deleteLikes(data) {
      return fetch(`${this._baseUrl}/cards/${data._id}/likes`,
      {
        method: 'DELETE',
        headers: this._headers,
      })
        .then(res => this._checkResponse(res))
    }

    patchAvaratImage(data) {
      return fetch(`${this._baseUrl}/users/me/avatar`,
        {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify({
            avatar: data.link
          })
        })
        .then(res => this._checkResponse(res))
    }

  }

  export const api = new Api(baseUrl, {
    authorization: token,
    'Content-Type': 'application/json'
  });

