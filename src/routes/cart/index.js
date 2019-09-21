import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input } from 'reactstrap'
import { Button } from '@material-ui/core';
import { updateItemCart, removeItemCart, showConfirmationDialogCart } from '../../actions'
import { NavLink } from 'react-router-dom'
import ConfirmationDialog from '../../components/confirmationDialog'

class Cart extends Component {
    constructor(props) {
        super(props)
        this.onChangeQuantity = this.onChangeQuantity.bind(this)
        this.getTotalPrice = this.getTotalPrice.bind(this)
        this.removeItem = this.removeItem.bind(this)
    }

    onChangeQuantity = (value, item) => {
        this.props.updateItemCart({ value, item })
    }
    getTotalPrice = () => {
        let { cart } = this.props.cartReducer
        if (!cart || cart.length === 0)
            return 0
        else {
            let totalPrice = 0
            cart.map(item =>
                totalPrice += (item.quantity * item.price)
            )
            return totalPrice
        }
    }
    removeItem = (item) => {
        this.props.removeItemCart(item)
    }

    render() {
        let { cart } = this.props.cartReducer
        return (
            <div style={{
                padding: 40, display: 'flex',
                flexDirection: 'column', border: "1px solid #eeeeee", borderRadius: "8px", flex: 0.5, boxShadow: "1px 1px 1px #aaa"
            }}>
                {cart && cart.length === 0 ? (
                    <div style={{ display: "flex", justifyContent: 'center', flexDirection: "column", flex: 0.5 }}>
                        <h2>Cart is empty!</h2>
                        <div style={{ justifyContent: 'flex-start' }}> <Button
                            className="btn-info text-white btn-icon"><NavLink to="/">Go to Products</NavLink></Button> </div>
                    </div>
                ) :
                    null

                }
                {cart && cart.map(item =>
                    <div style={{ display: 'flex', flexDirection: 'row' }} key={item.id}>
                        <div style={{ display: 'flex', flex: .2, flexDirection: 'column', justifyContent: 'center' }}>
                            <img src={item.images} width='150' height='100' alt="itemImage" />
                            <div>
                                <h4 style={{ color: 'silver' }}>{item.name}</h4>
                                <h4>{`Price: ${item.price} LE`}</h4>
                                <hr />
                            </div>

                        </div>

                        <div style={{ display: 'flex', flex: .1, flexDirection: 'column', alignSelf: 'center' }}>
                            <Input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => this.onChangeQuantity(e.target.value, item)}
                            />
                            <hr />
                            <label style={{ fontWeight: 'bold' }}>{`Total price: ${item.quantity * item.price} LE`}</label>
                        </div>
                        <div style={{ display: 'flex', flex: .1, alignSelf: 'end', justifyContent: 'center' }}>
                            <Button value={item} onClick={() => this.props.showConfirmationDialogCart({ value: true, item })}>
                                <label style={{ color: 'red', fontSize: 20 }}>X</label>
                            </Button>
                        </div>
                        <div style={{ display: 'flex', flex: .6 }}></div>
                        {/* <br /> */}
                    </div>
                )}
                {this.getTotalPrice() !== 0 ?
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <div style={{ padding: 20 }}>
                            <label style={{ fontWeight: 'bold', fontSize: 20 }}>{`Total: ${this.getTotalPrice()} LE`}</label>
                        </div>
                        <Button style={{ border: "1px solid #aaa", backgroundColor: '#970073' }}>
                            <label style={{ color: 'white' }}>Checkout</label>
                        </Button>
                    </div>
                    :
                    null
                }
                <ConfirmationDialog
                    title="Confirmation"
                    message="Are you sure you want to remove this item?"
                    onConfirm={this.removeItem}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ cartReducer: state.cartReducer })

export default connect(mapStateToProps, { updateItemCart, removeItemCart, showConfirmationDialogCart })(Cart)