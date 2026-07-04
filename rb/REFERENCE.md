# SerialifColor Ruby SDK Reference

Complete API reference for the SerialifColor Ruby SDK.


## SerialifColorSDK

### Constructor

```ruby
require_relative 'serialif-color_sdk'

client = SerialifColorSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `SerialifColorSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = SerialifColorSDK.test
```


### Instance Methods

#### `GetColorByPath(data = nil)`

Create a new `GetColorByPath` entity instance. Pass `nil` for no initial data.

#### `GetColorByQuery(data = nil)`

Create a new `GetColorByQuery` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## GetColorByPathEntity

```ruby
get_color_by_path = client.GetColorByPath
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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.GetColorByPath.load({ "id" => "get_color_by_path_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GetColorByPathEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GetColorByQueryEntity

```ruby
get_color_by_query = client.GetColorByQuery
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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.GetColorByQuery.load({ "id" => "get_color_by_query_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GetColorByQueryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = SerialifColorSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

