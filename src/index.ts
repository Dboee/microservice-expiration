import { OrderCreatedListener } from './events/listeners/order-created-listener';
// starts the express server
// and connecting to the database.

//DB

// Listeners

const start = async () => {
  try {
    // await new OrderCreatedListener().listen();
    console.log('Expiration Service started');
  } catch (err) {
    console.error(err);
  }
};

start();
