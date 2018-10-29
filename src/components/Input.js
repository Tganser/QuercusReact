import React from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import { withStyles } from '@material-ui/core/styles';
//import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
//import Typography from '@material-ui/core/Typography'


const Input = () => {
    return(
        <div>
        <TextField
          id="standard-name"
          label="Name"
          value='name'
          //onChange={this.handleChange('name')}
          margin="normal"
        />
        </div>
    )
}
export default Input;
