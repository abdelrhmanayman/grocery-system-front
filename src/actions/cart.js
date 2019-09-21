import { ADD_TO_CART, UPDATE_CART_QUANTITY, REMOVE_ITEM_CART, SHOW_CONFIRMATION_DIALOG } from './types'

export const addToCart = (payload) => ({
    type: ADD_TO_CART,
    payload
})

export const updateItemCart = (payload) => ({
    type: UPDATE_CART_QUANTITY,
    payload
})

export const removeItemCart = (payload) => ({
    type: REMOVE_ITEM_CART,
    payload
})

export const showConfirmationDialogCart = (payload) => ({
    type: SHOW_CONFIRMATION_DIALOG,
    payload
})