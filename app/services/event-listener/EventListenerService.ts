class EventListenerService {
  private constructor() {}

  listener: IListener[] = [];
  static instance: EventListenerService;

  public addEventListener(event: string, callback: (params?: any) => any): string {
    const id = new Date().toISOString();
    this.listener.push({
      id,
      event,
      callback,
    });
    return id;
  }

  public removeEventListener(id: string): void {
    this.listener = this.listener.filter((l) => l.id !== id);
  }

  static getInstance(): EventListenerService {
    if (!EventListenerService.instance) {
      EventListenerService.instance = new EventListenerService();
    }
    return EventListenerService.instance;
  }
}

interface IListener {
  callback: (params?: any) => any;
  id: string;
  event: string;
}

const EventListener = EventListenerService.getInstance();

export default EventListener;
