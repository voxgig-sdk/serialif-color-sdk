# SerialifColor PHP SDK Reference

Complete API reference for the SerialifColor PHP SDK.


## SerialifColorSDK

### Constructor

```php
require_once __DIR__ . '/serialif-color_sdk.php';

$client = new SerialifColorSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `SerialifColorSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = SerialifColorSDK::test();
```


### Instance Methods

#### `GetColorByPath($data = null)`

Create a new `GetColorByPathEntity` instance. Pass `null` for no initial data.

#### `GetColorByQuery($data = null)`

Create a new `GetColorByQueryEntity` instance. Pass `null` for no initial data.

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. Returns `[$result, $err]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array [$result, $err]`

#### `prepare(array $fetchargs = []): array`

Prepare a fetch definition without sending the request. Returns `[$fetchdef, $err]`.


---

## GetColorByPathEntity

```php
$get_color_by_path = $client->GetColorByPath();
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

#### `load(array $reqmatch, ?array $ctrl = null): array`

Load a single entity matching the given criteria.

```php
[$result, $err] = $client->GetColorByPath()->load(["id" => "get_color_by_path_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): GetColorByPathEntity`

Create a new `GetColorByPathEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## GetColorByQueryEntity

```php
$get_color_by_query = $client->GetColorByQuery();
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

#### `load(array $reqmatch, ?array $ctrl = null): array`

Load a single entity matching the given criteria.

```php
[$result, $err] = $client->GetColorByQuery()->load(["id" => "get_color_by_query_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): GetColorByQueryEntity`

Create a new `GetColorByQueryEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new SerialifColorSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

