import { Api, token } from '../api'

export const getProductsFromServer = async () =>
    Api.post('/products', { token }).then(res => res.message ? ({ code: res.code, message: res.message }) : res)
        .catch(err => ({ message: err.message }))
