import React from 'react';

import CustomButoon from '../custon-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items"/>
        <CustomButoon> GO TO CHECKOUT</CustomButoon>
    </div>
)

export default CartDropdown;