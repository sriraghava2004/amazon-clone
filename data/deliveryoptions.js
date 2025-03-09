export const deliveryType=[{
  id:'1',
  deliveryDays:7,
  price:0
},{
  id:'2',
  deliveryDays:3,
  price:99
},{
  id: '3',
  deliveryDays:1,
  price:199
}];
export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption;
    deliveryType.forEach((option)=> {
      if (option.id===deliveryOptionId) {
        deliveryOption=option;
      }
    });
    return deliveryOption || deliveryType[0];
}
