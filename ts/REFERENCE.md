# SerialifColor TypeScript SDK Reference

Complete API reference for the SerialifColor TypeScript SDK.


## SerialifColorSDK

### Constructor

```ts
new SerialifColorSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `SerialifColorSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = SerialifColorSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `SerialifColorSDK` instance in test mode.


### Instance Methods

#### `GetColorByPath(data?: object)`

Create a new `GetColorByPath` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GetColorByPathEntity` instance.

#### `GetColorByQuery(data?: object)`

Create a new `GetColorByQuery` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GetColorByQueryEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `SerialifColorSDK.test()`.

**Returns:** `SerialifColorSDK` instance in test mode.


---

## GetColorByPathEntity

```ts
const get_color_by_path = client.GetColorByPath()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base` | `Record<string, any>` | No | Requested base color |
| `base_without_alpha` | `Record<string, any>` | No | Base color without alpha channel |
| `base_without_alpha_contrasted_text` | `Record<string, any>` | No | Black or white text color that contrasts with base color |
| `complementary` | `Record<string, any>` | No | Complementary color |
| `complementary_without_alpha` | `Record<string, any>` | No | Complementary color without alpha channel |
| `complementary_without_alpha_contrasted_text` | `Record<string, any>` | No | Black or white text color that contrasts with complementary color |
| `grayscale` | `Record<string, any>` | No | Grayscale version of the color |
| `grayscale_without_alpha` | `Record<string, any>` | No | Grayscale color without alpha channel |
| `grayscale_without_alpha_contrasted_text` | `Record<string, any>` | No | Black or white text color that contrasts with grayscale color |
| `id` | `string` | No |  |
| `status` | `string` | Yes | Status of the API response |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.GetColorByPath().load({ id: 'get_color_by_path_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GetColorByPathEntity` instance with the same client and
options.

#### `client()`

Return the parent `SerialifColorSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GetColorByQueryEntity

```ts
const get_color_by_query = client.GetColorByQuery()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base` | `Record<string, any>` | No | Requested base color |
| `base_without_alpha` | `Record<string, any>` | No | Base color without alpha channel |
| `base_without_alpha_contrasted_text` | `Record<string, any>` | No | Black or white text color that contrasts with base color |
| `complementary` | `Record<string, any>` | No | Complementary color |
| `complementary_without_alpha` | `Record<string, any>` | No | Complementary color without alpha channel |
| `complementary_without_alpha_contrasted_text` | `Record<string, any>` | No | Black or white text color that contrasts with complementary color |
| `grayscale` | `Record<string, any>` | No | Grayscale version of the color |
| `grayscale_without_alpha` | `Record<string, any>` | No | Grayscale color without alpha channel |
| `grayscale_without_alpha_contrasted_text` | `Record<string, any>` | No | Black or white text color that contrasts with grayscale color |
| `status` | `string` | Yes | Status of the API response |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.GetColorByQuery().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GetColorByQueryEntity` instance with the same client and
options.

#### `client()`

Return the parent `SerialifColorSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new SerialifColorSDK({
  feature: {
    test: { active: true },
  }
})
```

