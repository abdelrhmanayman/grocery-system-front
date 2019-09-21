import { ADD_TO_CART, UPDATE_CART_QUANTITY, REMOVE_ITEM_CART, SHOW_CONFIRMATION_DIALOG } from '../actions/types'
import { NotificationManager } from 'react-notifications'


const intialState = {
    cart: [],
    showConfirmationDialog: false,
    selectedItem: null
}

export default (state = intialState, action) => {
    if (state.cart.length === 0 && localStorage.getItem('cart')) {
        state.cart = JSON.parse(localStorage.getItem('cart'))
    }
    switch (action.type) {
        case ADD_TO_CART:
            state.cart.push({ ...action.payload, quantity: '1' })
            localStorage.setItem('cart', JSON.stringify(state.cart))
            NotificationManager.success('Item Added To The Cart!')
            return { ...state }
        case UPDATE_CART_QUANTITY:
            let newCart = state.cart.map(item => {
                if (item.id === (action.payload).item.id) {
                    item.quantity = action.payload.value
                    return item
                }
                return item
            })
            state.cart = newCart
            localStorage.setItem('cart', JSON.stringify(newCart))

            return { ...state }
        case REMOVE_ITEM_CART:
            let filteredCart = state.cart.filter(item => item.id !== (action.payload).id)
            state.cart = filteredCart
            localStorage.setItem('cart', JSON.stringify(filteredCart))
            state.showConfirmationDialog = false
            NotificationManager.success('Item Removed From Cart')
            return { ...state }

        case SHOW_CONFIRMATION_DIALOG:
            state.showConfirmationDialog = action.payload.value
            state.selectedItem = action.payload.item
            return { ...state }
        default:
            return { ...state }
    }

}
