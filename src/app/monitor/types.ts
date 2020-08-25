interface Queue {
  id: number;
  name: string;
  active: boolean;
  createdAt: Date;
}

interface User {
  id: string;
  username?: string;
  firstName: string;
  lastName?: string;
  details?: UserDetails;
  createdAt: Date;
  updatedAt: Date;
}

interface UserDetails {
  first_name: string;
  last_name: string;
  father_name: string;
}

type Status = 'waiting' | 'processing';

interface Position {
  id: string;
  code: number;
  position: number;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
  user: User;
}

interface QueueResponse {
  queue: Queue;
  queueSize: number;
}

interface QueuesResponse {
  queues: Queue[];
}

interface PositionsResponse {
  positions: Position[];
}
