import React from 'react';
import styleCenter from './styleCenter.module.css';
import PreviewInvoice from './PreviewInvoice/PreviewInvoice';
import Templates from './Templates/Templates';
function Center() {
  return (
    <div className={styleCenter.center}>
       <Templates/>
      <PreviewInvoice/>
    </div>
  )
}

export default Center;
