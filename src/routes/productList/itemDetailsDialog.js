import React, { Component } from 'react'
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { connect } from 'react-redux'
import { Button } from '@material-ui/core'
import { addToCart, closeDetailsDialog } from '../../actions'
import { NotificationManager } from 'react-notifications'

class ItemDetails extends Component {

    addItemToCart = (item) => {
        let { cart } = this.props.cartReducer
        let check = cart.filter(product => product.id === item.id)
        check.length > 0 ? NotificationManager.error('this item already added to the cart') : this.props.addToCart(item)
        this.props.closeDetailsDialog()
    }

    render() {
        let { selectedItem, showDetailsDialog } = this.props.productsReducer
        return selectedItem ?
            (
                <Dialog
                    onClose={() => this.props.closeDetailsDialog()}
                    open={showDetailsDialog}
                >
                    <DialogContent>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ justifyContent: 'center' }}>
                                <img src={selectedItem.images} alt="product" className="img-fluid" width='150' height='150' />
                            </div>
                            <div>
                                <p>Product name: <label style={{ color: 'brown' }}>{selectedItem.name}</label></p>
                                <p>Product price: <label style={{ color: 'brown' }}>{`${selectedItem.price} LE`}</label> </p>
                            </div>
                            <div style={{ justifyContent: 'center' }}>
                                <Button
                                    className="btn-info text-white btn-icon"
                                    onClick={() => this.addItemToCart(selectedItem)}
                                >
                                    Add to cart
                                </Button>
                            </div>
                        </div>


                    </DialogContent>
                </Dialog>
            )
            : null

    }
}

const mapStateToProps = (state) => ({ productsReducer: state.productsReducer, cartReducer: state.cartReducer })

export default connect(mapStateToProps, { addToCart, closeDetailsDialog })(ItemDetails)



