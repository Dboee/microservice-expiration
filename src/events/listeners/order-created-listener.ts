import { PartitionContext, ReceivedEventData } from '@azure/event-hubs';
import {
  Listener,
  EventHubs,
  ConsumerGroups,
  IOrderCreatedEvent,
} from '@delight-system/microservice-common';
import { expirationQueue } from '../../queues/expiration-queue';

export class OrderCreatedListener extends Listener<IOrderCreatedEvent> {
  readonly eventHubName: EventHubs.Orders = EventHubs.Orders;
  readonly consumerGroup: ConsumerGroups.OrderCreated =
    ConsumerGroups.OrderCreated;
  constructor() {
    super(EventHubs.Orders, ConsumerGroups.OrderCreated);
  }

  async onMessage(
    data: IOrderCreatedEvent['data'],
    context: PartitionContext,
    event: ReceivedEventData
  ): Promise<void> {
    console.log(this.consumerGroup, ': ', data);
    await expirationQueue.add(
      {
        orderId: data.id,
      }
      // {
      // 	delay: 1000 * 60 * 15,
      // }
    );
  }
}
