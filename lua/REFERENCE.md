# SerialifColor Lua SDK Reference

Complete API reference for the SerialifColor Lua SDK.


## SerialifColorSDK

### Constructor

```lua
local sdk = require("serialif-color_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `GetColorByPath(data)`

Create a new `GetColorByPath` entity instance. Pass `nil` for no initial data.

#### `GetColorByQuery(data)`

Create a new `GetColorByQuery` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## GetColorByPathEntity

```lua
local get_color_by_path = client:GetColorByPath(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base` | ``$OBJECT`` | No |  |
| `base_without_alpha` | ``$OBJECT`` | No |  |
| `base_without_alpha_contrasted_text` | ``$OBJECT`` | No |  |
| `complementary` | ``$OBJECT`` | No |  |
| `complementary_without_alpha` | ``$OBJECT`` | No |  |
| `complementary_without_alpha_contrasted_text` | ``$OBJECT`` | No |  |
| `grayscale` | ``$OBJECT`` | No |  |
| `grayscale_without_alpha` | ``$OBJECT`` | No |  |
| `grayscale_without_alpha_contrasted_text` | ``$OBJECT`` | No |  |
| `status` | ``$STRING`` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:GetColorByPath():load({ id = "get_color_by_path_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GetColorByPathEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GetColorByQueryEntity

```lua
local get_color_by_query = client:GetColorByQuery(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base` | ``$OBJECT`` | No |  |
| `base_without_alpha` | ``$OBJECT`` | No |  |
| `base_without_alpha_contrasted_text` | ``$OBJECT`` | No |  |
| `complementary` | ``$OBJECT`` | No |  |
| `complementary_without_alpha` | ``$OBJECT`` | No |  |
| `complementary_without_alpha_contrasted_text` | ``$OBJECT`` | No |  |
| `grayscale` | ``$OBJECT`` | No |  |
| `grayscale_without_alpha` | ``$OBJECT`` | No |  |
| `grayscale_without_alpha_contrasted_text` | ``$OBJECT`` | No |  |
| `status` | ``$STRING`` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:GetColorByQuery():load({ id = "get_color_by_query_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GetColorByQueryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

