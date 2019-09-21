import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE, GET_PRODUCTS, SHOW_DETAILS_DIALOG, CLOSE_DIALOG } from '../actions/types'

export const getProductAction = () => ({
    type: GET_PRODUCTS
})
export const getProductActionSuccess = (payload) => ({
    type: GET_PRODUCTS_SUCCESS,
    payload
})
export const getProductActionFailure = (payload) => ({
    type: GET_PRODUCTS_FAILURE,
    payload
})

export const showDetailsDialog = (payload) => ({
    type: SHOW_DETAILS_DIALOG,
    payload
})

export const closeDetailsDialog = () => ({
    type: CLOSE_DIALOG
})