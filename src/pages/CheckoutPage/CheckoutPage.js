import React, { useState , useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { formatPrice } from '../../utils/helpers';
import ShippingForm from './ShippingForm';
import PaymentForm from './PaymentForm';
import Confirmation from './Confirmation';
import { clearCart } from '../../store/cartSlice';

const CheckoutPage = () => {
  const carts = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { totalAmount } = carts;
  const [currentStep, setCurrentStep] = useState(1);
  const [shippingInfo, setShippingInfo] = useState({});
  const [paymentInfo, setPaymentInfo] = useState({});

  const handleNext = () => setCurrentStep(currentStep + 1);
  const handlePrev = () => setCurrentStep(currentStep - 1);

  useEffect(() => {
    if (currentStep === 3) {
      dispatch(clearCart());
    }
  }, [currentStep, dispatch]);

  const handleShippingSubmit = (data) => {
    setShippingInfo(data);
    handleNext();
  };

  const handlePaymentSubmit = (data) => {
    setPaymentInfo(data);
    handleNext();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <ShippingForm onSubmit={handleShippingSubmit} />;
      case 2:
        return <PaymentForm onSubmit={handlePaymentSubmit} />;
      case 3:
        return <Confirmation shippingInfo={shippingInfo} paymentInfo={paymentInfo} />;
      default:
        return null;
    }
  };

  return (
    <div className='cart bg-whitesmoke'>
      <div className='container'>
        <div className='cart-cfoot-r flex flex-column justify-end'>
          <div className='total-txt flex align-center justify-end'>
            <span className='text-orange fs-22 mx-2 fw-6'>Total Billing Amount: {formatPrice(totalAmount)}</span>
          </div>
          {renderStep()}
          {currentStep > 1 && currentStep < 3 && <button onClick={handlePrev}>Previous</button>}
          {currentStep < 3 && <button onClick={handleNext}>Next</button>}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
