const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryP = Object.entries(order.order.delivery);
  const deliveryAdress = Object.entries(order.address)
  console.log(`Ola ${deliveryP[0][1]}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${deliveryAdress[0][1]}, N: ${deliveryAdress[1][1]}, AP: ${deliveryAdress[2][1]}`)
};

customerInfo(order);

const orderModifier = (order) => {
  const deliveryP = Object.entries(order.order.delivery);
  
};

orderModifier(order);

