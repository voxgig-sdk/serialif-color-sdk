# SerialifColor Python SDK Reference

Complete API reference for the SerialifColor Python SDK.


## SerialifColorSDK

### Constructor

```python
from serialifcolor_sdk import SerialifColorSDK

client = SerialifColorSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `SerialifColorSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = SerialifColorSDK.test()
```


### Instance Methods

#### `GetColorByPath(data=None)`

Create a new `GetColorByPathEntity` instance. Pass `None` for no initial data.

#### `GetColorByQuery(data=None)`

Create a new `GetColorByQueryEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## GetColorByPathEntity

```python
get_color_by_path = client.GetColorByPath()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base` | `dict` | No | Requested base color |
| `base_without_alpha` | `dict` | No | Base color without alpha channel |
| `base_without_alpha_contrasted_text` | `dict` | No | Black or white text color that contrasts with base color |
| `complementary` | `dict` | No | Complementary color |
| `complementary_without_alpha` | `dict` | No | Complementary color without alpha channel |
| `complementary_without_alpha_contrasted_text` | `dict` | No | Black or white text color that contrasts with complementary color |
| `grayscale` | `dict` | No | Grayscale version of the color |
| `grayscale_without_alpha` | `dict` | No | Grayscale color without alpha channel |
| `grayscale_without_alpha_contrasted_text` | `dict` | No | Black or white text color that contrasts with grayscale color |
| `status` | `str` | Yes | Status of the API response |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.GetColorByPath().load({"id": "get_color_by_path_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GetColorByPathEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GetColorByQueryEntity

```python
get_color_by_query = client.GetColorByQuery()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base` | `dict` | No | Requested base color |
| `base_without_alpha` | `dict` | No | Base color without alpha channel |
| `base_without_alpha_contrasted_text` | `dict` | No | Black or white text color that contrasts with base color |
| `complementary` | `dict` | No | Complementary color |
| `complementary_without_alpha` | `dict` | No | Complementary color without alpha channel |
| `complementary_without_alpha_contrasted_text` | `dict` | No | Black or white text color that contrasts with complementary color |
| `grayscale` | `dict` | No | Grayscale version of the color |
| `grayscale_without_alpha` | `dict` | No | Grayscale color without alpha channel |
| `grayscale_without_alpha_contrasted_text` | `dict` | No | Black or white text color that contrasts with grayscale color |
| `status` | `str` | Yes | Status of the API response |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.GetColorByQuery().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GetColorByQueryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = SerialifColorSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

