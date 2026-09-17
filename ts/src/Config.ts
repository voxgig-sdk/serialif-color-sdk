
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


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
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
          "short": "Requested base color",
          "type": "`$OBJECT`"
        },
        {
          "name": "base_without_alpha",
          "short": "Base color without alpha channel",
          "type": "`$OBJECT`"
        },
        {
          "name": "base_without_alpha_contrasted_text",
          "short": "Black or white text color that contrasts with base color",
          "type": "`$OBJECT`"
        },
        {
          "name": "complementary",
          "short": "Complementary color",
          "type": "`$OBJECT`"
        },
        {
          "name": "complementary_without_alpha",
          "short": "Complementary color without alpha channel",
          "type": "`$OBJECT`"
        },
        {
          "name": "complementary_without_alpha_contrasted_text",
          "short": "Black or white text color that contrasts with complementary color",
          "type": "`$OBJECT`"
        },
        {
          "name": "grayscale",
          "short": "Grayscale version of the color",
          "type": "`$OBJECT`"
        },
        {
          "name": "grayscale_without_alpha",
          "short": "Grayscale color without alpha channel",
          "type": "`$OBJECT`"
        },
        {
          "name": "grayscale_without_alpha_contrasted_text",
          "short": "Black or white text color that contrasts with grayscale color",
          "type": "`$OBJECT`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "status",
          "req": true,
          "short": "Status of the API response",
          "type": "`$STRING`"
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
              "rename": {
                "param": {
                  "color": "id"
                }
              },
              "segments": [
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "{id}"
              ]
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
          "short": "Requested base color",
          "type": "`$OBJECT`"
        },
        {
          "name": "base_without_alpha",
          "short": "Base color without alpha channel",
          "type": "`$OBJECT`"
        },
        {
          "name": "base_without_alpha_contrasted_text",
          "short": "Black or white text color that contrasts with base color",
          "type": "`$OBJECT`"
        },
        {
          "name": "complementary",
          "short": "Complementary color",
          "type": "`$OBJECT`"
        },
        {
          "name": "complementary_without_alpha",
          "short": "Complementary color without alpha channel",
          "type": "`$OBJECT`"
        },
        {
          "name": "complementary_without_alpha_contrasted_text",
          "short": "Black or white text color that contrasts with complementary color",
          "type": "`$OBJECT`"
        },
        {
          "name": "grayscale",
          "short": "Grayscale version of the color",
          "type": "`$OBJECT`"
        },
        {
          "name": "grayscale_without_alpha",
          "short": "Grayscale color without alpha channel",
          "type": "`$OBJECT`"
        },
        {
          "name": "grayscale_without_alpha_contrasted_text",
          "short": "Black or white text color that contrasts with grayscale color",
          "type": "`$OBJECT`"
        },
        {
          "name": "status",
          "req": true,
          "short": "Status of the API response",
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
              "segments": [],
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
              "parts": []
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

