import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51JCBsWF4JALlSlqQHwoXpwQPRRwR4EpYNWta4kJkRj6drldJ3SXokPFAH3wPpHw4z74DpUu6UXZeRVEEngLy29wE001bcIl2Da';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };  

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
