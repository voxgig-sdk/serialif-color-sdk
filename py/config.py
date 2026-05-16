# SerialifColor SDK configuration


def make_config():
    return {
        "main": {
            "name": "SerialifColor",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://color.serialif.com",
            "auth": {
                "prefix": "Bearer",
            },
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
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "base_without_alpha",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "base_without_alpha_contrasted_text",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "complementary",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "complementary_without_alpha",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "complementary_without_alpha_contrasted_text",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "grayscale",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "grayscale_without_alpha",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "grayscale_without_alpha_contrasted_text",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "status",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 9,
          },
        ],
        "name": "get_color_by_path",
        "op": {
          "load": {
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
                      "active": True,
                    },
                  ],
                },
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
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
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "base_without_alpha",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "base_without_alpha_contrasted_text",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "complementary",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "complementary_without_alpha",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "complementary_without_alpha_contrasted_text",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "grayscale",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "grayscale_without_alpha",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "grayscale_without_alpha_contrasted_text",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "status",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 9,
          },
        ],
        "name": "get_color_by_query",
        "op": {
          "load": {
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
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": "85,102,119",
                      "kind": "query",
                      "name": "hsl",
                      "orig": "hsl",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": "85,102,119,0.53",
                      "kind": "query",
                      "name": "hsla",
                      "orig": "hsla",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": "aquamarine",
                      "kind": "query",
                      "name": "keyword",
                      "orig": "keyword",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": "85,102,119",
                      "kind": "query",
                      "name": "rgb",
                      "orig": "rgb",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": "85,102,119,0.53",
                      "kind": "query",
                      "name": "rgba",
                      "orig": "rgba",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/",
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
                "active": True,
                "parts": [],
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
