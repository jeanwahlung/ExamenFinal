import React from 'react'
import ProductListItem from './product-list-item'
import { connect } from 'react-redux'
import fire from '../../config/Fire';
import fetchApi from '../../modules/fetch-api'

class ProductListing extends React.Component {
  componentDidMount() { 
    const { loadProducts } = this.props
    var x = fire.firestore().collection("Productos");
    x.get().then(function(querySnapshot) {
      var y = new Array();
      querySnapshot.forEach(function(doc) {
        y.push(doc.data());
        console.log(doc.id, " => ", doc.data());
      });
      console.log('y->', y);
      loadProducts(y);
    });

  }

  render() {
    const { addToCart, removeFromCart, products, cart } = this.props

    return <div className='product-listing'>
      {
        products.map(product =>
          <ProductListItem
            product={ product }
            addToCart={ addToCart }
            removeFromCart={ removeFromCart }
            cartItem={ cart.filter(cartItem => cartItem.id === product.id)[0] }
          />)
      }
    </div>
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    products: state.products,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    
    loadProducts: (products) => {
     
      dispatch({ type: 'LOAD', payload: products })
      console.log('aaa', products);
    },
    addToCart: (item) => {
      dispatch({ type: 'ADD', payload: item })
    },
    removeFromCart: (item) => {
      dispatch({ type: 'REMOVE', payload: item })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)