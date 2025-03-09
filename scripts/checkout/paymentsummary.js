import {cart} from '../../data/cart.js';
import {getProduct} from '../../data/products.js';
import { getDeliveryOption } from '../../data/deliveryoptions.js';
export function renderPaymentSummary() {
  let productPrice=0;
  let shippingPrice=0;
  cart.forEach((cartItem)=> {
    const product=getProduct(cartItem.productId);
    productPrice+=product.priceCents*cartItem.quantity;

    const deliveryOption=getDeliveryOption(cartItem.deliveryOptionId);
    shippingPrice+=deliveryOption.price;
  });
  const totalBeforeTax=productPrice+shippingPrice;
  const tax=Math.floor(totalBeforeTax*0.1);
  const totalPrice=totalBeforeTax+tax;

  const paymentSummaryHTML=`
    <div class="payment-summary-title">
      Order Summary
    </div>

    <div class="payment-summary-row">
      <div>Items (3):</div>
      <div class="payment-summary-money">
      Rs.${productPrice}</div>
    </div>

    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money">
      Rs.${shippingPrice}</div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">
      Rs.${totalBeforeTax}</div>
    </div>

    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">
      Rs.${tax}</div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">
      Rs.${totalPrice}</div>
    </div>

    <button class="place-order-button button-primary">
      Place your order
    </button>`;

  document.querySelector('.js-payment-summary').innerHTML=paymentSummaryHTML;
}


