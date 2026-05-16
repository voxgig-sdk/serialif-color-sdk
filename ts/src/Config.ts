
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    }

  }


  options = {
    base: 'https://color.serialif.com',

    auth: {
      prefix: 'Bearer',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      get_color_by_path: {
      },

      get_color_by_query: {
      },

    }
  }


  entity = {
    "get_color_by_path": {
      "fields": [
        {
          "name": "base",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 0
        },
        {
          "name": "base_without_alpha",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 1
        },
        {
          "name": "base_without_alpha_contrasted_text",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 2
        },
        {
          "name": "complementary",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 3
        },
        {
          "name": "complementary_without_alpha",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 4
        },
        {
          "name": "complementary_without_alpha_contrasted_text",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 5
        },
        {
          "name": "grayscale",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 6
        },
        {
          "name": "grayscale_without_alpha",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 7
        },
        {
          "name": "grayscale_without_alpha_contrasted_text",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 8
        },
        {
          "name": "status",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 9
        }
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
                    "reqd": true,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/{color}",
              "parts": [
                "{id}"
              ],
              "rename": {
                "param": {
                  "color": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "get_color_by_query": {
      "fields": [
        {
          "name": "base",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 0
        },
        {
          "name": "base_without_alpha",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 1
        },
        {
          "name": "base_without_alpha_contrasted_text",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 2
        },
        {
          "name": "complementary",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 3
        },
        {
          "name": "complementary_without_alpha",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 4
        },
        {
          "name": "complementary_without_alpha_contrasted_text",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 5
        },
        {
          "name": "grayscale",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 6
        },
        {
          "name": "grayscale_without_alpha",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 7
        },
        {
          "name": "grayscale_without_alpha_contrasted_text",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 8
        },
        {
          "name": "status",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 9
        }
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
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "example": "85,102,119",
                    "kind": "query",
                    "name": "hsl",
                    "orig": "hsl",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "example": "85,102,119,0.53",
                    "kind": "query",
                    "name": "hsla",
                    "orig": "hsla",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "example": "aquamarine",
                    "kind": "query",
                    "name": "keyword",
                    "orig": "keyword",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "example": "85,102,119",
                    "kind": "query",
                    "name": "rgb",
                    "orig": "rgb",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "example": "85,102,119,0.53",
                    "kind": "query",
                    "name": "rgba",
                    "orig": "rgba",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
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
                  "rgba"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "parts": [],
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

