// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  snake: (where?: SnakeWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  snake: (where: SnakeWhereUniqueInput) => SnakeNullablePromise;
  snakes: (args?: {
    where?: SnakeWhereInput;
    orderBy?: SnakeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Snake>;
  snakesConnection: (args?: {
    where?: SnakeWhereInput;
    orderBy?: SnakeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => SnakeConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createSnake: (data: SnakeCreateInput) => SnakePromise;
  updateSnake: (args: {
    data: SnakeUpdateInput;
    where: SnakeWhereUniqueInput;
  }) => SnakePromise;
  updateManySnakes: (args: {
    data: SnakeUpdateManyMutationInput;
    where?: SnakeWhereInput;
  }) => BatchPayloadPromise;
  upsertSnake: (args: {
    where: SnakeWhereUniqueInput;
    create: SnakeCreateInput;
    update: SnakeUpdateInput;
  }) => SnakePromise;
  deleteSnake: (where: SnakeWhereUniqueInput) => SnakePromise;
  deleteManySnakes: (where?: SnakeWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  snake: (
    where?: SnakeSubscriptionWhereInput
  ) => SnakeSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type SnakeOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "name_ASC"
  | "name_DESC"
  | "description_ASC"
  | "description_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "firstName_ASC"
  | "firstName_DESC"
  | "lastName_ASC"
  | "lastName_DESC"
  | "email_ASC"
  | "email_DESC"
  | "username_ASC"
  | "username_DESC"
  | "password_ASC"
  | "password_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type SnakeWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface SnakeWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  description?: Maybe<String>;
  description_not?: Maybe<String>;
  description_in?: Maybe<String[] | String>;
  description_not_in?: Maybe<String[] | String>;
  description_lt?: Maybe<String>;
  description_lte?: Maybe<String>;
  description_gt?: Maybe<String>;
  description_gte?: Maybe<String>;
  description_contains?: Maybe<String>;
  description_not_contains?: Maybe<String>;
  description_starts_with?: Maybe<String>;
  description_not_starts_with?: Maybe<String>;
  description_ends_with?: Maybe<String>;
  description_not_ends_with?: Maybe<String>;
  owner?: Maybe<UserWhereInput>;
  AND?: Maybe<SnakeWhereInput[] | SnakeWhereInput>;
  OR?: Maybe<SnakeWhereInput[] | SnakeWhereInput>;
  NOT?: Maybe<SnakeWhereInput[] | SnakeWhereInput>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  firstName?: Maybe<String>;
  firstName_not?: Maybe<String>;
  firstName_in?: Maybe<String[] | String>;
  firstName_not_in?: Maybe<String[] | String>;
  firstName_lt?: Maybe<String>;
  firstName_lte?: Maybe<String>;
  firstName_gt?: Maybe<String>;
  firstName_gte?: Maybe<String>;
  firstName_contains?: Maybe<String>;
  firstName_not_contains?: Maybe<String>;
  firstName_starts_with?: Maybe<String>;
  firstName_not_starts_with?: Maybe<String>;
  firstName_ends_with?: Maybe<String>;
  firstName_not_ends_with?: Maybe<String>;
  lastName?: Maybe<String>;
  lastName_not?: Maybe<String>;
  lastName_in?: Maybe<String[] | String>;
  lastName_not_in?: Maybe<String[] | String>;
  lastName_lt?: Maybe<String>;
  lastName_lte?: Maybe<String>;
  lastName_gt?: Maybe<String>;
  lastName_gte?: Maybe<String>;
  lastName_contains?: Maybe<String>;
  lastName_not_contains?: Maybe<String>;
  lastName_starts_with?: Maybe<String>;
  lastName_not_starts_with?: Maybe<String>;
  lastName_ends_with?: Maybe<String>;
  lastName_not_ends_with?: Maybe<String>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  username?: Maybe<String>;
  username_not?: Maybe<String>;
  username_in?: Maybe<String[] | String>;
  username_not_in?: Maybe<String[] | String>;
  username_lt?: Maybe<String>;
  username_lte?: Maybe<String>;
  username_gt?: Maybe<String>;
  username_gte?: Maybe<String>;
  username_contains?: Maybe<String>;
  username_not_contains?: Maybe<String>;
  username_starts_with?: Maybe<String>;
  username_not_starts_with?: Maybe<String>;
  username_ends_with?: Maybe<String>;
  username_not_ends_with?: Maybe<String>;
  password?: Maybe<String>;
  password_not?: Maybe<String>;
  password_in?: Maybe<String[] | String>;
  password_not_in?: Maybe<String[] | String>;
  password_lt?: Maybe<String>;
  password_lte?: Maybe<String>;
  password_gt?: Maybe<String>;
  password_gte?: Maybe<String>;
  password_contains?: Maybe<String>;
  password_not_contains?: Maybe<String>;
  password_starts_with?: Maybe<String>;
  password_not_starts_with?: Maybe<String>;
  password_ends_with?: Maybe<String>;
  password_not_ends_with?: Maybe<String>;
  snakes_every?: Maybe<SnakeWhereInput>;
  snakes_some?: Maybe<SnakeWhereInput>;
  snakes_none?: Maybe<SnakeWhereInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  email?: Maybe<String>;
  username?: Maybe<String>;
}>;

export interface SnakeCreateInput {
  id?: Maybe<ID_Input>;
  name?: Maybe<String>;
  description: String;
  owner?: Maybe<UserCreateOneWithoutSnakesInput>;
}

export interface UserCreateOneWithoutSnakesInput {
  create?: Maybe<UserCreateWithoutSnakesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateWithoutSnakesInput {
  id?: Maybe<ID_Input>;
  firstName: String;
  lastName: String;
  email: String;
  username: String;
  password: String;
}

export interface SnakeUpdateInput {
  name?: Maybe<String>;
  description?: Maybe<String>;
  owner?: Maybe<UserUpdateOneWithoutSnakesInput>;
}

export interface UserUpdateOneWithoutSnakesInput {
  create?: Maybe<UserCreateWithoutSnakesInput>;
  update?: Maybe<UserUpdateWithoutSnakesDataInput>;
  upsert?: Maybe<UserUpsertWithoutSnakesInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateWithoutSnakesDataInput {
  firstName?: Maybe<String>;
  lastName?: Maybe<String>;
  email?: Maybe<String>;
  username?: Maybe<String>;
  password?: Maybe<String>;
}

export interface UserUpsertWithoutSnakesInput {
  update: UserUpdateWithoutSnakesDataInput;
  create: UserCreateWithoutSnakesInput;
}

export interface SnakeUpdateManyMutationInput {
  name?: Maybe<String>;
  description?: Maybe<String>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  firstName: String;
  lastName: String;
  email: String;
  username: String;
  password: String;
  snakes?: Maybe<SnakeCreateManyWithoutOwnerInput>;
}

export interface SnakeCreateManyWithoutOwnerInput {
  create?: Maybe<SnakeCreateWithoutOwnerInput[] | SnakeCreateWithoutOwnerInput>;
  connect?: Maybe<SnakeWhereUniqueInput[] | SnakeWhereUniqueInput>;
}

export interface SnakeCreateWithoutOwnerInput {
  id?: Maybe<ID_Input>;
  name?: Maybe<String>;
  description: String;
}

export interface UserUpdateInput {
  firstName?: Maybe<String>;
  lastName?: Maybe<String>;
  email?: Maybe<String>;
  username?: Maybe<String>;
  password?: Maybe<String>;
  snakes?: Maybe<SnakeUpdateManyWithoutOwnerInput>;
}

export interface SnakeUpdateManyWithoutOwnerInput {
  create?: Maybe<SnakeCreateWithoutOwnerInput[] | SnakeCreateWithoutOwnerInput>;
  delete?: Maybe<SnakeWhereUniqueInput[] | SnakeWhereUniqueInput>;
  connect?: Maybe<SnakeWhereUniqueInput[] | SnakeWhereUniqueInput>;
  set?: Maybe<SnakeWhereUniqueInput[] | SnakeWhereUniqueInput>;
  disconnect?: Maybe<SnakeWhereUniqueInput[] | SnakeWhereUniqueInput>;
  update?: Maybe<
    | SnakeUpdateWithWhereUniqueWithoutOwnerInput[]
    | SnakeUpdateWithWhereUniqueWithoutOwnerInput
  >;
  upsert?: Maybe<
    | SnakeUpsertWithWhereUniqueWithoutOwnerInput[]
    | SnakeUpsertWithWhereUniqueWithoutOwnerInput
  >;
  deleteMany?: Maybe<SnakeScalarWhereInput[] | SnakeScalarWhereInput>;
  updateMany?: Maybe<
    SnakeUpdateManyWithWhereNestedInput[] | SnakeUpdateManyWithWhereNestedInput
  >;
}

export interface SnakeUpdateWithWhereUniqueWithoutOwnerInput {
  where: SnakeWhereUniqueInput;
  data: SnakeUpdateWithoutOwnerDataInput;
}

export interface SnakeUpdateWithoutOwnerDataInput {
  name?: Maybe<String>;
  description?: Maybe<String>;
}

export interface SnakeUpsertWithWhereUniqueWithoutOwnerInput {
  where: SnakeWhereUniqueInput;
  update: SnakeUpdateWithoutOwnerDataInput;
  create: SnakeCreateWithoutOwnerInput;
}

export interface SnakeScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  description?: Maybe<String>;
  description_not?: Maybe<String>;
  description_in?: Maybe<String[] | String>;
  description_not_in?: Maybe<String[] | String>;
  description_lt?: Maybe<String>;
  description_lte?: Maybe<String>;
  description_gt?: Maybe<String>;
  description_gte?: Maybe<String>;
  description_contains?: Maybe<String>;
  description_not_contains?: Maybe<String>;
  description_starts_with?: Maybe<String>;
  description_not_starts_with?: Maybe<String>;
  description_ends_with?: Maybe<String>;
  description_not_ends_with?: Maybe<String>;
  AND?: Maybe<SnakeScalarWhereInput[] | SnakeScalarWhereInput>;
  OR?: Maybe<SnakeScalarWhereInput[] | SnakeScalarWhereInput>;
  NOT?: Maybe<SnakeScalarWhereInput[] | SnakeScalarWhereInput>;
}

export interface SnakeUpdateManyWithWhereNestedInput {
  where: SnakeScalarWhereInput;
  data: SnakeUpdateManyDataInput;
}

export interface SnakeUpdateManyDataInput {
  name?: Maybe<String>;
  description?: Maybe<String>;
}

export interface UserUpdateManyMutationInput {
  firstName?: Maybe<String>;
  lastName?: Maybe<String>;
  email?: Maybe<String>;
  username?: Maybe<String>;
  password?: Maybe<String>;
}

export interface SnakeSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<SnakeWhereInput>;
  AND?: Maybe<SnakeSubscriptionWhereInput[] | SnakeSubscriptionWhereInput>;
  OR?: Maybe<SnakeSubscriptionWhereInput[] | SnakeSubscriptionWhereInput>;
  NOT?: Maybe<SnakeSubscriptionWhereInput[] | SnakeSubscriptionWhereInput>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Snake {
  id: ID_Output;
  createdAt: DateTimeOutput;
  name?: String;
  description: String;
}

export interface SnakePromise extends Promise<Snake>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
  description: () => Promise<String>;
  owner: <T = UserPromise>() => T;
}

export interface SnakeSubscription
  extends Promise<AsyncIterator<Snake>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  name: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  owner: <T = UserSubscription>() => T;
}

export interface SnakeNullablePromise
  extends Promise<Snake | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
  description: () => Promise<String>;
  owner: <T = UserPromise>() => T;
}

export interface User {
  id: ID_Output;
  firstName: String;
  lastName: String;
  email: String;
  username: String;
  password: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  firstName: () => Promise<String>;
  lastName: () => Promise<String>;
  email: () => Promise<String>;
  username: () => Promise<String>;
  password: () => Promise<String>;
  snakes: <T = FragmentableArray<Snake>>(args?: {
    where?: SnakeWhereInput;
    orderBy?: SnakeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  firstName: () => Promise<AsyncIterator<String>>;
  lastName: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  username: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  snakes: <T = Promise<AsyncIterator<SnakeSubscription>>>(args?: {
    where?: SnakeWhereInput;
    orderBy?: SnakeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  firstName: () => Promise<String>;
  lastName: () => Promise<String>;
  email: () => Promise<String>;
  username: () => Promise<String>;
  password: () => Promise<String>;
  snakes: <T = FragmentableArray<Snake>>(args?: {
    where?: SnakeWhereInput;
    orderBy?: SnakeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface SnakeConnection {
  pageInfo: PageInfo;
  edges: SnakeEdge[];
}

export interface SnakeConnectionPromise
  extends Promise<SnakeConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<SnakeEdge>>() => T;
  aggregate: <T = AggregateSnakePromise>() => T;
}

export interface SnakeConnectionSubscription
  extends Promise<AsyncIterator<SnakeConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<SnakeEdgeSubscription>>>() => T;
  aggregate: <T = AggregateSnakeSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface SnakeEdge {
  node: Snake;
  cursor: String;
}

export interface SnakeEdgePromise extends Promise<SnakeEdge>, Fragmentable {
  node: <T = SnakePromise>() => T;
  cursor: () => Promise<String>;
}

export interface SnakeEdgeSubscription
  extends Promise<AsyncIterator<SnakeEdge>>,
    Fragmentable {
  node: <T = SnakeSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateSnake {
  count: Int;
}

export interface AggregateSnakePromise
  extends Promise<AggregateSnake>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateSnakeSubscription
  extends Promise<AsyncIterator<AggregateSnake>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface SnakeSubscriptionPayload {
  mutation: MutationType;
  node: Snake;
  updatedFields: String[];
  previousValues: SnakePreviousValues;
}

export interface SnakeSubscriptionPayloadPromise
  extends Promise<SnakeSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = SnakePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = SnakePreviousValuesPromise>() => T;
}

export interface SnakeSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<SnakeSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = SnakeSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = SnakePreviousValuesSubscription>() => T;
}

export interface SnakePreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  name?: String;
  description: String;
}

export interface SnakePreviousValuesPromise
  extends Promise<SnakePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
  description: () => Promise<String>;
}

export interface SnakePreviousValuesSubscription
  extends Promise<AsyncIterator<SnakePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  name: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  firstName: String;
  lastName: String;
  email: String;
  username: String;
  password: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  firstName: () => Promise<String>;
  lastName: () => Promise<String>;
  email: () => Promise<String>;
  username: () => Promise<String>;
  password: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  firstName: () => Promise<AsyncIterator<String>>;
  lastName: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  username: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Snake",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
