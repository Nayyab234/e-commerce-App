import React from 'react';

const Confirmation = ({ shippingInfo, paymentInfo }) => {
  return (
    <div className=' bg-whitesmoke mx-2'>
      <h2 className='mb-2'>Order Confirmation</h2>
      <div>
        <strong>Shipping Information:</strong>
        <ul>
          <li>Name: {shippingInfo.firstName} {shippingInfo.lastName}</li>
          <li>Address: {shippingInfo.address}, {shippingInfo.city}, {shippingInfo.country}, {shippingInfo.postalCode}</li>
        </ul>
      </div>
      <div>
        <strong>Payment Information:</strong>
        <ul>
          <li>Card Number: {paymentInfo.cardNumber}</li>
          <li>Expiration Date: {paymentInfo.expirationDate}</li>
          <li>CVV: {paymentInfo.cvv}</li>
        </ul>
      </div>
      <h2 className='text-orange'>Thank you for your order!</h2>
    </div>
  );
};

export default Confirmation;