import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE, GET_PRODUCTS, SHOW_DETAILS_DIALOG, CLOSE_DIALOG } from '../actions/types'

const intialState = {
    products: null,
    loading: true,
    showDetailsDialog: false,
    selectedItem: null
}

export default (state = intialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            state.loading = true
            return { ...state }
        case GET_PRODUCTS_SUCCESS:
            state.products = action.payload
            state.loading = false
            return { ...state }
        case GET_PRODUCTS_FAILURE:
            state.loading = false
            state.products = {
                error: action.payload
            }
            return { ...state }
        case SHOW_DETAILS_DIALOG:
            state.showDetailsDialog = true
            state.selectedItem = action.payload
            return { ...state }
        case CLOSE_DIALOG:
            state.showDetailsDialog = false
            state.satselectedItem = null
            return { ...state }
        default:
            return { ...state }
    }

}