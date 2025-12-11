/**
 * Client
 **/

import * as runtime from './runtime/client.js'
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Idea
 *
 */
export type Idea = $Result.DefaultSelection<Prisma.$IdeaPayload>
/**
 * Model IdeaLike
 *
 */
export type IdeaLike = $Result.DefaultSelection<Prisma.$IdeaLikePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserPermission: {
    BLOCK_IDEAS: 'BLOCK_IDEAS'
    ALL: 'ALL'
  }

  export type UserPermission = (typeof UserPermission)[keyof typeof UserPermission]
}

export type UserPermission = $Enums.UserPermission

export const UserPermission: typeof $Enums.UserPermission

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>)
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void
  ): PrismaClient

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  ): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs
      }
    >
  >

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.idea`: Exposes CRUD operations for the **Idea** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Ideas
   * const ideas = await prisma.idea.findMany()
   * ```
   */
  get idea(): Prisma.IdeaDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.ideaLike`: Exposes CRUD operations for the **IdeaLike** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more IdeaLikes
   * const ideaLikes = await prisma.ideaLike.findMany()
   * ```
   */
  get ideaLike(): Prisma.IdeaLikeDelegate<ExtArgs, ClientOptions>
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */

  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<
    ReturnType<T>
  >

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P]
  }

  export type Enumerable<T> = T | Array<T>

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  }

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } & K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (
    k: infer I
  ) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K]
  } & {}

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>
      }
    >
  >

  type Key = string | number | symbol
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never
  type AtStrict<O extends object, K extends Key> = O[K & keyof O]
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>
    0: AtLoose<O, K>
  }[strict]

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K]
      } & {}

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K]
  } & {}

  type _Record<K extends keyof any, T> = {
    [P in K]: T
  }

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B

  export const type: unique symbol

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never
      }
    : never

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> =
    IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<
    T,
    MaybeTupleToUnion<K>
  >

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>

  export const ModelName: {
    User: 'User'
    Idea: 'Idea'
    IdeaLike: 'IdeaLike'
  }

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<
    { extArgs: $Extensions.InternalArgs },
    $Utils.Record<string, any>
  > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: 'user' | 'idea' | 'ideaLike'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Idea: {
        payload: Prisma.$IdeaPayload<ExtArgs>
        fields: Prisma.IdeaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IdeaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IdeaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload>
          }
          findFirst: {
            args: Prisma.IdeaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IdeaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload>
          }
          findMany: {
            args: Prisma.IdeaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload>[]
          }
          create: {
            args: Prisma.IdeaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload>
          }
          createMany: {
            args: Prisma.IdeaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IdeaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload>[]
          }
          delete: {
            args: Prisma.IdeaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload>
          }
          update: {
            args: Prisma.IdeaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload>
          }
          deleteMany: {
            args: Prisma.IdeaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IdeaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IdeaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload>[]
          }
          upsert: {
            args: Prisma.IdeaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload>
          }
          aggregate: {
            args: Prisma.IdeaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdea>
          }
          groupBy: {
            args: Prisma.IdeaGroupByArgs<ExtArgs>
            result: $Utils.Optional<IdeaGroupByOutputType>[]
          }
          count: {
            args: Prisma.IdeaCountArgs<ExtArgs>
            result: $Utils.Optional<IdeaCountAggregateOutputType> | number
          }
        }
      }
      IdeaLike: {
        payload: Prisma.$IdeaLikePayload<ExtArgs>
        fields: Prisma.IdeaLikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IdeaLikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaLikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IdeaLikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaLikePayload>
          }
          findFirst: {
            args: Prisma.IdeaLikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaLikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IdeaLikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaLikePayload>
          }
          findMany: {
            args: Prisma.IdeaLikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaLikePayload>[]
          }
          create: {
            args: Prisma.IdeaLikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaLikePayload>
          }
          createMany: {
            args: Prisma.IdeaLikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IdeaLikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaLikePayload>[]
          }
          delete: {
            args: Prisma.IdeaLikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaLikePayload>
          }
          update: {
            args: Prisma.IdeaLikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaLikePayload>
          }
          deleteMany: {
            args: Prisma.IdeaLikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IdeaLikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IdeaLikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaLikePayload>[]
          }
          upsert: {
            args: Prisma.IdeaLikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaLikePayload>
          }
          aggregate: {
            args: Prisma.IdeaLikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdeaLike>
          }
          groupBy: {
            args: Prisma.IdeaLikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<IdeaLikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.IdeaLikeCountArgs<ExtArgs>
            result: $Utils.Optional<IdeaLikeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]]
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]]
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]]
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]]
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    idea?: IdeaOmit
    ideaLike?: IdeaLikeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never

  export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ideas: number
    ideasLikes: number
  }

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    ideas?: boolean | UserCountOutputTypeCountIdeasArgs
    ideasLikes?: boolean | UserCountOutputTypeCountIdeasLikesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIdeasArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: IdeaWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIdeasLikesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: IdeaLikeWhereInput
  }

  /**
   * Count Type IdeaCountOutputType
   */

  export type IdeaCountOutputType = {
    ideasLikes: number
  }

  export type IdeaCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    ideasLikes?: boolean | IdeaCountOutputTypeCountIdeasLikesArgs
  }

  // Custom InputTypes
  /**
   * IdeaCountOutputType without action
   */
  export type IdeaCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the IdeaCountOutputType
     */
    select?: IdeaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IdeaCountOutputType without action
   */
  export type IdeaCountOutputTypeCountIdeasLikesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: IdeaLikeWhereInput
  }

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    nick: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    nick: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nick: number
    name: number
    password: number
    createdAt: number
    permissions: number
    _all: number
  }

  export type UserMinAggregateInputType = {
    id?: true
    nick?: true
    name?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nick?: true
    name?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nick?: true
    name?: true
    password?: true
    createdAt?: true
    permissions?: true
    _all?: true
  }

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }

  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: UserWhereInput
      orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
      by: UserScalarFieldEnum[] | UserScalarFieldEnum
      having?: UserScalarWhereWithAggregatesInput
      take?: number
      skip?: number
      _count?: UserCountAggregateInputType | true
      _min?: UserMinAggregateInputType
      _max?: UserMaxAggregateInputType
    }

  export type UserGroupByOutputType = {
    id: string
    nick: string
    name: string
    password: string
    createdAt: Date
    permissions: $Enums.UserPermission[]
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>
      }
    >
  >

  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean
        nick?: boolean
        name?: boolean
        password?: boolean
        createdAt?: boolean
        permissions?: boolean
        ideas?: boolean | User$ideasArgs<ExtArgs>
        ideasLikes?: boolean | User$ideasLikesArgs<ExtArgs>
        _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
      },
      ExtArgs['result']['user']
    >

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      nick?: boolean
      name?: boolean
      password?: boolean
      createdAt?: boolean
      permissions?: boolean
    },
    ExtArgs['result']['user']
  >

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      nick?: boolean
      name?: boolean
      password?: boolean
      createdAt?: boolean
      permissions?: boolean
    },
    ExtArgs['result']['user']
  >

  export type UserSelectScalar = {
    id?: boolean
    nick?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    permissions?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      'id' | 'nick' | 'name' | 'password' | 'createdAt' | 'permissions',
      ExtArgs['result']['user']
    >
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ideas?: boolean | User$ideasArgs<ExtArgs>
    ideasLikes?: boolean | User$ideasLikesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {}
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'User'
    objects: {
      ideas: Prisma.$IdeaPayload<ExtArgs>[]
      ideasLikes: Prisma.$IdeaLikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        nick: string
        name: string
        password: string
        createdAt: Date
        permissions: $Enums.UserPermission[]
      },
      ExtArgs['result']['user']
    >
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<
    Prisma.$UserPayload,
    S
  >

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    UserFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: UserCountAggregateInputType | true
  }

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User']; meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
    >

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
    >

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    ideas<T extends User$ideasArgs<ExtArgs> = {}>(
      args?: Subset<T, User$ideasArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >
    ideasLikes<T extends User$ideasLikesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$ideasLikesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$IdeaLikePayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'String'>
    readonly nick: FieldRef<'User', 'String'>
    readonly name: FieldRef<'User', 'String'>
    readonly password: FieldRef<'User', 'String'>
    readonly createdAt: FieldRef<'User', 'DateTime'>
    readonly permissions: FieldRef<'User', 'UserPermission[]'>
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the User
       */
      select?: UserSelect<ExtArgs> | null
      /**
       * Omit specific fields from the User
       */
      omit?: UserOmit<ExtArgs> | null
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: UserInclude<ExtArgs> | null
      /**
       * Filter, which Users to fetch.
       */
      where?: UserWhereInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Users to fetch.
       */
      orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for listing Users.
       */
      cursor?: UserWhereUniqueInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Users from the position of the cursor.
       */
      take?: number
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Users.
       */
      skip?: number
      distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
    }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.ideas
   */
  export type User$ideasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
    where?: IdeaWhereInput
    orderBy?: IdeaOrderByWithRelationInput | IdeaOrderByWithRelationInput[]
    cursor?: IdeaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IdeaScalarFieldEnum | IdeaScalarFieldEnum[]
  }

  /**
   * User.ideasLikes
   */
  export type User$ideasLikesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the IdeaLike
     */
    select?: IdeaLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaLike
     */
    omit?: IdeaLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaLikeInclude<ExtArgs> | null
    where?: IdeaLikeWhereInput
    orderBy?: IdeaLikeOrderByWithRelationInput | IdeaLikeOrderByWithRelationInput[]
    cursor?: IdeaLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IdeaLikeScalarFieldEnum | IdeaLikeScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the User
       */
      select?: UserSelect<ExtArgs> | null
      /**
       * Omit specific fields from the User
       */
      omit?: UserOmit<ExtArgs> | null
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: UserInclude<ExtArgs> | null
    }

  /**
   * Model Idea
   */

  export type AggregateIdea = {
    _count: IdeaCountAggregateOutputType | null
    _avg: IdeaAvgAggregateOutputType | null
    _sum: IdeaSumAggregateOutputType | null
    _min: IdeaMinAggregateOutputType | null
    _max: IdeaMaxAggregateOutputType | null
  }

  export type IdeaAvgAggregateOutputType = {
    serialNumber: number | null
  }

  export type IdeaSumAggregateOutputType = {
    serialNumber: number | null
  }

  export type IdeaMinAggregateOutputType = {
    id: string | null
    nick: string | null
    serialNumber: number | null
    name: string | null
    description: string | null
    text: string | null
    createdAt: Date | null
    authorId: string | null
    blockedAt: Date | null
  }

  export type IdeaMaxAggregateOutputType = {
    id: string | null
    nick: string | null
    serialNumber: number | null
    name: string | null
    description: string | null
    text: string | null
    createdAt: Date | null
    authorId: string | null
    blockedAt: Date | null
  }

  export type IdeaCountAggregateOutputType = {
    id: number
    nick: number
    serialNumber: number
    name: number
    description: number
    text: number
    createdAt: number
    authorId: number
    blockedAt: number
    _all: number
  }

  export type IdeaAvgAggregateInputType = {
    serialNumber?: true
  }

  export type IdeaSumAggregateInputType = {
    serialNumber?: true
  }

  export type IdeaMinAggregateInputType = {
    id?: true
    nick?: true
    serialNumber?: true
    name?: true
    description?: true
    text?: true
    createdAt?: true
    authorId?: true
    blockedAt?: true
  }

  export type IdeaMaxAggregateInputType = {
    id?: true
    nick?: true
    serialNumber?: true
    name?: true
    description?: true
    text?: true
    createdAt?: true
    authorId?: true
    blockedAt?: true
  }

  export type IdeaCountAggregateInputType = {
    id?: true
    nick?: true
    serialNumber?: true
    name?: true
    description?: true
    text?: true
    createdAt?: true
    authorId?: true
    blockedAt?: true
    _all?: true
  }

  export type IdeaAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Idea to aggregate.
     */
    where?: IdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Ideas to fetch.
     */
    orderBy?: IdeaOrderByWithRelationInput | IdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: IdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Ideas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Ideas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Ideas
     **/
    _count?: true | IdeaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: IdeaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: IdeaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: IdeaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: IdeaMaxAggregateInputType
  }

  export type GetIdeaAggregateType<T extends IdeaAggregateArgs> = {
    [P in keyof T & keyof AggregateIdea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdea[P]>
      : GetScalarType<T[P], AggregateIdea[P]>
  }

  export type IdeaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: IdeaWhereInput
      orderBy?: IdeaOrderByWithAggregationInput | IdeaOrderByWithAggregationInput[]
      by: IdeaScalarFieldEnum[] | IdeaScalarFieldEnum
      having?: IdeaScalarWhereWithAggregatesInput
      take?: number
      skip?: number
      _count?: IdeaCountAggregateInputType | true
      _avg?: IdeaAvgAggregateInputType
      _sum?: IdeaSumAggregateInputType
      _min?: IdeaMinAggregateInputType
      _max?: IdeaMaxAggregateInputType
    }

  export type IdeaGroupByOutputType = {
    id: string
    nick: string
    serialNumber: number
    name: string
    description: string
    text: string
    createdAt: Date
    authorId: string
    blockedAt: Date | null
    _count: IdeaCountAggregateOutputType | null
    _avg: IdeaAvgAggregateOutputType | null
    _sum: IdeaSumAggregateOutputType | null
    _min: IdeaMinAggregateOutputType | null
    _max: IdeaMaxAggregateOutputType | null
  }

  type GetIdeaGroupByPayload<T extends IdeaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IdeaGroupByOutputType, T['by']> & {
        [P in keyof T & keyof IdeaGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], IdeaGroupByOutputType[P]>
          : GetScalarType<T[P], IdeaGroupByOutputType[P]>
      }
    >
  >

  export type IdeaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean
        nick?: boolean
        serialNumber?: boolean
        name?: boolean
        description?: boolean
        text?: boolean
        createdAt?: boolean
        authorId?: boolean
        blockedAt?: boolean
        author?: boolean | UserDefaultArgs<ExtArgs>
        ideasLikes?: boolean | Idea$ideasLikesArgs<ExtArgs>
        _count?: boolean | IdeaCountOutputTypeDefaultArgs<ExtArgs>
      },
      ExtArgs['result']['idea']
    >

  export type IdeaSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      nick?: boolean
      serialNumber?: boolean
      name?: boolean
      description?: boolean
      text?: boolean
      createdAt?: boolean
      authorId?: boolean
      blockedAt?: boolean
      author?: boolean | UserDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['idea']
  >

  export type IdeaSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      nick?: boolean
      serialNumber?: boolean
      name?: boolean
      description?: boolean
      text?: boolean
      createdAt?: boolean
      authorId?: boolean
      blockedAt?: boolean
      author?: boolean | UserDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['idea']
  >

  export type IdeaSelectScalar = {
    id?: boolean
    nick?: boolean
    serialNumber?: boolean
    name?: boolean
    description?: boolean
    text?: boolean
    createdAt?: boolean
    authorId?: boolean
    blockedAt?: boolean
  }

  export type IdeaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      | 'id'
      | 'nick'
      | 'serialNumber'
      | 'name'
      | 'description'
      | 'text'
      | 'createdAt'
      | 'authorId'
      | 'blockedAt',
      ExtArgs['result']['idea']
    >
  export type IdeaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    ideasLikes?: boolean | Idea$ideasLikesArgs<ExtArgs>
    _count?: boolean | IdeaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IdeaIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IdeaIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $IdeaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'Idea'
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      ideasLikes: Prisma.$IdeaLikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        nick: string
        serialNumber: number
        name: string
        description: string
        text: string
        createdAt: Date
        authorId: string
        blockedAt: Date | null
      },
      ExtArgs['result']['idea']
    >
    composites: {}
  }

  type IdeaGetPayload<S extends boolean | null | undefined | IdeaDefaultArgs> = $Result.GetResult<
    Prisma.$IdeaPayload,
    S
  >

  type IdeaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    IdeaFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: IdeaCountAggregateInputType | true
  }

  export interface IdeaDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Idea']; meta: { name: 'Idea' } }
    /**
     * Find zero or one Idea that matches the filter.
     * @param {IdeaFindUniqueArgs} args - Arguments to find a Idea
     * @example
     * // Get one Idea
     * const idea = await prisma.idea.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IdeaFindUniqueArgs>(
      args: SelectSubset<T, IdeaFindUniqueArgs<ExtArgs>>
    ): Prisma__IdeaClient<
      $Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one Idea that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IdeaFindUniqueOrThrowArgs} args - Arguments to find a Idea
     * @example
     * // Get one Idea
     * const idea = await prisma.idea.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IdeaFindUniqueOrThrowArgs>(
      args: SelectSubset<T, IdeaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__IdeaClient<
      $Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Idea that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaFindFirstArgs} args - Arguments to find a Idea
     * @example
     * // Get one Idea
     * const idea = await prisma.idea.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IdeaFindFirstArgs>(
      args?: SelectSubset<T, IdeaFindFirstArgs<ExtArgs>>
    ): Prisma__IdeaClient<
      $Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Idea that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaFindFirstOrThrowArgs} args - Arguments to find a Idea
     * @example
     * // Get one Idea
     * const idea = await prisma.idea.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IdeaFindFirstOrThrowArgs>(
      args?: SelectSubset<T, IdeaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__IdeaClient<
      $Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Ideas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ideas
     * const ideas = await prisma.idea.findMany()
     *
     * // Get first 10 Ideas
     * const ideas = await prisma.idea.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const ideaWithIdOnly = await prisma.idea.findMany({ select: { id: true } })
     *
     */
    findMany<T extends IdeaFindManyArgs>(
      args?: SelectSubset<T, IdeaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >

    /**
     * Create a Idea.
     * @param {IdeaCreateArgs} args - Arguments to create a Idea.
     * @example
     * // Create one Idea
     * const Idea = await prisma.idea.create({
     *   data: {
     *     // ... data to create a Idea
     *   }
     * })
     *
     */
    create<T extends IdeaCreateArgs>(
      args: SelectSubset<T, IdeaCreateArgs<ExtArgs>>
    ): Prisma__IdeaClient<
      $Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Ideas.
     * @param {IdeaCreateManyArgs} args - Arguments to create many Ideas.
     * @example
     * // Create many Ideas
     * const idea = await prisma.idea.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends IdeaCreateManyArgs>(
      args?: SelectSubset<T, IdeaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ideas and returns the data saved in the database.
     * @param {IdeaCreateManyAndReturnArgs} args - Arguments to create many Ideas.
     * @example
     * // Create many Ideas
     * const idea = await prisma.idea.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Ideas and only return the `id`
     * const ideaWithIdOnly = await prisma.idea.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends IdeaCreateManyAndReturnArgs>(
      args?: SelectSubset<T, IdeaCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
    >

    /**
     * Delete a Idea.
     * @param {IdeaDeleteArgs} args - Arguments to delete one Idea.
     * @example
     * // Delete one Idea
     * const Idea = await prisma.idea.delete({
     *   where: {
     *     // ... filter to delete one Idea
     *   }
     * })
     *
     */
    delete<T extends IdeaDeleteArgs>(
      args: SelectSubset<T, IdeaDeleteArgs<ExtArgs>>
    ): Prisma__IdeaClient<
      $Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one Idea.
     * @param {IdeaUpdateArgs} args - Arguments to update one Idea.
     * @example
     * // Update one Idea
     * const idea = await prisma.idea.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends IdeaUpdateArgs>(
      args: SelectSubset<T, IdeaUpdateArgs<ExtArgs>>
    ): Prisma__IdeaClient<
      $Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Ideas.
     * @param {IdeaDeleteManyArgs} args - Arguments to filter Ideas to delete.
     * @example
     * // Delete a few Ideas
     * const { count } = await prisma.idea.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends IdeaDeleteManyArgs>(
      args?: SelectSubset<T, IdeaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ideas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ideas
     * const idea = await prisma.idea.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends IdeaUpdateManyArgs>(
      args: SelectSubset<T, IdeaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ideas and returns the data updated in the database.
     * @param {IdeaUpdateManyAndReturnArgs} args - Arguments to update many Ideas.
     * @example
     * // Update many Ideas
     * const idea = await prisma.idea.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Ideas and only return the `id`
     * const ideaWithIdOnly = await prisma.idea.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends IdeaUpdateManyAndReturnArgs>(
      args: SelectSubset<T, IdeaUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
    >

    /**
     * Create or update one Idea.
     * @param {IdeaUpsertArgs} args - Arguments to update or create a Idea.
     * @example
     * // Update or create a Idea
     * const idea = await prisma.idea.upsert({
     *   create: {
     *     // ... data to create a Idea
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Idea we want to update
     *   }
     * })
     */
    upsert<T extends IdeaUpsertArgs>(
      args: SelectSubset<T, IdeaUpsertArgs<ExtArgs>>
    ): Prisma__IdeaClient<
      $Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of Ideas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaCountArgs} args - Arguments to filter Ideas to count.
     * @example
     * // Count the number of Ideas
     * const count = await prisma.idea.count({
     *   where: {
     *     // ... the filter for the Ideas we want to count
     *   }
     * })
     **/
    count<T extends IdeaCountArgs>(
      args?: Subset<T, IdeaCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IdeaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Idea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends IdeaAggregateArgs>(
      args: Subset<T, IdeaAggregateArgs>
    ): Prisma.PrismaPromise<GetIdeaAggregateType<T>>

    /**
     * Group by Idea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends IdeaGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IdeaGroupByArgs['orderBy'] }
        : { orderBy?: IdeaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, IdeaGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetIdeaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Idea model
     */
    readonly fields: IdeaFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Idea.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IdeaClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    author<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    ideasLikes<T extends Idea$ideasLikesArgs<ExtArgs> = {}>(
      args?: Subset<T, Idea$ideasLikesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$IdeaLikePayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Idea model
   */
  interface IdeaFieldRefs {
    readonly id: FieldRef<'Idea', 'String'>
    readonly nick: FieldRef<'Idea', 'String'>
    readonly serialNumber: FieldRef<'Idea', 'Int'>
    readonly name: FieldRef<'Idea', 'String'>
    readonly description: FieldRef<'Idea', 'String'>
    readonly text: FieldRef<'Idea', 'String'>
    readonly createdAt: FieldRef<'Idea', 'DateTime'>
    readonly authorId: FieldRef<'Idea', 'String'>
    readonly blockedAt: FieldRef<'Idea', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * Idea findUnique
   */
  export type IdeaFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
    /**
     * Filter, which Idea to fetch.
     */
    where: IdeaWhereUniqueInput
  }

  /**
   * Idea findUniqueOrThrow
   */
  export type IdeaFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
    /**
     * Filter, which Idea to fetch.
     */
    where: IdeaWhereUniqueInput
  }

  /**
   * Idea findFirst
   */
  export type IdeaFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
    /**
     * Filter, which Idea to fetch.
     */
    where?: IdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Ideas to fetch.
     */
    orderBy?: IdeaOrderByWithRelationInput | IdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Ideas.
     */
    cursor?: IdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Ideas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Ideas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Ideas.
     */
    distinct?: IdeaScalarFieldEnum | IdeaScalarFieldEnum[]
  }

  /**
   * Idea findFirstOrThrow
   */
  export type IdeaFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
    /**
     * Filter, which Idea to fetch.
     */
    where?: IdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Ideas to fetch.
     */
    orderBy?: IdeaOrderByWithRelationInput | IdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Ideas.
     */
    cursor?: IdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Ideas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Ideas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Ideas.
     */
    distinct?: IdeaScalarFieldEnum | IdeaScalarFieldEnum[]
  }

  /**
   * Idea findMany
   */
  export type IdeaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Idea
       */
      select?: IdeaSelect<ExtArgs> | null
      /**
       * Omit specific fields from the Idea
       */
      omit?: IdeaOmit<ExtArgs> | null
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: IdeaInclude<ExtArgs> | null
      /**
       * Filter, which Ideas to fetch.
       */
      where?: IdeaWhereInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Ideas to fetch.
       */
      orderBy?: IdeaOrderByWithRelationInput | IdeaOrderByWithRelationInput[]
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for listing Ideas.
       */
      cursor?: IdeaWhereUniqueInput
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Ideas from the position of the cursor.
       */
      take?: number
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Ideas.
       */
      skip?: number
      distinct?: IdeaScalarFieldEnum | IdeaScalarFieldEnum[]
    }

  /**
   * Idea create
   */
  export type IdeaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
    /**
     * The data needed to create a Idea.
     */
    data: XOR<IdeaCreateInput, IdeaUncheckedCreateInput>
  }

  /**
   * Idea createMany
   */
  export type IdeaCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Ideas.
     */
    data: IdeaCreateManyInput | IdeaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Idea createManyAndReturn
   */
  export type IdeaCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * The data used to create many Ideas.
     */
    data: IdeaCreateManyInput | IdeaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Idea update
   */
  export type IdeaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
    /**
     * The data needed to update a Idea.
     */
    data: XOR<IdeaUpdateInput, IdeaUncheckedUpdateInput>
    /**
     * Choose, which Idea to update.
     */
    where: IdeaWhereUniqueInput
  }

  /**
   * Idea updateMany
   */
  export type IdeaUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Ideas.
     */
    data: XOR<IdeaUpdateManyMutationInput, IdeaUncheckedUpdateManyInput>
    /**
     * Filter which Ideas to update
     */
    where?: IdeaWhereInput
    /**
     * Limit how many Ideas to update.
     */
    limit?: number
  }

  /**
   * Idea updateManyAndReturn
   */
  export type IdeaUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * The data used to update Ideas.
     */
    data: XOR<IdeaUpdateManyMutationInput, IdeaUncheckedUpdateManyInput>
    /**
     * Filter which Ideas to update
     */
    where?: IdeaWhereInput
    /**
     * Limit how many Ideas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Idea upsert
   */
  export type IdeaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
    /**
     * The filter to search for the Idea to update in case it exists.
     */
    where: IdeaWhereUniqueInput
    /**
     * In case the Idea found by the `where` argument doesn't exist, create a new Idea with this data.
     */
    create: XOR<IdeaCreateInput, IdeaUncheckedCreateInput>
    /**
     * In case the Idea was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IdeaUpdateInput, IdeaUncheckedUpdateInput>
  }

  /**
   * Idea delete
   */
  export type IdeaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
    /**
     * Filter which Idea to delete.
     */
    where: IdeaWhereUniqueInput
  }

  /**
   * Idea deleteMany
   */
  export type IdeaDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Ideas to delete
     */
    where?: IdeaWhereInput
    /**
     * Limit how many Ideas to delete.
     */
    limit?: number
  }

  /**
   * Idea.ideasLikes
   */
  export type Idea$ideasLikesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the IdeaLike
     */
    select?: IdeaLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaLike
     */
    omit?: IdeaLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaLikeInclude<ExtArgs> | null
    where?: IdeaLikeWhereInput
    orderBy?: IdeaLikeOrderByWithRelationInput | IdeaLikeOrderByWithRelationInput[]
    cursor?: IdeaLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IdeaLikeScalarFieldEnum | IdeaLikeScalarFieldEnum[]
  }

  /**
   * Idea without action
   */
  export type IdeaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Idea
       */
      select?: IdeaSelect<ExtArgs> | null
      /**
       * Omit specific fields from the Idea
       */
      omit?: IdeaOmit<ExtArgs> | null
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: IdeaInclude<ExtArgs> | null
    }

  /**
   * Model IdeaLike
   */

  export type AggregateIdeaLike = {
    _count: IdeaLikeCountAggregateOutputType | null
    _min: IdeaLikeMinAggregateOutputType | null
    _max: IdeaLikeMaxAggregateOutputType | null
  }

  export type IdeaLikeMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    ideaId: string | null
    userId: string | null
  }

  export type IdeaLikeMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    ideaId: string | null
    userId: string | null
  }

  export type IdeaLikeCountAggregateOutputType = {
    id: number
    createdAt: number
    ideaId: number
    userId: number
    _all: number
  }

  export type IdeaLikeMinAggregateInputType = {
    id?: true
    createdAt?: true
    ideaId?: true
    userId?: true
  }

  export type IdeaLikeMaxAggregateInputType = {
    id?: true
    createdAt?: true
    ideaId?: true
    userId?: true
  }

  export type IdeaLikeCountAggregateInputType = {
    id?: true
    createdAt?: true
    ideaId?: true
    userId?: true
    _all?: true
  }

  export type IdeaLikeAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which IdeaLike to aggregate.
     */
    where?: IdeaLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of IdeaLikes to fetch.
     */
    orderBy?: IdeaLikeOrderByWithRelationInput | IdeaLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: IdeaLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` IdeaLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` IdeaLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned IdeaLikes
     **/
    _count?: true | IdeaLikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: IdeaLikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: IdeaLikeMaxAggregateInputType
  }

  export type GetIdeaLikeAggregateType<T extends IdeaLikeAggregateArgs> = {
    [P in keyof T & keyof AggregateIdeaLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdeaLike[P]>
      : GetScalarType<T[P], AggregateIdeaLike[P]>
  }

  export type IdeaLikeGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: IdeaLikeWhereInput
    orderBy?: IdeaLikeOrderByWithAggregationInput | IdeaLikeOrderByWithAggregationInput[]
    by: IdeaLikeScalarFieldEnum[] | IdeaLikeScalarFieldEnum
    having?: IdeaLikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IdeaLikeCountAggregateInputType | true
    _min?: IdeaLikeMinAggregateInputType
    _max?: IdeaLikeMaxAggregateInputType
  }

  export type IdeaLikeGroupByOutputType = {
    id: string
    createdAt: Date
    ideaId: string
    userId: string
    _count: IdeaLikeCountAggregateOutputType | null
    _min: IdeaLikeMinAggregateOutputType | null
    _max: IdeaLikeMaxAggregateOutputType | null
  }

  type GetIdeaLikeGroupByPayload<T extends IdeaLikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IdeaLikeGroupByOutputType, T['by']> & {
        [P in keyof T & keyof IdeaLikeGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], IdeaLikeGroupByOutputType[P]>
          : GetScalarType<T[P], IdeaLikeGroupByOutputType[P]>
      }
    >
  >

  export type IdeaLikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean
        createdAt?: boolean
        ideaId?: boolean
        userId?: boolean
        idea?: boolean | IdeaDefaultArgs<ExtArgs>
        user?: boolean | UserDefaultArgs<ExtArgs>
      },
      ExtArgs['result']['ideaLike']
    >

  export type IdeaLikeSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      createdAt?: boolean
      ideaId?: boolean
      userId?: boolean
      idea?: boolean | IdeaDefaultArgs<ExtArgs>
      user?: boolean | UserDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['ideaLike']
  >

  export type IdeaLikeSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      createdAt?: boolean
      ideaId?: boolean
      userId?: boolean
      idea?: boolean | IdeaDefaultArgs<ExtArgs>
      user?: boolean | UserDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['ideaLike']
  >

  export type IdeaLikeSelectScalar = {
    id?: boolean
    createdAt?: boolean
    ideaId?: boolean
    userId?: boolean
  }

  export type IdeaLikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<'id' | 'createdAt' | 'ideaId' | 'userId', ExtArgs['result']['ideaLike']>
  export type IdeaLikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      idea?: boolean | IdeaDefaultArgs<ExtArgs>
      user?: boolean | UserDefaultArgs<ExtArgs>
    }
  export type IdeaLikeIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    idea?: boolean | IdeaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IdeaLikeIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    idea?: boolean | IdeaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $IdeaLikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      name: 'IdeaLike'
      objects: {
        idea: Prisma.$IdeaPayload<ExtArgs>
        user: Prisma.$UserPayload<ExtArgs>
      }
      scalars: $Extensions.GetPayloadResult<
        {
          id: string
          createdAt: Date
          ideaId: string
          userId: string
        },
        ExtArgs['result']['ideaLike']
      >
      composites: {}
    }

  type IdeaLikeGetPayload<S extends boolean | null | undefined | IdeaLikeDefaultArgs> =
    $Result.GetResult<Prisma.$IdeaLikePayload, S>

  type IdeaLikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    IdeaLikeFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: IdeaLikeCountAggregateInputType | true
  }

  export interface IdeaLikeDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IdeaLike']; meta: { name: 'IdeaLike' } }
    /**
     * Find zero or one IdeaLike that matches the filter.
     * @param {IdeaLikeFindUniqueArgs} args - Arguments to find a IdeaLike
     * @example
     * // Get one IdeaLike
     * const ideaLike = await prisma.ideaLike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IdeaLikeFindUniqueArgs>(
      args: SelectSubset<T, IdeaLikeFindUniqueArgs<ExtArgs>>
    ): Prisma__IdeaLikeClient<
      $Result.GetResult<
        Prisma.$IdeaLikePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one IdeaLike that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IdeaLikeFindUniqueOrThrowArgs} args - Arguments to find a IdeaLike
     * @example
     * // Get one IdeaLike
     * const ideaLike = await prisma.ideaLike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IdeaLikeFindUniqueOrThrowArgs>(
      args: SelectSubset<T, IdeaLikeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__IdeaLikeClient<
      $Result.GetResult<
        Prisma.$IdeaLikePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first IdeaLike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaLikeFindFirstArgs} args - Arguments to find a IdeaLike
     * @example
     * // Get one IdeaLike
     * const ideaLike = await prisma.ideaLike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IdeaLikeFindFirstArgs>(
      args?: SelectSubset<T, IdeaLikeFindFirstArgs<ExtArgs>>
    ): Prisma__IdeaLikeClient<
      $Result.GetResult<Prisma.$IdeaLikePayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first IdeaLike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaLikeFindFirstOrThrowArgs} args - Arguments to find a IdeaLike
     * @example
     * // Get one IdeaLike
     * const ideaLike = await prisma.ideaLike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IdeaLikeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, IdeaLikeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__IdeaLikeClient<
      $Result.GetResult<Prisma.$IdeaLikePayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more IdeaLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaLikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IdeaLikes
     * const ideaLikes = await prisma.ideaLike.findMany()
     *
     * // Get first 10 IdeaLikes
     * const ideaLikes = await prisma.ideaLike.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const ideaLikeWithIdOnly = await prisma.ideaLike.findMany({ select: { id: true } })
     *
     */
    findMany<T extends IdeaLikeFindManyArgs>(
      args?: SelectSubset<T, IdeaLikeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$IdeaLikePayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >

    /**
     * Create a IdeaLike.
     * @param {IdeaLikeCreateArgs} args - Arguments to create a IdeaLike.
     * @example
     * // Create one IdeaLike
     * const IdeaLike = await prisma.ideaLike.create({
     *   data: {
     *     // ... data to create a IdeaLike
     *   }
     * })
     *
     */
    create<T extends IdeaLikeCreateArgs>(
      args: SelectSubset<T, IdeaLikeCreateArgs<ExtArgs>>
    ): Prisma__IdeaLikeClient<
      $Result.GetResult<Prisma.$IdeaLikePayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many IdeaLikes.
     * @param {IdeaLikeCreateManyArgs} args - Arguments to create many IdeaLikes.
     * @example
     * // Create many IdeaLikes
     * const ideaLike = await prisma.ideaLike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends IdeaLikeCreateManyArgs>(
      args?: SelectSubset<T, IdeaLikeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IdeaLikes and returns the data saved in the database.
     * @param {IdeaLikeCreateManyAndReturnArgs} args - Arguments to create many IdeaLikes.
     * @example
     * // Create many IdeaLikes
     * const ideaLike = await prisma.ideaLike.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many IdeaLikes and only return the `id`
     * const ideaLikeWithIdOnly = await prisma.ideaLike.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends IdeaLikeCreateManyAndReturnArgs>(
      args?: SelectSubset<T, IdeaLikeCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$IdeaLikePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Delete a IdeaLike.
     * @param {IdeaLikeDeleteArgs} args - Arguments to delete one IdeaLike.
     * @example
     * // Delete one IdeaLike
     * const IdeaLike = await prisma.ideaLike.delete({
     *   where: {
     *     // ... filter to delete one IdeaLike
     *   }
     * })
     *
     */
    delete<T extends IdeaLikeDeleteArgs>(
      args: SelectSubset<T, IdeaLikeDeleteArgs<ExtArgs>>
    ): Prisma__IdeaLikeClient<
      $Result.GetResult<Prisma.$IdeaLikePayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one IdeaLike.
     * @param {IdeaLikeUpdateArgs} args - Arguments to update one IdeaLike.
     * @example
     * // Update one IdeaLike
     * const ideaLike = await prisma.ideaLike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends IdeaLikeUpdateArgs>(
      args: SelectSubset<T, IdeaLikeUpdateArgs<ExtArgs>>
    ): Prisma__IdeaLikeClient<
      $Result.GetResult<Prisma.$IdeaLikePayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more IdeaLikes.
     * @param {IdeaLikeDeleteManyArgs} args - Arguments to filter IdeaLikes to delete.
     * @example
     * // Delete a few IdeaLikes
     * const { count } = await prisma.ideaLike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends IdeaLikeDeleteManyArgs>(
      args?: SelectSubset<T, IdeaLikeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IdeaLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaLikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IdeaLikes
     * const ideaLike = await prisma.ideaLike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends IdeaLikeUpdateManyArgs>(
      args: SelectSubset<T, IdeaLikeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IdeaLikes and returns the data updated in the database.
     * @param {IdeaLikeUpdateManyAndReturnArgs} args - Arguments to update many IdeaLikes.
     * @example
     * // Update many IdeaLikes
     * const ideaLike = await prisma.ideaLike.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more IdeaLikes and only return the `id`
     * const ideaLikeWithIdOnly = await prisma.ideaLike.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends IdeaLikeUpdateManyAndReturnArgs>(
      args: SelectSubset<T, IdeaLikeUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$IdeaLikePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >

    /**
     * Create or update one IdeaLike.
     * @param {IdeaLikeUpsertArgs} args - Arguments to update or create a IdeaLike.
     * @example
     * // Update or create a IdeaLike
     * const ideaLike = await prisma.ideaLike.upsert({
     *   create: {
     *     // ... data to create a IdeaLike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IdeaLike we want to update
     *   }
     * })
     */
    upsert<T extends IdeaLikeUpsertArgs>(
      args: SelectSubset<T, IdeaLikeUpsertArgs<ExtArgs>>
    ): Prisma__IdeaLikeClient<
      $Result.GetResult<Prisma.$IdeaLikePayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of IdeaLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaLikeCountArgs} args - Arguments to filter IdeaLikes to count.
     * @example
     * // Count the number of IdeaLikes
     * const count = await prisma.ideaLike.count({
     *   where: {
     *     // ... the filter for the IdeaLikes we want to count
     *   }
     * })
     **/
    count<T extends IdeaLikeCountArgs>(
      args?: Subset<T, IdeaLikeCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IdeaLikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IdeaLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaLikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends IdeaLikeAggregateArgs>(
      args: Subset<T, IdeaLikeAggregateArgs>
    ): Prisma.PrismaPromise<GetIdeaLikeAggregateType<T>>

    /**
     * Group by IdeaLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaLikeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends IdeaLikeGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IdeaLikeGroupByArgs['orderBy'] }
        : { orderBy?: IdeaLikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, IdeaLikeGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetIdeaLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the IdeaLike model
     */
    readonly fields: IdeaLikeFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for IdeaLike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IdeaLikeClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    idea<T extends IdeaDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, IdeaDefaultArgs<ExtArgs>>
    ): Prisma__IdeaClient<
      | $Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the IdeaLike model
   */
  interface IdeaLikeFieldRefs {
    readonly id: FieldRef<'IdeaLike', 'String'>
    readonly createdAt: FieldRef<'IdeaLike', 'DateTime'>
    readonly ideaId: FieldRef<'IdeaLike', 'String'>
    readonly userId: FieldRef<'IdeaLike', 'String'>
  }

  // Custom InputTypes
  /**
   * IdeaLike findUnique
   */
  export type IdeaLikeFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the IdeaLike
     */
    select?: IdeaLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaLike
     */
    omit?: IdeaLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaLikeInclude<ExtArgs> | null
    /**
     * Filter, which IdeaLike to fetch.
     */
    where: IdeaLikeWhereUniqueInput
  }

  /**
   * IdeaLike findUniqueOrThrow
   */
  export type IdeaLikeFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the IdeaLike
     */
    select?: IdeaLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaLike
     */
    omit?: IdeaLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaLikeInclude<ExtArgs> | null
    /**
     * Filter, which IdeaLike to fetch.
     */
    where: IdeaLikeWhereUniqueInput
  }

  /**
   * IdeaLike findFirst
   */
  export type IdeaLikeFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the IdeaLike
     */
    select?: IdeaLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaLike
     */
    omit?: IdeaLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaLikeInclude<ExtArgs> | null
    /**
     * Filter, which IdeaLike to fetch.
     */
    where?: IdeaLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of IdeaLikes to fetch.
     */
    orderBy?: IdeaLikeOrderByWithRelationInput | IdeaLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for IdeaLikes.
     */
    cursor?: IdeaLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` IdeaLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` IdeaLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of IdeaLikes.
     */
    distinct?: IdeaLikeScalarFieldEnum | IdeaLikeScalarFieldEnum[]
  }

  /**
   * IdeaLike findFirstOrThrow
   */
  export type IdeaLikeFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the IdeaLike
     */
    select?: IdeaLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaLike
     */
    omit?: IdeaLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaLikeInclude<ExtArgs> | null
    /**
     * Filter, which IdeaLike to fetch.
     */
    where?: IdeaLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of IdeaLikes to fetch.
     */
    orderBy?: IdeaLikeOrderByWithRelationInput | IdeaLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for IdeaLikes.
     */
    cursor?: IdeaLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` IdeaLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` IdeaLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of IdeaLikes.
     */
    distinct?: IdeaLikeScalarFieldEnum | IdeaLikeScalarFieldEnum[]
  }

  /**
   * IdeaLike findMany
   */
  export type IdeaLikeFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the IdeaLike
     */
    select?: IdeaLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaLike
     */
    omit?: IdeaLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaLikeInclude<ExtArgs> | null
    /**
     * Filter, which IdeaLikes to fetch.
     */
    where?: IdeaLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of IdeaLikes to fetch.
     */
    orderBy?: IdeaLikeOrderByWithRelationInput | IdeaLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing IdeaLikes.
     */
    cursor?: IdeaLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` IdeaLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` IdeaLikes.
     */
    skip?: number
    distinct?: IdeaLikeScalarFieldEnum | IdeaLikeScalarFieldEnum[]
  }

  /**
   * IdeaLike create
   */
  export type IdeaLikeCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the IdeaLike
     */
    select?: IdeaLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaLike
     */
    omit?: IdeaLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaLikeInclude<ExtArgs> | null
    /**
     * The data needed to create a IdeaLike.
     */
    data: XOR<IdeaLikeCreateInput, IdeaLikeUncheckedCreateInput>
  }

  /**
   * IdeaLike createMany
   */
  export type IdeaLikeCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many IdeaLikes.
     */
    data: IdeaLikeCreateManyInput | IdeaLikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IdeaLike createManyAndReturn
   */
  export type IdeaLikeCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the IdeaLike
     */
    select?: IdeaLikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaLike
     */
    omit?: IdeaLikeOmit<ExtArgs> | null
    /**
     * The data used to create many IdeaLikes.
     */
    data: IdeaLikeCreateManyInput | IdeaLikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaLikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IdeaLike update
   */
  export type IdeaLikeUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the IdeaLike
     */
    select?: IdeaLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaLike
     */
    omit?: IdeaLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaLikeInclude<ExtArgs> | null
    /**
     * The data needed to update a IdeaLike.
     */
    data: XOR<IdeaLikeUpdateInput, IdeaLikeUncheckedUpdateInput>
    /**
     * Choose, which IdeaLike to update.
     */
    where: IdeaLikeWhereUniqueInput
  }

  /**
   * IdeaLike updateMany
   */
  export type IdeaLikeUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update IdeaLikes.
     */
    data: XOR<IdeaLikeUpdateManyMutationInput, IdeaLikeUncheckedUpdateManyInput>
    /**
     * Filter which IdeaLikes to update
     */
    where?: IdeaLikeWhereInput
    /**
     * Limit how many IdeaLikes to update.
     */
    limit?: number
  }

  /**
   * IdeaLike updateManyAndReturn
   */
  export type IdeaLikeUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the IdeaLike
     */
    select?: IdeaLikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaLike
     */
    omit?: IdeaLikeOmit<ExtArgs> | null
    /**
     * The data used to update IdeaLikes.
     */
    data: XOR<IdeaLikeUpdateManyMutationInput, IdeaLikeUncheckedUpdateManyInput>
    /**
     * Filter which IdeaLikes to update
     */
    where?: IdeaLikeWhereInput
    /**
     * Limit how many IdeaLikes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaLikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IdeaLike upsert
   */
  export type IdeaLikeUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the IdeaLike
     */
    select?: IdeaLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaLike
     */
    omit?: IdeaLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaLikeInclude<ExtArgs> | null
    /**
     * The filter to search for the IdeaLike to update in case it exists.
     */
    where: IdeaLikeWhereUniqueInput
    /**
     * In case the IdeaLike found by the `where` argument doesn't exist, create a new IdeaLike with this data.
     */
    create: XOR<IdeaLikeCreateInput, IdeaLikeUncheckedCreateInput>
    /**
     * In case the IdeaLike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IdeaLikeUpdateInput, IdeaLikeUncheckedUpdateInput>
  }

  /**
   * IdeaLike delete
   */
  export type IdeaLikeDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the IdeaLike
     */
    select?: IdeaLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaLike
     */
    omit?: IdeaLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaLikeInclude<ExtArgs> | null
    /**
     * Filter which IdeaLike to delete.
     */
    where: IdeaLikeWhereUniqueInput
  }

  /**
   * IdeaLike deleteMany
   */
  export type IdeaLikeDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which IdeaLikes to delete
     */
    where?: IdeaLikeWhereInput
    /**
     * Limit how many IdeaLikes to delete.
     */
    limit?: number
  }

  /**
   * IdeaLike without action
   */
  export type IdeaLikeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the IdeaLike
     */
    select?: IdeaLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdeaLike
     */
    omit?: IdeaLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaLikeInclude<ExtArgs> | null
  }

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted'
    ReadCommitted: 'ReadCommitted'
    RepeatableRead: 'RepeatableRead'
    Serializable: 'Serializable'
  }

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]

  export const UserScalarFieldEnum: {
    id: 'id'
    nick: 'nick'
    name: 'name'
    password: 'password'
    createdAt: 'createdAt'
    permissions: 'permissions'
  }

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]

  export const IdeaScalarFieldEnum: {
    id: 'id'
    nick: 'nick'
    serialNumber: 'serialNumber'
    name: 'name'
    description: 'description'
    text: 'text'
    createdAt: 'createdAt'
    authorId: 'authorId'
    blockedAt: 'blockedAt'
  }

  export type IdeaScalarFieldEnum = (typeof IdeaScalarFieldEnum)[keyof typeof IdeaScalarFieldEnum]

  export const IdeaLikeScalarFieldEnum: {
    id: 'id'
    createdAt: 'createdAt'
    ideaId: 'ideaId'
    userId: 'userId'
  }

  export type IdeaLikeScalarFieldEnum =
    (typeof IdeaLikeScalarFieldEnum)[keyof typeof IdeaLikeScalarFieldEnum]

  export const SortOrder: {
    asc: 'asc'
    desc: 'desc'
  }

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]

  export const QueryMode: {
    default: 'default'
    insensitive: 'insensitive'
  }

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]

  export const UserOrderByRelevanceFieldEnum: {
    id: 'id'
    nick: 'nick'
    name: 'name'
    password: 'password'
  }

  export type UserOrderByRelevanceFieldEnum =
    (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]

  export const NullsOrder: {
    first: 'first'
    last: 'last'
  }

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]

  export const IdeaOrderByRelevanceFieldEnum: {
    id: 'id'
    nick: 'nick'
    name: 'name'
    description: 'description'
    text: 'text'
    authorId: 'authorId'
  }

  export type IdeaOrderByRelevanceFieldEnum =
    (typeof IdeaOrderByRelevanceFieldEnum)[keyof typeof IdeaOrderByRelevanceFieldEnum]

  export const IdeaLikeOrderByRelevanceFieldEnum: {
    id: 'id'
    ideaId: 'ideaId'
    userId: 'userId'
  }

  export type IdeaLikeOrderByRelevanceFieldEnum =
    (typeof IdeaLikeOrderByRelevanceFieldEnum)[keyof typeof IdeaLikeOrderByRelevanceFieldEnum]

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >

  /**
   * Reference to a field of type 'UserPermission[]'
   */
  export type ListEnumUserPermissionFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'UserPermission[]'
  >

  /**
   * Reference to a field of type 'UserPermission'
   */
  export type EnumUserPermissionFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'UserPermission'
  >

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<'User'> | string
    nick?: StringFilter<'User'> | string
    name?: StringFilter<'User'> | string
    password?: StringFilter<'User'> | string
    createdAt?: DateTimeFilter<'User'> | Date | string
    permissions?: EnumUserPermissionNullableListFilter<'User'>
    ideas?: IdeaListRelationFilter
    ideasLikes?: IdeaLikeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nick?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    permissions?: SortOrder
    ideas?: IdeaOrderByRelationAggregateInput
    ideasLikes?: IdeaLikeOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      nick?: string
      AND?: UserWhereInput | UserWhereInput[]
      OR?: UserWhereInput[]
      NOT?: UserWhereInput | UserWhereInput[]
      name?: StringFilter<'User'> | string
      password?: StringFilter<'User'> | string
      createdAt?: DateTimeFilter<'User'> | Date | string
      permissions?: EnumUserPermissionNullableListFilter<'User'>
      ideas?: IdeaListRelationFilter
      ideasLikes?: IdeaLikeListRelationFilter
    },
    'id' | 'nick'
  >

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nick?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    permissions?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'User'> | string
    nick?: StringWithAggregatesFilter<'User'> | string
    name?: StringWithAggregatesFilter<'User'> | string
    password?: StringWithAggregatesFilter<'User'> | string
    createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string
    permissions?: EnumUserPermissionNullableListFilter<'User'>
  }

  export type IdeaWhereInput = {
    AND?: IdeaWhereInput | IdeaWhereInput[]
    OR?: IdeaWhereInput[]
    NOT?: IdeaWhereInput | IdeaWhereInput[]
    id?: StringFilter<'Idea'> | string
    nick?: StringFilter<'Idea'> | string
    serialNumber?: IntFilter<'Idea'> | number
    name?: StringFilter<'Idea'> | string
    description?: StringFilter<'Idea'> | string
    text?: StringFilter<'Idea'> | string
    createdAt?: DateTimeFilter<'Idea'> | Date | string
    authorId?: StringFilter<'Idea'> | string
    blockedAt?: DateTimeNullableFilter<'Idea'> | Date | string | null
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    ideasLikes?: IdeaLikeListRelationFilter
  }

  export type IdeaOrderByWithRelationInput = {
    id?: SortOrder
    nick?: SortOrder
    serialNumber?: SortOrder
    name?: SortOrder
    description?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
    blockedAt?: SortOrderInput | SortOrder
    author?: UserOrderByWithRelationInput
    ideasLikes?: IdeaLikeOrderByRelationAggregateInput
    _relevance?: IdeaOrderByRelevanceInput
  }

  export type IdeaWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      nick?: string
      serialNumber?: number
      AND?: IdeaWhereInput | IdeaWhereInput[]
      OR?: IdeaWhereInput[]
      NOT?: IdeaWhereInput | IdeaWhereInput[]
      name?: StringFilter<'Idea'> | string
      description?: StringFilter<'Idea'> | string
      text?: StringFilter<'Idea'> | string
      createdAt?: DateTimeFilter<'Idea'> | Date | string
      authorId?: StringFilter<'Idea'> | string
      blockedAt?: DateTimeNullableFilter<'Idea'> | Date | string | null
      author?: XOR<UserScalarRelationFilter, UserWhereInput>
      ideasLikes?: IdeaLikeListRelationFilter
    },
    'id' | 'nick' | 'serialNumber'
  >

  export type IdeaOrderByWithAggregationInput = {
    id?: SortOrder
    nick?: SortOrder
    serialNumber?: SortOrder
    name?: SortOrder
    description?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
    blockedAt?: SortOrderInput | SortOrder
    _count?: IdeaCountOrderByAggregateInput
    _avg?: IdeaAvgOrderByAggregateInput
    _max?: IdeaMaxOrderByAggregateInput
    _min?: IdeaMinOrderByAggregateInput
    _sum?: IdeaSumOrderByAggregateInput
  }

  export type IdeaScalarWhereWithAggregatesInput = {
    AND?: IdeaScalarWhereWithAggregatesInput | IdeaScalarWhereWithAggregatesInput[]
    OR?: IdeaScalarWhereWithAggregatesInput[]
    NOT?: IdeaScalarWhereWithAggregatesInput | IdeaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'Idea'> | string
    nick?: StringWithAggregatesFilter<'Idea'> | string
    serialNumber?: IntWithAggregatesFilter<'Idea'> | number
    name?: StringWithAggregatesFilter<'Idea'> | string
    description?: StringWithAggregatesFilter<'Idea'> | string
    text?: StringWithAggregatesFilter<'Idea'> | string
    createdAt?: DateTimeWithAggregatesFilter<'Idea'> | Date | string
    authorId?: StringWithAggregatesFilter<'Idea'> | string
    blockedAt?: DateTimeNullableWithAggregatesFilter<'Idea'> | Date | string | null
  }

  export type IdeaLikeWhereInput = {
    AND?: IdeaLikeWhereInput | IdeaLikeWhereInput[]
    OR?: IdeaLikeWhereInput[]
    NOT?: IdeaLikeWhereInput | IdeaLikeWhereInput[]
    id?: StringFilter<'IdeaLike'> | string
    createdAt?: DateTimeFilter<'IdeaLike'> | Date | string
    ideaId?: StringFilter<'IdeaLike'> | string
    userId?: StringFilter<'IdeaLike'> | string
    idea?: XOR<IdeaScalarRelationFilter, IdeaWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type IdeaLikeOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    ideaId?: SortOrder
    userId?: SortOrder
    idea?: IdeaOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: IdeaLikeOrderByRelevanceInput
  }

  export type IdeaLikeWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      ideaId_userId?: IdeaLikeIdeaIdUserIdCompoundUniqueInput
      AND?: IdeaLikeWhereInput | IdeaLikeWhereInput[]
      OR?: IdeaLikeWhereInput[]
      NOT?: IdeaLikeWhereInput | IdeaLikeWhereInput[]
      createdAt?: DateTimeFilter<'IdeaLike'> | Date | string
      ideaId?: StringFilter<'IdeaLike'> | string
      userId?: StringFilter<'IdeaLike'> | string
      idea?: XOR<IdeaScalarRelationFilter, IdeaWhereInput>
      user?: XOR<UserScalarRelationFilter, UserWhereInput>
    },
    'id' | 'ideaId_userId'
  >

  export type IdeaLikeOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    ideaId?: SortOrder
    userId?: SortOrder
    _count?: IdeaLikeCountOrderByAggregateInput
    _max?: IdeaLikeMaxOrderByAggregateInput
    _min?: IdeaLikeMinOrderByAggregateInput
  }

  export type IdeaLikeScalarWhereWithAggregatesInput = {
    AND?: IdeaLikeScalarWhereWithAggregatesInput | IdeaLikeScalarWhereWithAggregatesInput[]
    OR?: IdeaLikeScalarWhereWithAggregatesInput[]
    NOT?: IdeaLikeScalarWhereWithAggregatesInput | IdeaLikeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'IdeaLike'> | string
    createdAt?: DateTimeWithAggregatesFilter<'IdeaLike'> | Date | string
    ideaId?: StringWithAggregatesFilter<'IdeaLike'> | string
    userId?: StringWithAggregatesFilter<'IdeaLike'> | string
  }

  export type UserCreateInput = {
    id?: string
    nick: string
    name?: string
    password: string
    createdAt?: Date | string
    permissions?: UserCreatepermissionsInput | $Enums.UserPermission[]
    ideas?: IdeaCreateNestedManyWithoutAuthorInput
    ideasLikes?: IdeaLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    nick: string
    name?: string
    password: string
    createdAt?: Date | string
    permissions?: UserCreatepermissionsInput | $Enums.UserPermission[]
    ideas?: IdeaUncheckedCreateNestedManyWithoutAuthorInput
    ideasLikes?: IdeaLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nick?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: UserUpdatepermissionsInput | $Enums.UserPermission[]
    ideas?: IdeaUpdateManyWithoutAuthorNestedInput
    ideasLikes?: IdeaLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nick?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: UserUpdatepermissionsInput | $Enums.UserPermission[]
    ideas?: IdeaUncheckedUpdateManyWithoutAuthorNestedInput
    ideasLikes?: IdeaLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    nick: string
    name?: string
    password: string
    createdAt?: Date | string
    permissions?: UserCreatepermissionsInput | $Enums.UserPermission[]
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nick?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: UserUpdatepermissionsInput | $Enums.UserPermission[]
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nick?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: UserUpdatepermissionsInput | $Enums.UserPermission[]
  }

  export type IdeaCreateInput = {
    id?: string
    nick: string
    serialNumber?: number
    name: string
    description: string
    text: string
    createdAt?: Date | string
    blockedAt?: Date | string | null
    author: UserCreateNestedOneWithoutIdeasInput
    ideasLikes?: IdeaLikeCreateNestedManyWithoutIdeaInput
  }

  export type IdeaUncheckedCreateInput = {
    id?: string
    nick: string
    serialNumber?: number
    name: string
    description: string
    text: string
    createdAt?: Date | string
    authorId: string
    blockedAt?: Date | string | null
    ideasLikes?: IdeaLikeUncheckedCreateNestedManyWithoutIdeaInput
  }

  export type IdeaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nick?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: UserUpdateOneRequiredWithoutIdeasNestedInput
    ideasLikes?: IdeaLikeUpdateManyWithoutIdeaNestedInput
  }

  export type IdeaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nick?: StringFieldUpdateOperationsInput | string
    serialNumber?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    blockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ideasLikes?: IdeaLikeUncheckedUpdateManyWithoutIdeaNestedInput
  }

  export type IdeaCreateManyInput = {
    id?: string
    nick: string
    serialNumber?: number
    name: string
    description: string
    text: string
    createdAt?: Date | string
    authorId: string
    blockedAt?: Date | string | null
  }

  export type IdeaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nick?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IdeaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nick?: StringFieldUpdateOperationsInput | string
    serialNumber?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    blockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IdeaLikeCreateInput = {
    id?: string
    createdAt?: Date | string
    idea: IdeaCreateNestedOneWithoutIdeasLikesInput
    user: UserCreateNestedOneWithoutIdeasLikesInput
  }

  export type IdeaLikeUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    ideaId: string
    userId: string
  }

  export type IdeaLikeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idea?: IdeaUpdateOneRequiredWithoutIdeasLikesNestedInput
    user?: UserUpdateOneRequiredWithoutIdeasLikesNestedInput
  }

  export type IdeaLikeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ideaId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type IdeaLikeCreateManyInput = {
    id?: string
    createdAt?: Date | string
    ideaId: string
    userId: string
  }

  export type IdeaLikeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdeaLikeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ideaId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumUserPermissionNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.UserPermission[] | ListEnumUserPermissionFieldRefInput<$PrismaModel> | null
    has?: $Enums.UserPermission | EnumUserPermissionFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.UserPermission[] | ListEnumUserPermissionFieldRefInput<$PrismaModel>
    hasSome?: $Enums.UserPermission[] | ListEnumUserPermissionFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IdeaListRelationFilter = {
    every?: IdeaWhereInput
    some?: IdeaWhereInput
    none?: IdeaWhereInput
  }

  export type IdeaLikeListRelationFilter = {
    every?: IdeaLikeWhereInput
    some?: IdeaLikeWhereInput
    none?: IdeaLikeWhereInput
  }

  export type IdeaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IdeaLikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nick?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    permissions?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nick?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nick?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type IdeaOrderByRelevanceInput = {
    fields: IdeaOrderByRelevanceFieldEnum | IdeaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type IdeaCountOrderByAggregateInput = {
    id?: SortOrder
    nick?: SortOrder
    serialNumber?: SortOrder
    name?: SortOrder
    description?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
    blockedAt?: SortOrder
  }

  export type IdeaAvgOrderByAggregateInput = {
    serialNumber?: SortOrder
  }

  export type IdeaMaxOrderByAggregateInput = {
    id?: SortOrder
    nick?: SortOrder
    serialNumber?: SortOrder
    name?: SortOrder
    description?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
    blockedAt?: SortOrder
  }

  export type IdeaMinOrderByAggregateInput = {
    id?: SortOrder
    nick?: SortOrder
    serialNumber?: SortOrder
    name?: SortOrder
    description?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
    blockedAt?: SortOrder
  }

  export type IdeaSumOrderByAggregateInput = {
    serialNumber?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IdeaScalarRelationFilter = {
    is?: IdeaWhereInput
    isNot?: IdeaWhereInput
  }

  export type IdeaLikeOrderByRelevanceInput = {
    fields: IdeaLikeOrderByRelevanceFieldEnum | IdeaLikeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type IdeaLikeIdeaIdUserIdCompoundUniqueInput = {
    ideaId: string
    userId: string
  }

  export type IdeaLikeCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    ideaId?: SortOrder
    userId?: SortOrder
  }

  export type IdeaLikeMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    ideaId?: SortOrder
    userId?: SortOrder
  }

  export type IdeaLikeMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    ideaId?: SortOrder
    userId?: SortOrder
  }

  export type UserCreatepermissionsInput = {
    set: $Enums.UserPermission[]
  }

  export type IdeaCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<IdeaCreateWithoutAuthorInput, IdeaUncheckedCreateWithoutAuthorInput>
      | IdeaCreateWithoutAuthorInput[]
      | IdeaUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?:
      | IdeaCreateOrConnectWithoutAuthorInput
      | IdeaCreateOrConnectWithoutAuthorInput[]
    createMany?: IdeaCreateManyAuthorInputEnvelope
    connect?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
  }

  export type IdeaLikeCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<IdeaLikeCreateWithoutUserInput, IdeaLikeUncheckedCreateWithoutUserInput>
      | IdeaLikeCreateWithoutUserInput[]
      | IdeaLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | IdeaLikeCreateOrConnectWithoutUserInput
      | IdeaLikeCreateOrConnectWithoutUserInput[]
    createMany?: IdeaLikeCreateManyUserInputEnvelope
    connect?: IdeaLikeWhereUniqueInput | IdeaLikeWhereUniqueInput[]
  }

  export type IdeaUncheckedCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<IdeaCreateWithoutAuthorInput, IdeaUncheckedCreateWithoutAuthorInput>
      | IdeaCreateWithoutAuthorInput[]
      | IdeaUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?:
      | IdeaCreateOrConnectWithoutAuthorInput
      | IdeaCreateOrConnectWithoutAuthorInput[]
    createMany?: IdeaCreateManyAuthorInputEnvelope
    connect?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
  }

  export type IdeaLikeUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<IdeaLikeCreateWithoutUserInput, IdeaLikeUncheckedCreateWithoutUserInput>
      | IdeaLikeCreateWithoutUserInput[]
      | IdeaLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | IdeaLikeCreateOrConnectWithoutUserInput
      | IdeaLikeCreateOrConnectWithoutUserInput[]
    createMany?: IdeaLikeCreateManyUserInputEnvelope
    connect?: IdeaLikeWhereUniqueInput | IdeaLikeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdatepermissionsInput = {
    set?: $Enums.UserPermission[]
    push?: $Enums.UserPermission | $Enums.UserPermission[]
  }

  export type IdeaUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<IdeaCreateWithoutAuthorInput, IdeaUncheckedCreateWithoutAuthorInput>
      | IdeaCreateWithoutAuthorInput[]
      | IdeaUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?:
      | IdeaCreateOrConnectWithoutAuthorInput
      | IdeaCreateOrConnectWithoutAuthorInput[]
    upsert?:
      | IdeaUpsertWithWhereUniqueWithoutAuthorInput
      | IdeaUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: IdeaCreateManyAuthorInputEnvelope
    set?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
    disconnect?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
    delete?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
    connect?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
    update?:
      | IdeaUpdateWithWhereUniqueWithoutAuthorInput
      | IdeaUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?:
      | IdeaUpdateManyWithWhereWithoutAuthorInput
      | IdeaUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: IdeaScalarWhereInput | IdeaScalarWhereInput[]
  }

  export type IdeaLikeUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<IdeaLikeCreateWithoutUserInput, IdeaLikeUncheckedCreateWithoutUserInput>
      | IdeaLikeCreateWithoutUserInput[]
      | IdeaLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | IdeaLikeCreateOrConnectWithoutUserInput
      | IdeaLikeCreateOrConnectWithoutUserInput[]
    upsert?:
      | IdeaLikeUpsertWithWhereUniqueWithoutUserInput
      | IdeaLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IdeaLikeCreateManyUserInputEnvelope
    set?: IdeaLikeWhereUniqueInput | IdeaLikeWhereUniqueInput[]
    disconnect?: IdeaLikeWhereUniqueInput | IdeaLikeWhereUniqueInput[]
    delete?: IdeaLikeWhereUniqueInput | IdeaLikeWhereUniqueInput[]
    connect?: IdeaLikeWhereUniqueInput | IdeaLikeWhereUniqueInput[]
    update?:
      | IdeaLikeUpdateWithWhereUniqueWithoutUserInput
      | IdeaLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?:
      | IdeaLikeUpdateManyWithWhereWithoutUserInput
      | IdeaLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IdeaLikeScalarWhereInput | IdeaLikeScalarWhereInput[]
  }

  export type IdeaUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<IdeaCreateWithoutAuthorInput, IdeaUncheckedCreateWithoutAuthorInput>
      | IdeaCreateWithoutAuthorInput[]
      | IdeaUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?:
      | IdeaCreateOrConnectWithoutAuthorInput
      | IdeaCreateOrConnectWithoutAuthorInput[]
    upsert?:
      | IdeaUpsertWithWhereUniqueWithoutAuthorInput
      | IdeaUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: IdeaCreateManyAuthorInputEnvelope
    set?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
    disconnect?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
    delete?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
    connect?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
    update?:
      | IdeaUpdateWithWhereUniqueWithoutAuthorInput
      | IdeaUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?:
      | IdeaUpdateManyWithWhereWithoutAuthorInput
      | IdeaUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: IdeaScalarWhereInput | IdeaScalarWhereInput[]
  }

  export type IdeaLikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<IdeaLikeCreateWithoutUserInput, IdeaLikeUncheckedCreateWithoutUserInput>
      | IdeaLikeCreateWithoutUserInput[]
      | IdeaLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | IdeaLikeCreateOrConnectWithoutUserInput
      | IdeaLikeCreateOrConnectWithoutUserInput[]
    upsert?:
      | IdeaLikeUpsertWithWhereUniqueWithoutUserInput
      | IdeaLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IdeaLikeCreateManyUserInputEnvelope
    set?: IdeaLikeWhereUniqueInput | IdeaLikeWhereUniqueInput[]
    disconnect?: IdeaLikeWhereUniqueInput | IdeaLikeWhereUniqueInput[]
    delete?: IdeaLikeWhereUniqueInput | IdeaLikeWhereUniqueInput[]
    connect?: IdeaLikeWhereUniqueInput | IdeaLikeWhereUniqueInput[]
    update?:
      | IdeaLikeUpdateWithWhereUniqueWithoutUserInput
      | IdeaLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?:
      | IdeaLikeUpdateManyWithWhereWithoutUserInput
      | IdeaLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IdeaLikeScalarWhereInput | IdeaLikeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutIdeasInput = {
    create?: XOR<UserCreateWithoutIdeasInput, UserUncheckedCreateWithoutIdeasInput>
    connectOrCreate?: UserCreateOrConnectWithoutIdeasInput
    connect?: UserWhereUniqueInput
  }

  export type IdeaLikeCreateNestedManyWithoutIdeaInput = {
    create?:
      | XOR<IdeaLikeCreateWithoutIdeaInput, IdeaLikeUncheckedCreateWithoutIdeaInput>
      | IdeaLikeCreateWithoutIdeaInput[]
      | IdeaLikeUncheckedCreateWithoutIdeaInput[]
    connectOrCreate?:
      | IdeaLikeCreateOrConnectWithoutIdeaInput
      | IdeaLikeCreateOrConnectWithoutIdeaInput[]
    createMany?: IdeaLikeCreateManyIdeaInputEnvelope
    connect?: IdeaLikeWhereUniqueInput | IdeaLikeWhereUniqueInput[]
  }

  export type IdeaLikeUncheckedCreateNestedManyWithoutIdeaInput = {
    create?:
      | XOR<IdeaLikeCreateWithoutIdeaInput, IdeaLikeUncheckedCreateWithoutIdeaInput>
      | IdeaLikeCreateWithoutIdeaInput[]
      | IdeaLikeUncheckedCreateWithoutIdeaInput[]
    connectOrCreate?:
      | IdeaLikeCreateOrConnectWithoutIdeaInput
      | IdeaLikeCreateOrConnectWithoutIdeaInput[]
    createMany?: IdeaLikeCreateManyIdeaInputEnvelope
    connect?: IdeaLikeWhereUniqueInput | IdeaLikeWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutIdeasNestedInput = {
    create?: XOR<UserCreateWithoutIdeasInput, UserUncheckedCreateWithoutIdeasInput>
    connectOrCreate?: UserCreateOrConnectWithoutIdeasInput
    upsert?: UserUpsertWithoutIdeasInput
    connect?: UserWhereUniqueInput
    update?: XOR<
      XOR<UserUpdateToOneWithWhereWithoutIdeasInput, UserUpdateWithoutIdeasInput>,
      UserUncheckedUpdateWithoutIdeasInput
    >
  }

  export type IdeaLikeUpdateManyWithoutIdeaNestedInput = {
    create?:
      | XOR<IdeaLikeCreateWithoutIdeaInput, IdeaLikeUncheckedCreateWithoutIdeaInput>
      | IdeaLikeCreateWithoutIdeaInput[]
      | IdeaLikeUncheckedCreateWithoutIdeaInput[]
    connectOrCreate?:
      | IdeaLikeCreateOrConnectWithoutIdeaInput
      | IdeaLikeCreateOrConnectWithoutIdeaInput[]
    upsert?:
      | IdeaLikeUpsertWithWhereUniqueWithoutIdeaInput
      | IdeaLikeUpsertWithWhereUniqueWithoutIdeaInput[]
    createMany?: IdeaLikeCreateManyIdeaInputEnvelope
    set?: IdeaLikeWhereUniqueInput | IdeaLikeWhereUniqueInput[]
    disconnect?: IdeaLikeWhereUniqueInput | IdeaLikeWhereUniqueInput[]
    delete?: IdeaLikeWhereUniqueInput | IdeaLikeWhereUniqueInput[]
    connect?: IdeaLikeWhereUniqueInput | IdeaLikeWhereUniqueInput[]
    update?:
      | IdeaLikeUpdateWithWhereUniqueWithoutIdeaInput
      | IdeaLikeUpdateWithWhereUniqueWithoutIdeaInput[]
    updateMany?:
      | IdeaLikeUpdateManyWithWhereWithoutIdeaInput
      | IdeaLikeUpdateManyWithWhereWithoutIdeaInput[]
    deleteMany?: IdeaLikeScalarWhereInput | IdeaLikeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IdeaLikeUncheckedUpdateManyWithoutIdeaNestedInput = {
    create?:
      | XOR<IdeaLikeCreateWithoutIdeaInput, IdeaLikeUncheckedCreateWithoutIdeaInput>
      | IdeaLikeCreateWithoutIdeaInput[]
      | IdeaLikeUncheckedCreateWithoutIdeaInput[]
    connectOrCreate?:
      | IdeaLikeCreateOrConnectWithoutIdeaInput
      | IdeaLikeCreateOrConnectWithoutIdeaInput[]
    upsert?:
      | IdeaLikeUpsertWithWhereUniqueWithoutIdeaInput
      | IdeaLikeUpsertWithWhereUniqueWithoutIdeaInput[]
    createMany?: IdeaLikeCreateManyIdeaInputEnvelope
    set?: IdeaLikeWhereUniqueInput | IdeaLikeWhereUniqueInput[]
    disconnect?: IdeaLikeWhereUniqueInput | IdeaLikeWhereUniqueInput[]
    delete?: IdeaLikeWhereUniqueInput | IdeaLikeWhereUniqueInput[]
    connect?: IdeaLikeWhereUniqueInput | IdeaLikeWhereUniqueInput[]
    update?:
      | IdeaLikeUpdateWithWhereUniqueWithoutIdeaInput
      | IdeaLikeUpdateWithWhereUniqueWithoutIdeaInput[]
    updateMany?:
      | IdeaLikeUpdateManyWithWhereWithoutIdeaInput
      | IdeaLikeUpdateManyWithWhereWithoutIdeaInput[]
    deleteMany?: IdeaLikeScalarWhereInput | IdeaLikeScalarWhereInput[]
  }

  export type IdeaCreateNestedOneWithoutIdeasLikesInput = {
    create?: XOR<IdeaCreateWithoutIdeasLikesInput, IdeaUncheckedCreateWithoutIdeasLikesInput>
    connectOrCreate?: IdeaCreateOrConnectWithoutIdeasLikesInput
    connect?: IdeaWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutIdeasLikesInput = {
    create?: XOR<UserCreateWithoutIdeasLikesInput, UserUncheckedCreateWithoutIdeasLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutIdeasLikesInput
    connect?: UserWhereUniqueInput
  }

  export type IdeaUpdateOneRequiredWithoutIdeasLikesNestedInput = {
    create?: XOR<IdeaCreateWithoutIdeasLikesInput, IdeaUncheckedCreateWithoutIdeasLikesInput>
    connectOrCreate?: IdeaCreateOrConnectWithoutIdeasLikesInput
    upsert?: IdeaUpsertWithoutIdeasLikesInput
    connect?: IdeaWhereUniqueInput
    update?: XOR<
      XOR<IdeaUpdateToOneWithWhereWithoutIdeasLikesInput, IdeaUpdateWithoutIdeasLikesInput>,
      IdeaUncheckedUpdateWithoutIdeasLikesInput
    >
  }

  export type UserUpdateOneRequiredWithoutIdeasLikesNestedInput = {
    create?: XOR<UserCreateWithoutIdeasLikesInput, UserUncheckedCreateWithoutIdeasLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutIdeasLikesInput
    upsert?: UserUpsertWithoutIdeasLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<
      XOR<UserUpdateToOneWithWhereWithoutIdeasLikesInput, UserUpdateWithoutIdeasLikesInput>,
      UserUncheckedUpdateWithoutIdeasLikesInput
    >
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type IdeaCreateWithoutAuthorInput = {
    id?: string
    nick: string
    serialNumber?: number
    name: string
    description: string
    text: string
    createdAt?: Date | string
    blockedAt?: Date | string | null
    ideasLikes?: IdeaLikeCreateNestedManyWithoutIdeaInput
  }

  export type IdeaUncheckedCreateWithoutAuthorInput = {
    id?: string
    nick: string
    serialNumber?: number
    name: string
    description: string
    text: string
    createdAt?: Date | string
    blockedAt?: Date | string | null
    ideasLikes?: IdeaLikeUncheckedCreateNestedManyWithoutIdeaInput
  }

  export type IdeaCreateOrConnectWithoutAuthorInput = {
    where: IdeaWhereUniqueInput
    create: XOR<IdeaCreateWithoutAuthorInput, IdeaUncheckedCreateWithoutAuthorInput>
  }

  export type IdeaCreateManyAuthorInputEnvelope = {
    data: IdeaCreateManyAuthorInput | IdeaCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type IdeaLikeCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    idea: IdeaCreateNestedOneWithoutIdeasLikesInput
  }

  export type IdeaLikeUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    ideaId: string
  }

  export type IdeaLikeCreateOrConnectWithoutUserInput = {
    where: IdeaLikeWhereUniqueInput
    create: XOR<IdeaLikeCreateWithoutUserInput, IdeaLikeUncheckedCreateWithoutUserInput>
  }

  export type IdeaLikeCreateManyUserInputEnvelope = {
    data: IdeaLikeCreateManyUserInput | IdeaLikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type IdeaUpsertWithWhereUniqueWithoutAuthorInput = {
    where: IdeaWhereUniqueInput
    update: XOR<IdeaUpdateWithoutAuthorInput, IdeaUncheckedUpdateWithoutAuthorInput>
    create: XOR<IdeaCreateWithoutAuthorInput, IdeaUncheckedCreateWithoutAuthorInput>
  }

  export type IdeaUpdateWithWhereUniqueWithoutAuthorInput = {
    where: IdeaWhereUniqueInput
    data: XOR<IdeaUpdateWithoutAuthorInput, IdeaUncheckedUpdateWithoutAuthorInput>
  }

  export type IdeaUpdateManyWithWhereWithoutAuthorInput = {
    where: IdeaScalarWhereInput
    data: XOR<IdeaUpdateManyMutationInput, IdeaUncheckedUpdateManyWithoutAuthorInput>
  }

  export type IdeaScalarWhereInput = {
    AND?: IdeaScalarWhereInput | IdeaScalarWhereInput[]
    OR?: IdeaScalarWhereInput[]
    NOT?: IdeaScalarWhereInput | IdeaScalarWhereInput[]
    id?: StringFilter<'Idea'> | string
    nick?: StringFilter<'Idea'> | string
    serialNumber?: IntFilter<'Idea'> | number
    name?: StringFilter<'Idea'> | string
    description?: StringFilter<'Idea'> | string
    text?: StringFilter<'Idea'> | string
    createdAt?: DateTimeFilter<'Idea'> | Date | string
    authorId?: StringFilter<'Idea'> | string
    blockedAt?: DateTimeNullableFilter<'Idea'> | Date | string | null
  }

  export type IdeaLikeUpsertWithWhereUniqueWithoutUserInput = {
    where: IdeaLikeWhereUniqueInput
    update: XOR<IdeaLikeUpdateWithoutUserInput, IdeaLikeUncheckedUpdateWithoutUserInput>
    create: XOR<IdeaLikeCreateWithoutUserInput, IdeaLikeUncheckedCreateWithoutUserInput>
  }

  export type IdeaLikeUpdateWithWhereUniqueWithoutUserInput = {
    where: IdeaLikeWhereUniqueInput
    data: XOR<IdeaLikeUpdateWithoutUserInput, IdeaLikeUncheckedUpdateWithoutUserInput>
  }

  export type IdeaLikeUpdateManyWithWhereWithoutUserInput = {
    where: IdeaLikeScalarWhereInput
    data: XOR<IdeaLikeUpdateManyMutationInput, IdeaLikeUncheckedUpdateManyWithoutUserInput>
  }

  export type IdeaLikeScalarWhereInput = {
    AND?: IdeaLikeScalarWhereInput | IdeaLikeScalarWhereInput[]
    OR?: IdeaLikeScalarWhereInput[]
    NOT?: IdeaLikeScalarWhereInput | IdeaLikeScalarWhereInput[]
    id?: StringFilter<'IdeaLike'> | string
    createdAt?: DateTimeFilter<'IdeaLike'> | Date | string
    ideaId?: StringFilter<'IdeaLike'> | string
    userId?: StringFilter<'IdeaLike'> | string
  }

  export type UserCreateWithoutIdeasInput = {
    id?: string
    nick: string
    name?: string
    password: string
    createdAt?: Date | string
    permissions?: UserCreatepermissionsInput | $Enums.UserPermission[]
    ideasLikes?: IdeaLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutIdeasInput = {
    id?: string
    nick: string
    name?: string
    password: string
    createdAt?: Date | string
    permissions?: UserCreatepermissionsInput | $Enums.UserPermission[]
    ideasLikes?: IdeaLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutIdeasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIdeasInput, UserUncheckedCreateWithoutIdeasInput>
  }

  export type IdeaLikeCreateWithoutIdeaInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutIdeasLikesInput
  }

  export type IdeaLikeUncheckedCreateWithoutIdeaInput = {
    id?: string
    createdAt?: Date | string
    userId: string
  }

  export type IdeaLikeCreateOrConnectWithoutIdeaInput = {
    where: IdeaLikeWhereUniqueInput
    create: XOR<IdeaLikeCreateWithoutIdeaInput, IdeaLikeUncheckedCreateWithoutIdeaInput>
  }

  export type IdeaLikeCreateManyIdeaInputEnvelope = {
    data: IdeaLikeCreateManyIdeaInput | IdeaLikeCreateManyIdeaInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutIdeasInput = {
    update: XOR<UserUpdateWithoutIdeasInput, UserUncheckedUpdateWithoutIdeasInput>
    create: XOR<UserCreateWithoutIdeasInput, UserUncheckedCreateWithoutIdeasInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIdeasInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIdeasInput, UserUncheckedUpdateWithoutIdeasInput>
  }

  export type UserUpdateWithoutIdeasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nick?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: UserUpdatepermissionsInput | $Enums.UserPermission[]
    ideasLikes?: IdeaLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutIdeasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nick?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: UserUpdatepermissionsInput | $Enums.UserPermission[]
    ideasLikes?: IdeaLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type IdeaLikeUpsertWithWhereUniqueWithoutIdeaInput = {
    where: IdeaLikeWhereUniqueInput
    update: XOR<IdeaLikeUpdateWithoutIdeaInput, IdeaLikeUncheckedUpdateWithoutIdeaInput>
    create: XOR<IdeaLikeCreateWithoutIdeaInput, IdeaLikeUncheckedCreateWithoutIdeaInput>
  }

  export type IdeaLikeUpdateWithWhereUniqueWithoutIdeaInput = {
    where: IdeaLikeWhereUniqueInput
    data: XOR<IdeaLikeUpdateWithoutIdeaInput, IdeaLikeUncheckedUpdateWithoutIdeaInput>
  }

  export type IdeaLikeUpdateManyWithWhereWithoutIdeaInput = {
    where: IdeaLikeScalarWhereInput
    data: XOR<IdeaLikeUpdateManyMutationInput, IdeaLikeUncheckedUpdateManyWithoutIdeaInput>
  }

  export type IdeaCreateWithoutIdeasLikesInput = {
    id?: string
    nick: string
    serialNumber?: number
    name: string
    description: string
    text: string
    createdAt?: Date | string
    blockedAt?: Date | string | null
    author: UserCreateNestedOneWithoutIdeasInput
  }

  export type IdeaUncheckedCreateWithoutIdeasLikesInput = {
    id?: string
    nick: string
    serialNumber?: number
    name: string
    description: string
    text: string
    createdAt?: Date | string
    authorId: string
    blockedAt?: Date | string | null
  }

  export type IdeaCreateOrConnectWithoutIdeasLikesInput = {
    where: IdeaWhereUniqueInput
    create: XOR<IdeaCreateWithoutIdeasLikesInput, IdeaUncheckedCreateWithoutIdeasLikesInput>
  }

  export type UserCreateWithoutIdeasLikesInput = {
    id?: string
    nick: string
    name?: string
    password: string
    createdAt?: Date | string
    permissions?: UserCreatepermissionsInput | $Enums.UserPermission[]
    ideas?: IdeaCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutIdeasLikesInput = {
    id?: string
    nick: string
    name?: string
    password: string
    createdAt?: Date | string
    permissions?: UserCreatepermissionsInput | $Enums.UserPermission[]
    ideas?: IdeaUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutIdeasLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIdeasLikesInput, UserUncheckedCreateWithoutIdeasLikesInput>
  }

  export type IdeaUpsertWithoutIdeasLikesInput = {
    update: XOR<IdeaUpdateWithoutIdeasLikesInput, IdeaUncheckedUpdateWithoutIdeasLikesInput>
    create: XOR<IdeaCreateWithoutIdeasLikesInput, IdeaUncheckedCreateWithoutIdeasLikesInput>
    where?: IdeaWhereInput
  }

  export type IdeaUpdateToOneWithWhereWithoutIdeasLikesInput = {
    where?: IdeaWhereInput
    data: XOR<IdeaUpdateWithoutIdeasLikesInput, IdeaUncheckedUpdateWithoutIdeasLikesInput>
  }

  export type IdeaUpdateWithoutIdeasLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nick?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: UserUpdateOneRequiredWithoutIdeasNestedInput
  }

  export type IdeaUncheckedUpdateWithoutIdeasLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nick?: StringFieldUpdateOperationsInput | string
    serialNumber?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    blockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpsertWithoutIdeasLikesInput = {
    update: XOR<UserUpdateWithoutIdeasLikesInput, UserUncheckedUpdateWithoutIdeasLikesInput>
    create: XOR<UserCreateWithoutIdeasLikesInput, UserUncheckedCreateWithoutIdeasLikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIdeasLikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIdeasLikesInput, UserUncheckedUpdateWithoutIdeasLikesInput>
  }

  export type UserUpdateWithoutIdeasLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nick?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: UserUpdatepermissionsInput | $Enums.UserPermission[]
    ideas?: IdeaUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutIdeasLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nick?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: UserUpdatepermissionsInput | $Enums.UserPermission[]
    ideas?: IdeaUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type IdeaCreateManyAuthorInput = {
    id?: string
    nick: string
    serialNumber?: number
    name: string
    description: string
    text: string
    createdAt?: Date | string
    blockedAt?: Date | string | null
  }

  export type IdeaLikeCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    ideaId: string
  }

  export type IdeaUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nick?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ideasLikes?: IdeaLikeUpdateManyWithoutIdeaNestedInput
  }

  export type IdeaUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nick?: StringFieldUpdateOperationsInput | string
    serialNumber?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ideasLikes?: IdeaLikeUncheckedUpdateManyWithoutIdeaNestedInput
  }

  export type IdeaUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nick?: StringFieldUpdateOperationsInput | string
    serialNumber?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IdeaLikeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idea?: IdeaUpdateOneRequiredWithoutIdeasLikesNestedInput
  }

  export type IdeaLikeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ideaId?: StringFieldUpdateOperationsInput | string
  }

  export type IdeaLikeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ideaId?: StringFieldUpdateOperationsInput | string
  }

  export type IdeaLikeCreateManyIdeaInput = {
    id?: string
    createdAt?: Date | string
    userId: string
  }

  export type IdeaLikeUpdateWithoutIdeaInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutIdeasLikesNestedInput
  }

  export type IdeaLikeUncheckedUpdateWithoutIdeaInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type IdeaLikeUncheckedUpdateManyWithoutIdeaInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
