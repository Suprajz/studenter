export interface INotification {
  jobId: string;
  event: NotificationEvents;
  title: string;
  text: string;
}

export enum NotificationEvents {
  DISPATCH_OFFER = "DISPATCH_OFFER",
  DISPATCH_OFFER_UPDATED = "DISPATCH_OFFER_UPDATED",
}
