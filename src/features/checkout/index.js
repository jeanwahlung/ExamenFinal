import React from 'react'
import { connect } from 'react-redux'

import Cart from '../cart'
import CheckoutForm from './form'
import fetchApi from '../../modules/fetch-api'

function submitOrder(values, cart) {
  console.log('aaaa')
}

function Checkout(props) {
  const { cart } = props

  return <div>
    <div style={{ border: '1px solid black' }}>
       <Cart />
    </div>

    <CheckoutForm onSubmit={(values) => submitOrder(values, cart)}/>
  </div>
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}
export default connect(mapStateToProps)(Checkout)