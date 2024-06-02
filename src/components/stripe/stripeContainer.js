import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './checkoutForm';

const stripePromise = loadStripe("pk_test_51PKjzVED1pQeNYT0DB6zZM6Mazbu5BTVY7m5zchi5pjBoNzuh0QYShMfDg8cDXqzbak3b7fH3NzWQZITHTc7ALnf00v9rhMSjw");

const Stripe = () => {
  return (
    <div className='flex container mt-8'>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}

export default Stripe;
