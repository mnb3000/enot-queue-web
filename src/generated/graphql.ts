import gql from "graphql-tag";
import { Injectable } from "@angular/core";
import * as Apollo from "apollo-angular";
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Mutation = {
  __typename?: "Mutation";
  addQueue: Queue;
  removeStudentFromQueue: Queue;
  passQueueStudent: Queue;
  addStudent: Student;
  joinQueue: Student;
  leaveQueue: Student;
};

export type MutationAddQueueArgs = {
  queue: QueueInput;
};

export type MutationRemoveStudentFromQueueArgs = {
  studentTgId: Scalars["Int"];
  queueName: Scalars["String"];
};

export type MutationPassQueueStudentArgs = {
  isPassed: Scalars["Boolean"];
  queueName: Scalars["String"];
};

export type MutationAddStudentArgs = {
  student: StudentInput;
};

export type MutationJoinQueueArgs = {
  studentTgId: Scalars["Int"];
  queueName: Scalars["String"];
};

export type MutationLeaveQueueArgs = {
  studentTgId: Scalars["Int"];
  queueName: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  queue?: Maybe<Queue>;
  queueById?: Maybe<Queue>;
  queues: Array<Queue>;
  queueFilter: QueueUpdateFilterPayload;
  student?: Maybe<Student>;
  students: Array<Student>;
};

export type QueryQueueArgs = {
  name: Scalars["String"];
};

export type QueryQueueByIdArgs = {
  id: Scalars["String"];
};

export type QueryQueueFilterArgs = {
  filterInput: QueueUpdateFilterInput;
};

export type QueryStudentArgs = {
  tgId: Scalars["Int"];
};

export type Queue = {
  __typename?: "Queue";
  id: Scalars["ID"];
  name: Scalars["String"];
  studentToQueues: Array<StudentToQueue>;
  studentToQueuesInQueue: Array<StudentToQueue>;
  students: Array<Student>;
};

export type QueueInput = {
  name: Scalars["String"];
};

export type QueuePlaceType = {
  __typename?: "QueuePlaceType";
  queueName: Scalars["String"];
  place: Scalars["Int"];
  uniqueId: Scalars["Int"];
};

export type QueueUpdateFilterInput = {
  queueId: Scalars["String"];
  upcomingLimit: Scalars["Int"];
  historyLimit: Scalars["Int"];
};

export type QueueUpdateFilterPayload = {
  __typename?: "QueueUpdateFilterPayload";
  queueId: Scalars["ID"];
  upcomingStudentToQueues: Array<StudentToQueue>;
  historyStudentToQueues: Array<StudentToQueue>;
};

export enum Status {
  InQueue = "inQueue",
  Passed = "passed",
  Declined = "declined",
  Left = "left",
  Current = "current"
}

export type Student = {
  __typename?: "Student";
  id: Scalars["ID"];
  tgId: Scalars["Int"];
  name: Scalars["String"];
  studentToQueues: Array<StudentToQueue>;
  studentToQueuesInQueue: Array<StudentToQueue>;
  queues: Array<Queue>;
  queuePlaces: Array<QueuePlaceType>;
};

export type StudentInput = {
  name: Scalars["String"];
  tgId: Scalars["Int"];
};

export type StudentPassedPayload = {
  __typename?: "StudentPassedPayload";
  queueName: Scalars["String"];
  place: Scalars["Int"];
  uniqueId: Scalars["Int"];
  student: Student;
  passed: Scalars["Boolean"];
};

export type StudentPlaceUpdatePayload = {
  __typename?: "StudentPlaceUpdatePayload";
  queueName: Scalars["String"];
  place: Scalars["Int"];
  uniqueId: Scalars["Int"];
  student: Student;
};

export type StudentToQueue = {
  __typename?: "StudentToQueue";
  studentToQueueId: Scalars["Int"];
  studentId: Scalars["ID"];
  queueId: Scalars["ID"];
  status: Status;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  student: Student;
  queue: Queue;
};

export type Subscription = {
  __typename?: "Subscription";
  queueUpdate: Queue;
  queueUpdateFilter: QueueUpdateFilterPayload;
  notifyStudentPlace: StudentPlaceUpdatePayload;
  notifyStudentPassed: StudentPassedPayload;
};

export type SubscriptionQueueUpdateArgs = {
  id: Scalars["String"];
};

