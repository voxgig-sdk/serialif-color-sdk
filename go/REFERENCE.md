# SerialifColor Golang SDK Reference

Complete API reference for the SerialifColor Golang SDK.


## SerialifColorSDK

### Constructor

```go
func NewSerialifColorSDK(options map[string]any) *SerialifColorSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *SerialifColorSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *SerialifColorSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `GetColorByPath(data map[string]any) SerialifColorEntity`

Create a new `GetColorByPath` entity instance. Pass `nil` for no initial data.

#### `GetColorByQuery(data map[string]any) SerialifColorEntity`

Create a new `GetColorByQuery` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## GetColorByPathEntity

```go
getColorByPath := client.GetColorByPath(nil)
fmt.Println(getColorByPath.GetName()) // "get_color_by_path"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base` | `map[string]any` | No | Requested base color |
| `base_without_alpha` | `map[string]any` | No | Base color without alpha channel |
| `base_without_alpha_contrasted_text` | `map[string]any` | No | Black or white text color that contrasts with base color |
| `complementary` | `map[string]any` | No | Complementary color |
| `complementary_without_alpha` | `map[string]any` | No | Complementary color without alpha channel |
| `complementary_without_alpha_contrasted_text` | `map[string]any` | No | Black or white text color that contrasts with complementary color |
| `grayscale` | `map[string]any` | No | Grayscale version of the color |
| `grayscale_without_alpha` | `map[string]any` | No | Grayscale color without alpha channel |
| `grayscale_without_alpha_contrasted_text` | `map[string]any` | No | Black or white text color that contrasts with grayscale color |
| `id` | `string` | No |  |
| `status` | `string` | Yes | Status of the API response |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.GetColorByPath(nil).Load(map[string]any{"id": "get_color_by_path_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GetColorByPathEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GetColorByQueryEntity

```go
getColorByQuery := client.GetColorByQuery(nil)
fmt.Println(getColorByQuery.GetName()) // "get_color_by_query"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base` | `map[string]any` | No | Requested base color |
| `base_without_alpha` | `map[string]any` | No | Base color without alpha channel |
| `base_without_alpha_contrasted_text` | `map[string]any` | No | Black or white text color that contrasts with base color |
| `complementary` | `map[string]any` | No | Complementary color |
| `complementary_without_alpha` | `map[string]any` | No | Complementary color without alpha channel |
| `complementary_without_alpha_contrasted_text` | `map[string]any` | No | Black or white text color that contrasts with complementary color |
| `grayscale` | `map[string]any` | No | Grayscale version of the color |
| `grayscale_without_alpha` | `map[string]any` | No | Grayscale color without alpha channel |
| `grayscale_without_alpha_contrasted_text` | `map[string]any` | No | Black or white text color that contrasts with grayscale color |
| `status` | `string` | Yes | Status of the API response |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.GetColorByQuery(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GetColorByQueryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewSerialifColorSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

