
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'SerialifColor',
        slug: "serialif-color",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
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
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
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
          "title": "Base",
          "type": "`$OBJECT`",
          "short": "Requested base color"
        },
        {
          "name": "base_without_alpha",
          "title": "Base Without Alpha",
          "type": "`$OBJECT`",
          "short": "Base color without alpha channel"
        },
        {
          "name": "base_without_alpha_contrasted_text",
          "title": "Base Without Alpha Contrasted Text",
          "type": "`$OBJECT`",
          "short": "Black or white text color that contrasts with base color"
        },
        {
          "name": "complementary",
          "title": "Complementary",
          "type": "`$OBJECT`",
          "short": "Complementary color"
        },
        {
          "name": "complementary_without_alpha",
          "title": "Complementary Without Alpha",
          "type": "`$OBJECT`",
          "short": "Complementary color without alpha channel"
        },
        {
          "name": "complementary_without_alpha_contrasted_text",
          "title": "Complementary Without Alpha Contrasted Text",
          "type": "`$OBJECT`",
          "short": "Black or white text color that contrasts with complementary color"
        },
        {
          "name": "grayscale",
          "title": "Grayscale",
          "type": "`$OBJECT`",
          "short": "Grayscale version of the color"
        },
        {
          "name": "grayscale_without_alpha",
          "title": "Grayscale Without Alpha",
          "type": "`$OBJECT`",
          "short": "Grayscale color without alpha channel"
        },
        {
          "name": "grayscale_without_alpha_contrasted_text",
          "title": "Grayscale Without Alpha Contrasted Text",
          "type": "`$OBJECT`",
          "short": "Black or white text color that contrasts with grayscale color"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "req": true,
          "short": "Status of the API response"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
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
                  "var": "id"
                }
              ],
              "parts": [
                "{id}"
              ],
              "rename": {
                "param": {
                  "color": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "color",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "aquamarine"
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
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
          "title": "Base",
          "type": "`$OBJECT`",
          "short": "Requested base color"
        },
        {
          "name": "base_without_alpha",
          "title": "Base Without Alpha",
          "type": "`$OBJECT`",
          "short": "Base color without alpha channel"
        },
        {
          "name": "base_without_alpha_contrasted_text",
          "title": "Base Without Alpha Contrasted Text",
          "type": "`$OBJECT`",
          "short": "Black or white text color that contrasts with base color"
        },
        {
          "name": "complementary",
          "title": "Complementary",
          "type": "`$OBJECT`",
          "short": "Complementary color"
        },
        {
          "name": "complementary_without_alpha",
          "title": "Complementary Without Alpha",
          "type": "`$OBJECT`",
          "short": "Complementary color without alpha channel"
        },
        {
          "name": "complementary_without_alpha_contrasted_text",
          "title": "Complementary Without Alpha Contrasted Text",
          "type": "`$OBJECT`",
          "short": "Black or white text color that contrasts with complementary color"
        },
        {
          "name": "grayscale",
          "title": "Grayscale",
          "type": "`$OBJECT`",
          "short": "Grayscale version of the color"
        },
        {
          "name": "grayscale_without_alpha",
          "title": "Grayscale Without Alpha",
          "type": "`$OBJECT`",
          "short": "Grayscale color without alpha channel"
        },
        {
          "name": "grayscale_without_alpha_contrasted_text",
          "title": "Grayscale Without Alpha Contrasted Text",
          "type": "`$OBJECT`",
          "short": "Black or white text color that contrasts with grayscale color"
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "req": true,
          "short": "Status of the API response"
        }
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
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "hex",
                    "orig": "hex",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "55667788"
                  },
                  {
                    "name": "hsl",
                    "orig": "hsl",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "85,102,119"
                  },
                  {
                    "name": "hsla",
                    "orig": "hsla",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "85,102,119,0.53"
                  },
                  {
                    "name": "keyword",
                    "orig": "keyword",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "aquamarine"
                  },
                  {
                    "name": "rgb",
                    "orig": "rgb",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "85,102,119"
                  },
                  {
                    "name": "rgba",
                    "orig": "rgba",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "85,102,119,0.53"
                  }
                ]
              },
              "select": {
                "exist": [
                  "hex",
                  "hsl",
                  "hsla",
                  "keyword",
                  "rgb",
                  "rgba"
                ]
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
  config,
  FEATURE_PLUGINS,
}

