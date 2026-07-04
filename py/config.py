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
            "active": True,
            "name": "base",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "base_without_alpha",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "base_without_alpha_contrasted_text",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "complementary",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "complementary_without_alpha",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "complementary_without_alpha_contrasted_text",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "grayscale",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "grayscale_without_alpha",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "grayscale_without_alpha_contrasted_text",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "status",
            "req": True,
            "type": "`$STRING`",
            "index$": 9,
          },
        ],
        "name": "get_color_by_path",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "aquamarine",
                      "kind": "param",
                      "name": "id",
                      "orig": "color",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
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
                "index$": 0,
              },
            ],
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
            "active": True,
            "name": "base",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "base_without_alpha",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "base_without_alpha_contrasted_text",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "complementary",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "complementary_without_alpha",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "complementary_without_alpha_contrasted_text",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "grayscale",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "grayscale_without_alpha",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "grayscale_without_alpha_contrasted_text",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "status",
            "req": True,
            "type": "`$STRING`",
            "index$": 9,
          },
        ],
        "name": "get_color_by_query",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "55667788",
                      "kind": "query",
                      "name": "hex",
                      "orig": "hex",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "85,102,119",
                      "kind": "query",
                      "name": "hsl",
                      "orig": "hsl",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "85,102,119,0.53",
                      "kind": "query",
                      "name": "hsla",
                      "orig": "hsla",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "aquamarine",
                      "kind": "query",
                      "name": "keyword",
                      "orig": "keyword",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "85,102,119",
                      "kind": "query",
                      "name": "rgb",
                      "orig": "rgb",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "85,102,119,0.53",
                      "kind": "query",
                      "name": "rgba",
                      "orig": "rgba",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
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
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
