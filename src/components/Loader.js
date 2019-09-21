import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './styles';

const Loader = () => (
    <div style={styles.loader}>
        <CircularProgress />
    </div>
)

export default Loader;
