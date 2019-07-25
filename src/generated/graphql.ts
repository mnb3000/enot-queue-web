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
  queues: Array<Queue>;
  student?: Maybe<Student>;
  students: Array<Student>;
};

export type QueryQueueArgs = {
  name: Scalars["String"];
};

export type QueryStudentArgs = {
  tgId: Scalars["Int"];
};

export type Queue = {
  __typename?: "Queue";
  id: Scalars["ID"];
  name: Scalars["String"];
  nextId: Scalars["Int"];
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
  place: Scalars["Float"];
  uniqueId: Scalars["Float"];
};

export enum Status {
  InQueue = "inQueue",
  Passed = "passed",
  Declined = "declined",
  Left = "left"
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

export type StudentUpdatePayload = {
  __typename?: "StudentUpdatePayload";
  queueName: Scalars["String"];
  place: Scalars["Float"];
  uniqueId: Scalars["Float"];
  student: Student;
};

export type Subscription = {
  __typename?: "Subscription";
  queueUpdate: Queue;
  notifyStudentPlace: StudentUpdatePayload;
};

export type SubscriptionQueueUpdateArgs = {
  queueName: Scalars["String"];
};

export type SubscriptionNotifyStudentPlaceArgs = {
  notifyPlace: Scalars["Int"];
};
export type StudentsQueryVariables = {};

export type StudentsQuery = { __typename?: "Query" } & {
  students: Array<
    { __typename?: "Student" } & Pick<Student, "tgId" | "name"> & {
        queuePlaces: Array<
          { __typename?: "QueuePlaceType" } & Pick<
            QueuePlaceType,
            "queueName" | "uniqueId" | "place"
          >
        >;
      }
  >;
};

export const StudentsDocument = gql`
  query Students {
    students {
      tgId
      name
      queuePlaces {
        queueName
        uniqueId
        place
      }
    }
  }
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
