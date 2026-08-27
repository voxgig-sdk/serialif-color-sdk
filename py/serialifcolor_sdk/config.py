# SerialifColor SDK configuration


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
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
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
            "short": "Requested base color",
            "type": "`$OBJECT`",
          },
          {
            "name": "base_without_alpha",
            "short": "Base color without alpha channel",
            "type": "`$OBJECT`",
          },
          {
            "name": "base_without_alpha_contrasted_text",
            "short": "Black or white text color that contrasts with base color",
            "type": "`$OBJECT`",
          },
          {
            "name": "complementary",
            "short": "Complementary color",
            "type": "`$OBJECT`",
          },
          {
            "name": "complementary_without_alpha",
            "short": "Complementary color without alpha channel",
            "type": "`$OBJECT`",
          },
          {
            "name": "complementary_without_alpha_contrasted_text",
            "short": "Black or white text color that contrasts with complementary color",
            "type": "`$OBJECT`",
          },
          {
            "name": "grayscale",
            "short": "Grayscale version of the color",
            "type": "`$OBJECT`",
          },
          {
            "name": "grayscale_without_alpha",
            "short": "Grayscale color without alpha channel",
            "type": "`$OBJECT`",
          },
          {
            "name": "grayscale_without_alpha_contrasted_text",
            "short": "Black or white text color that contrasts with grayscale color",
            "type": "`$OBJECT`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "req": True,
            "short": "Status of the API response",
            "type": "`$STRING`",
          },
        ],
        "name": "get_color_by_path",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": "aquamarine",
                      "kind": "param",
                      "name": "id",
                      "orig": "color",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/{color}",
                "parts": [
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "color": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
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
            "short": "Requested base color",
            "type": "`$OBJECT`",
          },
          {
            "name": "base_without_alpha",
            "short": "Base color without alpha channel",
            "type": "`$OBJECT`",
          },
          {
            "name": "base_without_alpha_contrasted_text",
            "short": "Black or white text color that contrasts with base color",
            "type": "`$OBJECT`",
          },
          {
            "name": "complementary",
            "short": "Complementary color",
            "type": "`$OBJECT`",
          },
          {
            "name": "complementary_without_alpha",
            "short": "Complementary color without alpha channel",
            "type": "`$OBJECT`",
          },
          {
            "name": "complementary_without_alpha_contrasted_text",
            "short": "Black or white text color that contrasts with complementary color",
            "type": "`$OBJECT`",
          },
          {
            "name": "grayscale",
            "short": "Grayscale version of the color",
            "type": "`$OBJECT`",
          },
          {
            "name": "grayscale_without_alpha",
            "short": "Grayscale color without alpha channel",
            "type": "`$OBJECT`",
          },
          {
            "name": "grayscale_without_alpha_contrasted_text",
            "short": "Black or white text color that contrasts with grayscale color",
            "type": "`$OBJECT`",
          },
          {
            "name": "status",
            "req": True,
            "short": "Status of the API response",
            "type": "`$STRING`",
          },
        ],
        "name": "get_color_by_query",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "55667788",
                      "kind": "query",
                      "name": "hex",
                      "orig": "hex",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "85,102,119",
                      "kind": "query",
                      "name": "hsl",
                      "orig": "hsl",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "85,102,119,0.53",
                      "kind": "query",
                      "name": "hsla",
                      "orig": "hsla",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "aquamarine",
                      "kind": "query",
                      "name": "keyword",
                      "orig": "keyword",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "85,102,119",
                      "kind": "query",
                      "name": "rgb",
                      "orig": "rgb",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "85,102,119,0.53",
                      "kind": "query",
                      "name": "rgba",
                      "orig": "rgba",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/",
                "parts": [],
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
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
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
