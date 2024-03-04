import React from 'react';
import Template from './Template.module.css';
function Minitemplate() {
  return (
       
                <div className={Template.templateContentWithData}>
                  <div className={Template.headerImageForTemplate}>
                    <img src={'/imageHeader.png'} alt="Header Image" />
                  </div>
                  <div className={Template.mainline}>
                    <span>SUMMARY</span>
                    <div>
                      <div></div>

                    </div>
                  </div>
                  <div className={Template.templateName}>
                    <b>Dr. Vihag</b>
                    <b>Jane Deo</b>
                  </div>

                  <div className={Template.templateBlackBox}>
                    <div className={Template.blackBoxHeader}>
                      <ul>
                        <li>
                          <span>Item</span>
                          <span>Rate</span>
                          <span>Quantity</span>
                          <span>Amount</span>

                        </li>
                      </ul>
                    </div>
                    <div className={Template.BoxContent}>
                      <ul>
                        <li>
                          <span>Vitamin A Night Serum</span>
                          <span>$90</span>
                          <span>2</span>
                          <span>$180</span>
                        </li>
                        <li>
                          <span>Vitamin A Night Serum</span>
                          <span>$90</span>
                          <span>2</span>
                          <span>$180</span>
                        </li>
                        <li>
                          <span>Vitamin A Night Serum</span>
                          <span>$90</span>
                          <span>2</span>
                          <span>$180</span>
                        </li>
                        <li>
                          <span>Vitamin A Night Serum</span>
                          <span>$90</span>
                          <span>2</span>
                          <span>$180</span>
                        </li>
                      </ul>            
                    </div>
                    <div className={Template.subTotal}>
                      <div>
                        <ul>
                          <li>
                            <span>Subtotal</span>
                            <span>$453</span>
                          </li> 
                          <li>
                            <span>taxt 5%</span>
                            <span>$00.000</span>
                          </li> 
                          <li>
                            <span>Discount 10%</span>
                            <span>$00.000</span>
                          </li>                                                  
                        </ul>

                      </div>
                    </div>
                    <div className={Template.totalSum}>
                        <li>
                            <span><b>Total</b></span>
                            <span><b>$540.00</b></span>
                          </li> 
                    </div>
                    <div className={Template.notes}>
                      <b>Notes/Terms</b>
                      <p>Lorem ipsum dolor ipsum dolor</p>
                    </div>
                  </div>
                </div>
           
         

  )
}

export default Minitemplate;
