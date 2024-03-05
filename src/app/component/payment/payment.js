import React from 'react';
import setPayment from './payment.module.css';
import Innerview from './innerview';

function Payment() {
  return (
    <div className={setPayment.center}>
       <Innerview/>
      {/* <PreviewInvoice/> */}
    </div>
  )
}

export default Payment;