export type SubscriptionQueueUpdateFilterArgs = {
  filterInput: QueueUpdateFilterInput;
};

export type SubscriptionNotifyStudentPlaceArgs = {
  notifyPlace: Scalars["Int"];
};
export type QueueDataFragment = { __typename?: "Queue" } & Pick<
  Queue,
  "id" | "name"
>;

export type QueuePlacesDataFragment = { __typename?: "QueuePlaceType" } & Pick<
  QueuePlaceType,
  "queueName" | "place" | "uniqueId"
>;

export type StudentDataFragment = { __typename?: "Student" } & Pick<
  Student,
  "id" | "tgId" | "name"
>;

export type StudentToQueueBaseDataFragment = {
  __typename?: "StudentToQueue";
} & Pick<StudentToQueue, "studentToQueueId" | "status"> & {
    student: { __typename?: "Student" } & StudentDataFragment;
  };

export type StudentToQueueDataFragment = { __typename?: "StudentToQueue" } & {
  queue: { __typename?: "Queue" } & QueueDataFragment;
} & StudentToQueueBaseDataFragment;

export type PassStudentMutationVariables = {
  queueName: Scalars["String"];
  isPassed: Scalars["Boolean"];
};

export type PassStudentMutation = { __typename?: "Mutation" } & {
  passQueueStudent: { __typename?: "Queue" } & Pick<Queue, "id">;
};

export type QueueQueryVariables = {
  queueId: Scalars["String"];
};

export type QueueQuery = { __typename?: "Query" } & {
  queueById: Maybe<
    { __typename?: "Queue" } & {
      studentToQueuesInQueue: Array<
        { __typename?: "StudentToQueue" } & StudentToQueueBaseDataFragment
      >;
    } & QueueDataFragment
  >;
};

export type QueueFilterQueryQueryVariables = {
  queueId: Scalars["String"];
};

export type QueueFilterQueryQuery = { __typename?: "Query" } & {
  queueFilter: { __typename?: "QueueUpdateFilterPayload" } & Pick<
    QueueUpdateFilterPayload,
    "queueId"
  > & {
      upcomingStudentToQueues: Array<
        { __typename?: "StudentToQueue" } & StudentToQueueDataFragment
      >;
      historyStudentToQueues: Array<
        { __typename?: "StudentToQueue" } & StudentToQueueDataFragment
      >;
    };
};

export type QueuesQueryVariables = {};

export type QueuesQuery = { __typename?: "Query" } & {
  queues: Array<
    { __typename?: "Queue" } & {
      students: Array<{ __typename?: "Student" } & StudentDataFragment>;
    } & QueueDataFragment
  >;
};

export type StudentsQueryVariables = {};

export type StudentsQuery = { __typename?: "Query" } & {
  students: Array<
    { __typename?: "Student" } & {
      queuePlaces: Array<
        { __typename?: "QueuePlaceType" } & QueuePlacesDataFragment
      >;
    } & StudentDataFragment
  >;
};

export type QueueFilterSubscriptionVariables = {
  queueId: Scalars["String"];
};

export type QueueFilterSubscription = { __typename?: "Subscription" } & {
  queueUpdateFilter: { __typename?: "QueueUpdateFilterPayload" } & Pick<
    QueueUpdateFilterPayload,
    "queueId"
  > & {
      upcomingStudentToQueues: Array<
        { __typename?: "StudentToQueue" } & StudentToQueueDataFragment
      >;
      historyStudentToQueues: Array<
        { __typename?: "StudentToQueue" } & StudentToQueueDataFragment
      >;
    };
};

export type QueueUpdateSubscriptionVariables = {
  queueId: Scalars["String"];
};

