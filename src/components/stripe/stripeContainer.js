import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './checkoutForm';

const stripePromise = loadStripe("pk_test_51PKjzVED1pQeNYT0DB6zZM6Mazbu5BTVY7m5zchi5pjBoNzuh0QYShMfDg8cDXqzbak3b7fH3NzWQZITHTc7ALnf00v9rhMSjw");

const appearance = {
  theme: 'stripe',
  variables: {
    colorPrimary: '#0570de',
    colorBackground: '#ffffff',
    colorText: '#30313d',
    colorDanger: '#df1b41',
    fontFamily: 'Ideal Sans, system-ui, sans-serif',
    spacingUnit: '2px',
    borderRadius: '4px',
  },
};

const Stripe = () => {
  return (
    <div className='flex container mt-8'>
      <Elements stripe={stripePromise} options={{ appearance }}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}

export default Stripe;
