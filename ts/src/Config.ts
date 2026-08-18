
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'SerialifColor',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://color.serialif.com",

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
          "type": "`$OBJECT`"
        },
        {
          "name": "base_without_alpha",
          "type": "`$OBJECT`"
        },
        {
          "name": "base_without_alpha_contrasted_text",
          "type": "`$OBJECT`"
        },
        {
          "name": "complementary",
          "type": "`$OBJECT`"
        },
        {
          "name": "complementary_without_alpha",
          "type": "`$OBJECT`"
        },
        {
          "name": "complementary_without_alpha_contrasted_text",
          "type": "`$OBJECT`"
        },
        {
          "name": "grayscale",
          "type": "`$OBJECT`"
        },
        {
          "name": "grayscale_without_alpha",
          "type": "`$OBJECT`"
        },
        {
          "name": "grayscale_without_alpha_contrasted_text",
          "type": "`$OBJECT`"
        },
        {
          "name": "status",
          "req": true,
          "type": "`$STRING`"
        }
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
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
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
              }
            }
          ]
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
          "type": "`$OBJECT`"
        },
        {
          "name": "base_without_alpha",
          "type": "`$OBJECT`"
        },
        {
          "name": "base_without_alpha_contrasted_text",
          "type": "`$OBJECT`"
        },
        {
          "name": "complementary",
          "type": "`$OBJECT`"
        },
        {
          "name": "complementary_without_alpha",
          "type": "`$OBJECT`"
        },
        {
          "name": "complementary_without_alpha_contrasted_text",
          "type": "`$OBJECT`"
        },
        {
          "name": "grayscale",
          "type": "`$OBJECT`"
        },
        {
          "name": "grayscale_without_alpha",
          "type": "`$OBJECT`"
        },
        {
          "name": "grayscale_without_alpha_contrasted_text",
          "type": "`$OBJECT`"
        },
        {
          "name": "status",
          "req": true,
          "type": "`$STRING`"
        }
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
                    "type": "`$STRING`"
                  },
                  {
                    "example": "85,102,119",
                    "kind": "query",
                    "name": "hsl",
                    "orig": "hsl",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "85,102,119,0.53",
                    "kind": "query",
                    "name": "hsla",
                    "orig": "hsla",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "aquamarine",
                    "kind": "query",
                    "name": "keyword",
                    "orig": "keyword",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "85,102,119",
                    "kind": "query",
                    "name": "rgb",
                    "orig": "rgb",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "85,102,119,0.53",
                    "kind": "query",
                    "name": "rgba",
                    "orig": "rgba",
                    "type": "`$STRING`"
                  }
                ]
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
                  "rgba"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
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

