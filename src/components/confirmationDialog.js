import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { showConfirmationDialogCart } from '../actions'


class ConfirmationDialog extends Component {
    close = () => {
        this.props.showConfirmationDialogCart({ value: false, item: null })
    }
    render() {
        const { title, message, onConfirm } = this.props;
        return (
            <Dialog
                open={this.props.cartReducer.showConfirmationDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.close()} className="btn-danger text-white">
                        Cancel
                </Button>
                    <Button onClick={() => onConfirm(this.props.cartReducer.selectedItem)} className="btn-primary text-white" autoFocus>
                        Yes
                </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

const mapStateToProps = (state) => ({ cartReducer: state.cartReducer, productReducer: state.productReducer })

export default connect(mapStateToProps, { showConfirmationDialogCart })(ConfirmationDialog)
