import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProductAction } from '../../actions'
import Loader from '../../components/Loader'
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import { addToCart, showDetailsDialog } from '../../actions'
import ItemDetailsDialog from './itemDetailsDialog'
import { NotificationManager } from 'react-notifications'
import errorPage from '../../assests/logos/404.png'

class ProductList extends Component {
    constructor(props) {
        super(props)
        this.addItemToCart = this.addItemToCart.bind(this)
    }

    componentDidMount() {
        this.props.getProductAction()
    }

    addItemToCart = (item) => {
        let { cart } = this.props.cartReducer
        let check = cart.filter(product => product.id === item.id)
        check.length > 0 ? NotificationManager.error('this item already added to the cart') : this.props.addToCart(item)
    }

    showDialog = (item) => {
        this.props.showDetailsDialog(item)
    }

    render() {
        let { products, loading } = this.props.productsReducer
        if (products && (products.message || products.error)) {
            NotificationManager.error('Fatal error, please try again later!')
            return (
                <div style={{ padding: 80, justifyContent: 'center', display: 'flex' }}>
                    <div>
                        <img src={errorPage} width='200' alt="Error" />
                    </div>
                </div>
            )
        }
        return (
            <div style={{ padding: 80 }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {products && products.data.map(product =>
                        <div style={{ padding: 40 }} key={product.id}>
                            <h1>{`${product.name} Section`}</h1>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <Grid
                                    container
                                    justify="center">
                                    {product.products.map(item =>
                                        <div style={{ padding: 20 }} key={item.id}>
                                            <div>
                                                <img src={item.images} alt="product" width="150" onClick={() => this.showDialog(item)} style={{ backgroundColor: 'white', border: "1px solid #C0C0C0", borderRadius: "5px", boxShadow: "1px 1px 1px #aaa", padding: 10 }} />
                                            </div>
                                            <div>
                                                <p style={{ fontSize: 15, color: 'silver', fontWeight: 'bold' }}>{item.name}</p>
                                                <p style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>{`${item.price} LE`}</p>
                                                {item.in_stock ?
                                                    <Button value={item} onClick={() => this.addItemToCart(item)} style={{ border: "1px solid #aaa" }}>
                                                        Add To Cart
                                                </Button> :
                                                    <p style={{ fontSize: 15, color: 'red', fontWeight: 'bold' }}>Out of stock</p>
                                                }
                                            </div>
                                        </div>
                                    )}
                                </Grid>
                            </div>
                        </div>
                    )
                    }
                </div>
                <div>
                    {
                        loading && <Loader />
                    }
                </div>
                <ItemDetailsDialog />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ productsReducer: state.productsReducer, cartReducer: state.cartReducer })


export default connect(mapStateToProps, { getProductAction, addToCart, showDetailsDialog })(ProductList)