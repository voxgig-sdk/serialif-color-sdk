# SerialifColor SDK

Look up a color and get its complement, grayscale variant, and contrasting text color

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Serialif Color API

The Serialif Color API is a small REST service hosted at [color.serialif.com](https://color.serialif.com) that turns a color identifier into a structured palette. For each requested color it returns the base color, its complementary color, and a grayscale variant, each paired with a contrasting text color picked for readability.

What you get from the API:

- Inputs can be a CSS keyword (e.g. `aquamarine`), a 3/4/6/8-character HEX value, or `rgb`/`rgba`/`hsl`/`hsla` tuples, supplied either as a path segment or as a query parameter.
- Each response includes nine color objects: base, complementary, and grayscale, each available with and without an alpha channel and each accompanied by a contrasting text color.
- Every color object carries `keyword`, `hex` (with composition breakdown), and `rgb`/`rgba` plus `hsl`/`hsla` in both standard and raw-precision forms.
- Errors are returned as a JSON object of the shape `{"status": "error", "error": {"type": "...", "value": "...", "message": "..."}}`.

Operational notes: the API is open and requires no authentication or API key. According to the [freepublicapis.com listing](https://freepublicapis.com/serialif-color-api), CORS is disabled on the endpoints, so browser-side calls from another origin will be blocked and the API is best consumed from a server.

## Try it

**TypeScript**
```bash
npm install serialif-color
```

**Python**
```bash
pip install serialif-color-sdk
```

**PHP**
```bash
composer require voxgig/serialif-color-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/serialif-color-sdk/go
```

**Ruby**
```bash
gem install serialif-color-sdk
```

**Lua**
```bash
luarocks install serialif-color-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { SerialifColorSDK } from 'serialif-color'

const client = new SerialifColorSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o serialif-color-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "serialif-color": {
      "command": "/abs/path/to/serialif-color-mcp"
    }
  }
}
```

## Entities

The API exposes 2 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **GetColorByPath** | Resolves a color supplied as a path segment, e.g. `/aquamarine`, `/55667788`, or `/85,102,119`, and returns the full palette object. | `/{color}` |
| **GetColorByQuery** | Resolves a color supplied via query parameters such as `?keyword=`, `?hex=`, `?rgb=`, `?rgba=`, `?hsl=`, or `?hsla=`, returning the same palette structure. | `/` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from serialifcolor_sdk import SerialifColorSDK

client = SerialifColorSDK({})


# Load a specific getcolorbypath
getcolorbypath, err = client.GetColorByPath(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'serialifcolor_sdk.php';

$client = new SerialifColorSDK([]);


// Load a specific getcolorbypath
[$getcolorbypath, $err] = $client->GetColorByPath(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/serialif-color-sdk/go"

client := sdk.NewSerialifColorSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "SerialifColor_sdk"

client = SerialifColorSDK.new({})


# Load a specific getcolorbypath
getcolorbypath, err = client.GetColorByPath(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("serialif-color_sdk")

local client = sdk.new({})


-- Load a specific getcolorbypath
local getcolorbypath, err = client:GetColorByPath(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = SerialifColorSDK.test()
const result = await client.GetColorByPath().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = SerialifColorSDK.test(None, None)
result, err = client.GetColorByPath(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = SerialifColorSDK::test(null, null);
[$result, $err] = $client->GetColorByPath(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.GetColorByPath(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = SerialifColorSDK.test(nil, nil)
result, err = client.GetColorByPath(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:GetColorByPath(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Serialif Color API

- Upstream: [https://color.serialif.com](https://color.serialif.com)

- No formal license is published on the API homepage.
- The homepage credits the project as "Made by Serialif | 2021".
- Treat usage terms as unspecified; attribution to Serialif is a reasonable courtesy.
- Confirm any production or commercial use directly with the publisher.

---

Generated from the Serialif Color API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
