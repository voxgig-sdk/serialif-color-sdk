# SerialifColor SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "SerialifColor",
            "slug": "serialif-color",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://color.serialif.com",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "get_color_by_path": {},
                "get_color_by_query": {},
            },
        },
        "entity": {
      "get_color_by_path": {
        "fields": [
          {
            "name": "base",
            "title": "Base",
            "type": "`$OBJECT`",
            "short": "Requested base color",
          },
          {
            "name": "base_without_alpha",
            "title": "Base Without Alpha",
            "type": "`$OBJECT`",
            "short": "Base color without alpha channel",
          },
          {
            "name": "base_without_alpha_contrasted_text",
            "title": "Base Without Alpha Contrasted Text",
            "type": "`$OBJECT`",
            "short": "Black or white text color that contrasts with base color",
          },
          {
            "name": "complementary",
            "title": "Complementary",
            "type": "`$OBJECT`",
            "short": "Complementary color",
          },
          {
            "name": "complementary_without_alpha",
            "title": "Complementary Without Alpha",
            "type": "`$OBJECT`",
            "short": "Complementary color without alpha channel",
          },
          {
            "name": "complementary_without_alpha_contrasted_text",
            "title": "Complementary Without Alpha Contrasted Text",
            "type": "`$OBJECT`",
            "short": "Black or white text color that contrasts with complementary color",
          },
          {
            "name": "grayscale",
            "title": "Grayscale",
            "type": "`$OBJECT`",
            "short": "Grayscale version of the color",
          },
          {
            "name": "grayscale_without_alpha",
            "title": "Grayscale Without Alpha",
            "type": "`$OBJECT`",
            "short": "Grayscale color without alpha channel",
          },
          {
            "name": "grayscale_without_alpha_contrasted_text",
            "title": "Grayscale Without Alpha Contrasted Text",
            "type": "`$OBJECT`",
            "short": "Black or white text color that contrasts with grayscale color",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Status of the API response",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "get_color_by_path",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/{color}",
                "segments": [
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "color": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "color",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "aquamarine",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "get_color_by_query": {
        "fields": [
          {
            "name": "base",
            "title": "Base",
            "type": "`$OBJECT`",
            "short": "Requested base color",
          },
          {
            "name": "base_without_alpha",
            "title": "Base Without Alpha",
            "type": "`$OBJECT`",
            "short": "Base color without alpha channel",
          },
          {
            "name": "base_without_alpha_contrasted_text",
            "title": "Base Without Alpha Contrasted Text",
            "type": "`$OBJECT`",
            "short": "Black or white text color that contrasts with base color",
          },
          {
            "name": "complementary",
            "title": "Complementary",
            "type": "`$OBJECT`",
            "short": "Complementary color",
          },
          {
            "name": "complementary_without_alpha",
            "title": "Complementary Without Alpha",
            "type": "`$OBJECT`",
            "short": "Complementary color without alpha channel",
          },
          {
            "name": "complementary_without_alpha_contrasted_text",
            "title": "Complementary Without Alpha Contrasted Text",
            "type": "`$OBJECT`",
            "short": "Black or white text color that contrasts with complementary color",
          },
          {
            "name": "grayscale",
            "title": "Grayscale",
            "type": "`$OBJECT`",
            "short": "Grayscale version of the color",
          },
          {
            "name": "grayscale_without_alpha",
            "title": "Grayscale Without Alpha",
            "type": "`$OBJECT`",
            "short": "Grayscale color without alpha channel",
          },
          {
            "name": "grayscale_without_alpha_contrasted_text",
            "title": "Grayscale Without Alpha Contrasted Text",
            "type": "`$OBJECT`",
            "short": "Black or white text color that contrasts with grayscale color",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Status of the API response",
          },
        ],
        "name": "get_color_by_query",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/",
                "segments": [],
                "parts": [],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "hex",
                      "orig": "hex",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "55667788",
                    },
                    {
                      "name": "hsl",
                      "orig": "hsl",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "85,102,119",
                    },
                    {
                      "name": "hsla",
                      "orig": "hsla",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "85,102,119,0.53",
                    },
                    {
                      "name": "keyword",
                      "orig": "keyword",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "aquamarine",
                    },
                    {
                      "name": "rgb",
                      "orig": "rgb",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "85,102,119",
                    },
                    {
                      "name": "rgba",
                      "orig": "rgba",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "85,102,119,0.53",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "hex",
                    "hsl",
                    "hsla",
                    "keyword",
                    "rgb",
                    "rgba",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
