import { OrderCreatedListener } from './events/listeners/order-created-listener';
// starts the express server
// and connecting to the database.

//DB

// Listeners

const start = async () => {
  try {
    await new OrderCreatedListener().listen();
  } catch (err) {
    console.error(err);
  }
};

start();
