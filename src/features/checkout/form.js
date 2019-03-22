import React from 'react'
import { Field, reduxForm } from 'redux-form'

function CheckoutForm(props) {
  const { handleSubmit } = props

  return <div>
    <form onSubmit={handleSubmit}>
     
      <div>
        <button type="submit" ClassName="login-btn" onClick= {handleClick} >Submit order</button>
      </div>
    </form>
  </div>
  function handleClick() {
    alert('Compra Exitosa');

    return false;
  }
}

CheckoutForm = reduxForm({
  form: 'checkout'
})(CheckoutForm)

export default CheckoutForm