export type QueueUpdateSubscription = { __typename?: "Subscription" } & {
  queueUpdate: { __typename?: "Queue" } & {
    studentToQueuesInQueue: Array<
      { __typename?: "StudentToQueue" } & StudentToQueueBaseDataFragment
    >;
  } & QueueDataFragment;
};
export const QueuePlacesDataFragmentDoc = gql`
  fragment QueuePlacesData on QueuePlaceType {
    queueName
    place
    uniqueId
  }
`;
export const StudentDataFragmentDoc = gql`
  fragment StudentData on Student {
    id
    tgId
    name
  }
`;
export const StudentToQueueBaseDataFragmentDoc = gql`
  fragment StudentToQueueBaseData on StudentToQueue {
    studentToQueueId
    status
    student {
      ...StudentData
    }
  }
  ${StudentDataFragmentDoc}
`;
export const QueueDataFragmentDoc = gql`
  fragment QueueData on Queue {
    id
    name
  }
`;
export const StudentToQueueDataFragmentDoc = gql`
  fragment StudentToQueueData on StudentToQueue {
    ...StudentToQueueBaseData
    queue {
      ...QueueData
    }
  }
  ${StudentToQueueBaseDataFragmentDoc}
  ${QueueDataFragmentDoc}
`;
export const PassStudentDocument = gql`
  mutation PassStudent($queueName: String!, $isPassed: Boolean!) {
    passQueueStudent(queueName: $queueName, isPassed: $isPassed) {
      id
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class PassStudentGQL extends Apollo.Mutation<
  PassStudentMutation,
  PassStudentMutationVariables
> {
  document = PassStudentDocument;
}
export const QueueDocument = gql`
  query Queue($queueId: String!) {
    queueById(id: $queueId) {
      ...QueueData
      studentToQueuesInQueue {
        ...StudentToQueueBaseData
      }
    }
  }
  ${QueueDataFragmentDoc}
  ${StudentToQueueBaseDataFragmentDoc}
`;

@Injectable({
  providedIn: "root"
})
export class QueueGQL extends Apollo.Query<QueueQuery, QueueQueryVariables> {
  document = QueueDocument;
}
export const QueueFilterQueryDocument = gql`
  query QueueFilterQuery($queueId: String!) {
    queueFilter(
      filterInput: { queueId: $queueId, upcomingLimit: 3, historyLimit: 5 }
    ) {
      queueId
      upcomingStudentToQueues {
        ...StudentToQueueData
      }
      historyStudentToQueues {
        ...StudentToQueueData
      }
    }
  }
  ${StudentToQueueDataFragmentDoc}
`;

@Injectable({
  providedIn: "root"
})
export class QueueFilterQueryGQL extends Apollo.Query<
  QueueFilterQueryQuery,
  QueueFilterQueryQueryVariables
> {
  document = QueueFilterQueryDocument;
}
export const QueuesDocument = gql`
  query Queues {
    queues {
      ...QueueData
      students {
        ...StudentData
      }
    }
  }
  ${QueueDataFragmentDoc}
  ${StudentDataFragmentDoc}
`;

@Injectable({
  providedIn: "root"
})
export class QueuesGQL extends Apollo.Query<QueuesQuery, QueuesQueryVariables> {
  document = QueuesDocument;
}
export const StudentsDocument = gql`
  query Students {
    students {
      ...StudentData
      queuePlaces {
        ...QueuePlacesData
      }
    }
  }
  ${StudentDataFragmentDoc}
  ${QueuePlacesDataFragmentDoc}
`;

@Injectable({
  providedIn: "root"
})
export class StudentsGQL extends Apollo.Query<
  StudentsQuery,
  StudentsQueryVariables
> {
  document = StudentsDocument;
}
export const QueueFilterDocument = gql`
  subscription QueueFilter($queueId: String!) {
    queueUpdateFilter(
      filterInput: { queueId: $queueId, upcomingLimit: 3, historyLimit: 5 }
    ) {
      queueId
      upcomingStudentToQueues {
        ...StudentToQueueData
      }
      historyStudentToQueues {
        ...StudentToQueueData
      }
    }
  }
  ${StudentToQueueDataFragmentDoc}
`;

@Injectable({
  providedIn: "root"
})
export class QueueFilterGQL extends Apollo.Subscription<
  QueueFilterSubscription,
  QueueFilterSubscriptionVariables
> {
  document = QueueFilterDocument;
}
export const QueueUpdateDocument = gql`
  subscription QueueUpdate($queueId: String!) {
    queueUpdate(id: $queueId) {
      ...QueueData
      studentToQueuesInQueue {
        ...StudentToQueueBaseData
      }
    }
  }
  ${QueueDataFragmentDoc}
  ${StudentToQueueBaseDataFragmentDoc}
`;

@Injectable({
  providedIn: "root"
})
export class QueueUpdateGQL extends Apollo.Subscription<
  QueueUpdateSubscription,
  QueueUpdateSubscriptionVariables
> {
  document = QueueUpdateDocument;
}
