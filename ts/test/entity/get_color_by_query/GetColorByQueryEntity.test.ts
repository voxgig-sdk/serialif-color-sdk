

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { SerialifColorSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('GetColorByQueryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SERIALIF_COLOR_TEST_LIVE=TRUE.
  afterEach(liveDelay('SERIALIF_COLOR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SerialifColorSDK.test()
    const ent = testsdk.GetColorByQuery()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SERIALIF_COLOR_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'get_color_by_query.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"base","req":false,"short":"Requested base color","type":"`$OBJECT`","index$":0},{"active":true,"name":"base_without_alpha","req":false,"short":"Base color without alpha channel","type":"`$OBJECT`","index$":1},{"active":true,"name":"base_without_alpha_contrasted_text","req":false,"short":"Black or white text color that contrasts with base color","type":"`$OBJECT`","index$":2},{"active":true,"name":"complementary","req":false,"short":"Complementary color","type":"`$OBJECT`","index$":3},{"active":true,"name":"complementary_without_alpha","req":false,"short":"Complementary color without alpha channel","type":"`$OBJECT`","index$":4},{"active":true,"name":"complementary_without_alpha_contrasted_text","req":false,"short":"Black or white text color that contrasts with complementary color","type":"`$OBJECT`","index$":5},{"active":true,"name":"grayscale","req":false,"short":"Grayscale version of the color","type":"`$OBJECT`","index$":6},{"active":true,"name":"grayscale_without_alpha","req":false,"short":"Grayscale color without alpha channel","type":"`$OBJECT`","index$":7},{"active":true,"name":"grayscale_without_alpha_contrasted_text","req":false,"short":"Black or white text color that contrasts with grayscale color","type":"`$OBJECT`","index$":8},{"active":true,"name":"status","req":true,"short":"Status of the API response","type":"`$STRING`","index$":9}],"name":"get_color_by_query","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"example":"55667788","kind":"query","name":"hex","orig":"hex","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"85,102,119","kind":"query","name":"hsl","orig":"hsl","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":"85,102,119,0.53","kind":"query","name":"hsla","orig":"hsla","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"example":"aquamarine","kind":"query","name":"keyword","orig":"keyword","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"example":"85,102,119","kind":"query","name":"rgb","orig":"rgb","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"example":"85,102,119,0.53","kind":"query","name":"rgba","orig":"rgba","reqd":false,"type":"`$STRING`","index$":5}]},"contract":{"id":"GET /","json":"{\"operationId\":\"getColorByQuery\",\"parameters\":[{\"description\":\"Color keyword (e.g., aquamarine)\",\"example\":\"aquamarine\",\"in\":\"query\",\"name\":\"keyword\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"HEX color value without # (e.g., 55667788)\",\"example\":\"55667788\",\"in\":\"query\",\"name\":\"hex\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"RGB or RGBA color values separated by commas (e.g., 85,102,119 or 85,102,119,0.53)\",\"example\":\"85,102,119\",\"in\":\"query\",\"name\":\"rgb\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"RGBA color values separated by commas (e.g., 85,102,119,0.53)\",\"example\":\"85,102,119,0.53\",\"in\":\"query\",\"name\":\"rgba\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"HSL or HSLA color values separated by commas (e.g., 85,102,119 or 85,102,119,0.53)\",\"example\":\"85,102,119\",\"in\":\"query\",\"name\":\"hsl\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"HSLA color values separated by commas (e.g., 85,102,119,0.53)\",\"example\":\"85,102,119,0.53\",\"in\":\"query\",\"name\":\"hsla\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"base\":{\"description\":\"Requested base color\",\"properties\":{\"hex\":{\"properties\":{\"composition\":{\"properties\":{\"alpha\":{\"description\":\"Alpha component in hex\",\"example\":\"77\",\"type\":\"string\"},\"blue\":{\"description\":\"Blue component in hex\",\"example\":\"5a\",\"type\":\"string\"},\"green\":{\"description\":\"Green component in hex\",\"example\":\"41\",\"type\":\"string\"},\"red\":{\"description\":\"Red component in hex\",\"example\":\"c4\",\"type\":\"string\"}},\"type\":\"object\"},\"value\":{\"description\":\"HEX color value with alpha\",\"example\":\"#c4415a77\",\"type\":\"string\"}},\"type\":\"object\"},\"hsla\":{\"properties\":{\"composition\":{\"properties\":{\"alpha\":{\"description\":\"Alpha component (0-1)\",\"example\":0.46667,\"type\":\"number\"},\"hue\":{\"description\":\"Hue component (0-360)\",\"example\":349,\"type\":\"integer\"},\"lightness\":{\"description\":\"Lightness percentage (0-100)\",\"example\":51,\"type\":\"integer\"},\"saturation\":{\"description\":\"Saturation percentage (0-100)\",\"example\":53,\"type\":\"integer\"}},\"type\":\"object\"},\"value\":{\"description\":\"HSLA color value (rounded)\",\"example\":\"hsla(349, 53%, 51%, 0.47)\",\"type\":\"string\"}},\"type\":\"object\"},\"hsla_raw\":{\"properties\":{\"composition\":{\"properties\":{\"alpha\":{\"description\":\"Alpha component (0-1)\",\"example\":0.46667,\"type\":\"number\"},\"hue\":{\"description\":\"Hue component (precise)\",\"example\":348.54962,\"type\":\"number\"},\"lightness\":{\"description\":\"Lightness percentage (precise)\",\"example\":51.17647,\"type\":\"number\"},\"saturation\":{\"description\":\"Saturation percentage (precise)\",\"example\":52.61044,\"type\":\"number\"}},\"type\":\"object\"},\"value\":{\"description\":\"HSLA color value (raw/unrounded)\",\"example\":\"hsla(348.54962, 52.61044%, 51.17647%, 0.47)\",\"type\":\"string\"}},\"type\":\"object\"},\"keyword\":{\"description\":\"Color keyword name if applicable\",\"type\":\"string\"},\"rgba\":{\"properties\":{\"composition\":{\"properties\":{\"alpha\":{\"description\":\"Alpha component (0-1)\",\"example\":0.46667,\"type\":\"number\"},\"blue\":{\"description\":\"Blue component (0-255)\",\"example\":90,\"type\":\"integer\"},\"green\":{\"description\":\"Green component (0-255)\",\"example\":65,\"type\":\"integer\"},\"red\":{\"description\":\"Red component (0-255)\",\"example\":196,\"type\":\"integer\"}},\"type\":\"object\"},\"value\":{\"description\":\"RGBA color value\",\"example\":\"rgba(196, 65, 90, 0.47)\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"base_without_alpha\":{\"description\":\"Base color without alpha channel\",\"properties\":{\"hex\":{\"properties\":{\"composition\":{\"properties\":{\"blue\":{\"description\":\"Blue component in hex\",\"example\":\"5a\",\"type\":\"string\"},\"green\":{\"description\":\"Green component in hex\",\"example\":\"41\",\"type\":\"string\"},\"red\":{\"description\":\"Red component in hex\",\"example\":\"c4\",\"type\":\"string\"}},\"type\":\"object\"},\"value\":{\"description\":\"HEX color value\",\"example\":\"#c4415a\",\"type\":\"string\"}},\"type\":\"object\"},\"hsl\":{\"properties\":{\"composition\":{\"properties\":{\"hue\":{\"description\":\"Hue component (0-360)\",\"example\":349,\"type\":\"integer\"},\"lightness\":{\"description\":\"Lightness percentage (0-100)\",\"example\":51,\"type\":\"integer\"},\"saturation\":{\"description\":\"Saturation percentage (0-100)\",\"example\":53,\"type\":\"integer\"}},\"type\":\"object\"},\"value\":{\"description\":\"HSL color value (rounded)\",\"example\":\"hsl(349, 53%, 51%)\",\"type\":\"string\"}},\"type\":\"object\"},\"hsl_raw\":{\"properties\":{\"composition\":{\"properties\":{\"hue\":{\"description\":\"Hue component (precise)\",\"example\":348.54962,\"type\":\"number\"},\"lightness\":{\"description\":\"Lightness percentage (precise)\",\"example\":51.17647,\"type\":\"number\"},\"saturation\":{\"description\":\"Saturation percentage (precise)\",\"example\":52.61044,\"type\":\"number\"}},\"type\":\"object\"},\"value\":{\"description\":\"HSL color value (raw/unrounded)\",\"example\":\"hsl(348.54962, 52.61044%, 51.17647%)\",\"type\":\"string\"}},\"type\":\"object\"},\"keyword\":{\"description\":\"Color keyword name if applicable\",\"type\":\"string\"},\"rgb\":{\"properties\":{\"composition\":{\"properties\":{\"blue\":{\"description\":\"Blue component (0-255)\",\"example\":90,\"type\":\"integer\"},\"green\":{\"description\":\"Green component (0-255)\",\"example\":65,\"type\":\"integer\"},\"red\":{\"description\":\"Red component (0-255)\",\"example\":196,\"type\":\"integer\"}},\"type\":\"object\"},\"value\":{\"description\":\"RGB color value\",\"example\":\"rgb(196, 65, 90)\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"base_without_alpha_contrasted_text\":{\"description\":\"Black or white text color that contrasts with base color\",\"properties\":{\"hex\":{\"properties\":{\"composition\":{\"properties\":{\"blue\":{\"description\":\"Blue component in hex\",\"example\":\"5a\",\"type\":\"string\"},\"green\":{\"description\":\"Green component in hex\",\"example\":\"41\",\"type\":\"string\"},\"red\":{\"description\":\"Red component in hex\",\"example\":\"c4\",\"type\":\"string\"}},\"type\":\"object\"},\"value\":{\"description\":\"HEX color value\",\"example\":\"#c4415a\",\"type\":\"string\"}},\"type\":\"object\"},\"hsl\":{\"properties\":{\"composition\":{\"properties\":{\"hue\":{\"description\":\"Hue component (0-360)\",\"example\":349,\"type\":\"integer\"},\"lightness\":{\"description\":\"Lightness percentage (0-100)\",\"example\":51,\"type\":\"integer\"},\"saturation\":{\"description\":\"Saturation percentage (0-100)\",\"example\":53,\"type\":\"integer\"}},\"type\":\"object\"},\"value\":{\"description\":\"HSL color value (rounded)\",\"example\":\"hsl(349, 53%, 51%)\",\"type\":\"string\"}},\"type\":\"object\"},\"hsl_raw\":{\"properties\":{\"composition\":{\"properties\":{\"hue\":{\"description\":\"Hue component (precise)\",\"example\":348.54962,\"type\":\"number\"},\"lightness\":{\"description\":\"Lightness percentage (precise)\",\"example\":51.17647,\"type\":\"number\"},\"saturation\":{\"description\":\"Saturation percentage (precise)\",\"example\":52.61044,\"type\":\"number\"}},\"type\":\"object\"},\"value\":{\"description\":\"HSL color value (raw/unrounded)\",\"example\":\"hsl(348.54962, 52.61044%, 51.17647%)\",\"type\":\"string\"}},\"type\":\"object\"},\"keyword\":{\"description\":\"Color keyword name if applicable\",\"type\":\"string\"},\"rgb\":{\"properties\":{\"composition\":{\"properties\":{\"blue\":{\"description\":\"Blue component (0-255)\",\"example\":90,\"type\":\"integer\"},\"green\":{\"description\":\"Green component (0-255)\",\"example\":65,\"type\":\"integer\"},\"red\":{\"description\":\"Red component (0-255)\",\"example\":196,\"type\":\"integer\"}},\"type\":\"object\"},\"value\":{\"description\":\"RGB color value\",\"example\":\"rgb(196, 65, 90)\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"complementary\":{\"description\":\"Complementary color\",\"properties\":{\"hex\":{\"properties\":{\"composition\":{\"properties\":{\"alpha\":{\"description\":\"Alpha component in hex\",\"example\":\"77\",\"type\":\"string\"},\"blue\":{\"description\":\"Blue component in hex\",\"example\":\"5a\",\"type\":\"string\"},\"green\":{\"description\":\"Green component in hex\",\"example\":\"41\",\"type\":\"string\"},\"red\":{\"description\":\"Red component in hex\",\"example\":\"c4\",\"type\":\"string\"}},\"type\":\"object\"},\"value\":{\"description\":\"HEX color value with alpha\",\"example\":\"#c4415a77\",\"type\":\"string\"}},\"type\":\"object\"},\"hsla\":{\"properties\":{\"composition\":{\"properties\":{\"alpha\":{\"description\":\"Alpha component (0-1)\",\"example\":0.46667,\"type\":\"number\"},\"hue\":{\"description\":\"Hue component (0-360)\",\"example\":349,\"type\":\"integer\"},\"lightness\":{\"description\":\"Lightness percentage (0-100)\",\"example\":51,\"type\":\"integer\"},\"saturation\":{\"description\":\"Saturation percentage (0-100)\",\"example\":53,\"type\":\"integer\"}},\"type\":\"object\"},\"value\":{\"description\":\"HSLA color value (rounded)\",\"example\":\"hsla(349, 53%, 51%, 0.47)\",\"type\":\"string\"}},\"type\":\"object\"},\"hsla_raw\":{\"properties\":{\"composition\":{\"properties\":{\"alpha\":{\"description\":\"Alpha component (0-1)\",\"example\":0.46667,\"type\":\"number\"},\"hue\":{\"description\":\"Hue component (precise)\",\"example\":348.54962,\"type\":\"number\"},\"lightness\":{\"description\":\"Lightness percentage (precise)\",\"example\":51.17647,\"type\":\"number\"},\"saturation\":{\"description\":\"Saturation percentage (precise)\",\"example\":52.61044,\"type\":\"number\"}},\"type\":\"object\"},\"value\":{\"description\":\"HSLA color value (raw/unrounded)\",\"example\":\"hsla(348.54962, 52.61044%, 51.17647%, 0.47)\",\"type\":\"string\"}},\"type\":\"object\"},\"keyword\":{\"description\":\"Color keyword name if applicable\",\"type\":\"string\"},\"rgba\":{\"properties\":{\"composition\":{\"properties\":{\"alpha\":{\"description\":\"Alpha component (0-1)\",\"example\":0.46667,\"type\":\"number\"},\"blue\":{\"description\":\"Blue component (0-255)\",\"example\":90,\"type\":\"integer\"},\"green\":{\"description\":\"Green component (0-255)\",\"example\":65,\"type\":\"integer\"},\"red\":{\"description\":\"Red component (0-255)\",\"example\":196,\"type\":\"integer\"}},\"type\":\"object\"},\"value\":{\"description\":\"RGBA color value\",\"example\":\"rgba(196, 65, 90, 0.47)\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"complementary_without_alpha\":{\"description\":\"Complementary color without alpha channel\",\"properties\":{\"hex\":{\"properties\":{\"composition\":{\"properties\":{\"blue\":{\"description\":\"Blue component in hex\",\"example\":\"5a\",\"type\":\"string\"},\"green\":{\"description\":\"Green component in hex\",\"example\":\"41\",\"type\":\"string\"},\"red\":{\"description\":\"Red component in hex\",\"example\":\"c4\",\"type\":\"string\"}},\"type\":\"object\"},\"value\":{\"description\":\"HEX color value\",\"example\":\"#c4415a\",\"type\":\"string\"}},\"type\":\"object\"},\"hsl\":{\"properties\":{\"composition\":{\"properties\":{\"hue\":{\"description\":\"Hue component (0-360)\",\"example\":349,\"type\":\"integer\"},\"lightness\":{\"description\":\"Lightness percentage (0-100)\",\"example\":51,\"type\":\"integer\"},\"saturation\":{\"description\":\"Saturation percentage (0-100)\",\"example\":53,\"type\":\"integer\"}},\"type\":\"object\"},\"value\":{\"description\":\"HSL color value (rounded)\",\"example\":\"hsl(349, 53%, 51%)\",\"type\":\"string\"}},\"type\":\"object\"},\"hsl_raw\":{\"properties\":{\"composition\":{\"properties\":{\"hue\":{\"description\":\"Hue component (precise)\",\"example\":348.54962,\"type\":\"number\"},\"lightness\":{\"description\":\"Lightness percentage (precise)\",\"example\":51.17647,\"type\":\"number\"},\"saturation\":{\"description\":\"Saturation percentage (precise)\",\"example\":52.61044,\"type\":\"number\"}},\"type\":\"object\"},\"value\":{\"description\":\"HSL color value (raw/unrounded)\",\"example\":\"hsl(348.54962, 52.61044%, 51.17647%)\",\"type\":\"string\"}},\"type\":\"object\"},\"keyword\":{\"description\":\"Color keyword name if applicable\",\"type\":\"string\"},\"rgb\":{\"properties\":{\"composition\":{\"properties\":{\"blue\":{\"description\":\"Blue component (0-255)\",\"example\":90,\"type\":\"integer\"},\"green\":{\"description\":\"Green component (0-255)\",\"example\":65,\"type\":\"integer\"},\"red\":{\"description\":\"Red component (0-255)\",\"example\":196,\"type\":\"integer\"}},\"type\":\"object\"},\"value\":{\"description\":\"RGB color value\",\"example\":\"rgb(196, 65, 90)\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"complementary_without_alpha_contrasted_text\":{\"description\":\"Black or white text color that contrasts with complementary color\",\"properties\":{\"hex\":{\"properties\":{\"composition\":{\"properties\":{\"blue\":{\"description\":\"Blue component in hex\",\"example\":\"5a\",\"type\":\"string\"},\"green\":{\"description\":\"Green component in hex\",\"example\":\"41\",\"type\":\"string\"},\"red\":{\"description\":\"Red component in hex\",\"example\":\"c4\",\"type\":\"string\"}},\"type\":\"object\"},\"value\":{\"description\":\"HEX color value\",\"example\":\"#c4415a\",\"type\":\"string\"}},\"type\":\"object\"},\"hsl\":{\"properties\":{\"composition\":{\"properties\":{\"hue\":{\"description\":\"Hue component (0-360)\",\"example\":349,\"type\":\"integer\"},\"lightness\":{\"description\":\"Lightness percentage (0-100)\",\"example\":51,\"type\":\"integer\"},\"saturation\":{\"description\":\"Saturation percentage (0-100)\",\"example\":53,\"type\":\"integer\"}},\"type\":\"object\"},\"value\":{\"description\":\"HSL color value (rounded)\",\"example\":\"hsl(349, 53%, 51%)\",\"type\":\"string\"}},\"type\":\"object\"},\"hsl_raw\":{\"properties\":{\"composition\":{\"properties\":{\"hue\":{\"description\":\"Hue component (precise)\",\"example\":348.54962,\"type\":\"number\"},\"lightness\":{\"description\":\"Lightness percentage (precise)\",\"example\":51.17647,\"type\":\"number\"},\"saturation\":{\"description\":\"Saturation percentage (precise)\",\"example\":52.61044,\"type\":\"number\"}},\"type\":\"object\"},\"value\":{\"description\":\"HSL color value (raw/unrounded)\",\"example\":\"hsl(348.54962, 52.61044%, 51.17647%)\",\"type\":\"string\"}},\"type\":\"object\"},\"keyword\":{\"description\":\"Color keyword name if applicable\",\"type\":\"string\"},\"rgb\":{\"properties\":{\"composition\":{\"properties\":{\"blue\":{\"description\":\"Blue component (0-255)\",\"example\":90,\"type\":\"integer\"},\"green\":{\"description\":\"Green component (0-255)\",\"example\":65,\"type\":\"integer\"},\"red\":{\"description\":\"Red component (0-255)\",\"example\":196,\"type\":\"integer\"}},\"type\":\"object\"},\"value\":{\"description\":\"RGB color value\",\"example\":\"rgb(196, 65, 90)\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"grayscale\":{\"description\":\"Grayscale version of the color\",\"properties\":{\"hex\":{\"properties\":{\"composition\":{\"properties\":{\"alpha\":{\"description\":\"Alpha component in hex\",\"example\":\"77\",\"type\":\"string\"},\"blue\":{\"description\":\"Blue component in hex\",\"example\":\"5a\",\"type\":\"string\"},\"green\":{\"description\":\"Green component in hex\",\"example\":\"41\",\"type\":\"string\"},\"red\":{\"description\":\"Red component in hex\",\"example\":\"c4\",\"type\":\"string\"}},\"type\":\"object\"},\"value\":{\"description\":\"HEX color value with alpha\",\"example\":\"#c4415a77\",\"type\":\"string\"}},\"type\":\"object\"},\"hsla\":{\"properties\":{\"composition\":{\"properties\":{\"alpha\":{\"description\":\"Alpha component (0-1)\",\"example\":0.46667,\"type\":\"number\"},\"hue\":{\"description\":\"Hue component (0-360)\",\"example\":349,\"type\":\"integer\"},\"lightness\":{\"description\":\"Lightness percentage (0-100)\",\"example\":51,\"type\":\"integer\"},\"saturation\":{\"description\":\"Saturation percentage (0-100)\",\"example\":53,\"type\":\"integer\"}},\"type\":\"object\"},\"value\":{\"description\":\"HSLA color value (rounded)\",\"example\":\"hsla(349, 53%, 51%, 0.47)\",\"type\":\"string\"}},\"type\":\"object\"},\"hsla_raw\":{\"properties\":{\"composition\":{\"properties\":{\"alpha\":{\"description\":\"Alpha component (0-1)\",\"example\":0.46667,\"type\":\"number\"},\"hue\":{\"description\":\"Hue component (precise)\",\"example\":348.54962,\"type\":\"number\"},\"lightness\":{\"description\":\"Lightness percentage (precise)\",\"example\":51.17647,\"type\":\"number\"},\"saturation\":{\"description\":\"Saturation percentage (precise)\",\"example\":52.61044,\"type\":\"number\"}},\"type\":\"object\"},\"value\":{\"description\":\"HSLA color value (raw/unrounded)\",\"example\":\"hsla(348.54962, 52.61044%, 51.17647%, 0.47)\",\"type\":\"string\"}},\"type\":\"object\"},\"keyword\":{\"description\":\"Color keyword name if applicable\",\"type\":\"string\"},\"rgba\":{\"properties\":{\"composition\":{\"properties\":{\"alpha\":{\"description\":\"Alpha component (0-1)\",\"example\":0.46667,\"type\":\"number\"},\"blue\":{\"description\":\"Blue component (0-255)\",\"example\":90,\"type\":\"integer\"},\"green\":{\"description\":\"Green component (0-255)\",\"example\":65,\"type\":\"integer\"},\"red\":{\"description\":\"Red component (0-255)\",\"example\":196,\"type\":\"integer\"}},\"type\":\"object\"},\"value\":{\"description\":\"RGBA color value\",\"example\":\"rgba(196, 65, 90, 0.47)\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"grayscale_without_alpha\":{\"description\":\"Grayscale color without alpha channel\",\"properties\":{\"hex\":{\"properties\":{\"composition\":{\"properties\":{\"blue\":{\"description\":\"Blue component in hex\",\"example\":\"5a\",\"type\":\"string\"},\"green\":{\"description\":\"Green component in hex\",\"example\":\"41\",\"type\":\"string\"},\"red\":{\"description\":\"Red component in hex\",\"example\":\"c4\",\"type\":\"string\"}},\"type\":\"object\"},\"value\":{\"description\":\"HEX color value\",\"example\":\"#c4415a\",\"type\":\"string\"}},\"type\":\"object\"},\"hsl\":{\"properties\":{\"composition\":{\"properties\":{\"hue\":{\"description\":\"Hue component (0-360)\",\"example\":349,\"type\":\"integer\"},\"lightness\":{\"description\":\"Lightness percentage (0-100)\",\"example\":51,\"type\":\"integer\"},\"saturation\":{\"description\":\"Saturation percentage (0-100)\",\"example\":53,\"type\":\"integer\"}},\"type\":\"object\"},\"value\":{\"description\":\"HSL color value (rounded)\",\"example\":\"hsl(349, 53%, 51%)\",\"type\":\"string\"}},\"type\":\"object\"},\"hsl_raw\":{\"properties\":{\"composition\":{\"properties\":{\"hue\":{\"description\":\"Hue component (precise)\",\"example\":348.54962,\"type\":\"number\"},\"lightness\":{\"description\":\"Lightness percentage (precise)\",\"example\":51.17647,\"type\":\"number\"},\"saturation\":{\"description\":\"Saturation percentage (precise)\",\"example\":52.61044,\"type\":\"number\"}},\"type\":\"object\"},\"value\":{\"description\":\"HSL color value (raw/unrounded)\",\"example\":\"hsl(348.54962, 52.61044%, 51.17647%)\",\"type\":\"string\"}},\"type\":\"object\"},\"keyword\":{\"description\":\"Color keyword name if applicable\",\"type\":\"string\"},\"rgb\":{\"properties\":{\"composition\":{\"properties\":{\"blue\":{\"description\":\"Blue component (0-255)\",\"example\":90,\"type\":\"integer\"},\"green\":{\"description\":\"Green component (0-255)\",\"example\":65,\"type\":\"integer\"},\"red\":{\"description\":\"Red component (0-255)\",\"example\":196,\"type\":\"integer\"}},\"type\":\"object\"},\"value\":{\"description\":\"RGB color value\",\"example\":\"rgb(196, 65, 90)\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"grayscale_without_alpha_contrasted_text\":{\"description\":\"Black or white text color that contrasts with grayscale color\",\"properties\":{\"hex\":{\"properties\":{\"composition\":{\"properties\":{\"blue\":{\"description\":\"Blue component in hex\",\"example\":\"5a\",\"type\":\"string\"},\"green\":{\"description\":\"Green component in hex\",\"example\":\"41\",\"type\":\"string\"},\"red\":{\"description\":\"Red component in hex\",\"example\":\"c4\",\"type\":\"string\"}},\"type\":\"object\"},\"value\":{\"description\":\"HEX color value\",\"example\":\"#c4415a\",\"type\":\"string\"}},\"type\":\"object\"},\"hsl\":{\"properties\":{\"composition\":{\"properties\":{\"hue\":{\"description\":\"Hue component (0-360)\",\"example\":349,\"type\":\"integer\"},\"lightness\":{\"description\":\"Lightness percentage (0-100)\",\"example\":51,\"type\":\"integer\"},\"saturation\":{\"description\":\"Saturation percentage (0-100)\",\"example\":53,\"type\":\"integer\"}},\"type\":\"object\"},\"value\":{\"description\":\"HSL color value (rounded)\",\"example\":\"hsl(349, 53%, 51%)\",\"type\":\"string\"}},\"type\":\"object\"},\"hsl_raw\":{\"properties\":{\"composition\":{\"properties\":{\"hue\":{\"description\":\"Hue component (precise)\",\"example\":348.54962,\"type\":\"number\"},\"lightness\":{\"description\":\"Lightness percentage (precise)\",\"example\":51.17647,\"type\":\"number\"},\"saturation\":{\"description\":\"Saturation percentage (precise)\",\"example\":52.61044,\"type\":\"number\"}},\"type\":\"object\"},\"value\":{\"description\":\"HSL color value (raw/unrounded)\",\"example\":\"hsl(348.54962, 52.61044%, 51.17647%)\",\"type\":\"string\"}},\"type\":\"object\"},\"keyword\":{\"description\":\"Color keyword name if applicable\",\"type\":\"string\"},\"rgb\":{\"properties\":{\"composition\":{\"properties\":{\"blue\":{\"description\":\"Blue component (0-255)\",\"example\":90,\"type\":\"integer\"},\"green\":{\"description\":\"Green component (0-255)\",\"example\":65,\"type\":\"integer\"},\"red\":{\"description\":\"Red component (0-255)\",\"example\":196,\"type\":\"integer\"}},\"type\":\"object\"},\"value\":{\"description\":\"RGB color value\",\"example\":\"rgb(196, 65, 90)\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"status\":{\"description\":\"Status of the API response\",\"enum\":[\"success\"],\"type\":\"string\"}},\"required\":[\"status\"],\"type\":\"object\"}}},\"description\":\"Successful response with color information\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"message\":{\"description\":\"Error message\",\"example\":\"not a valid KEYWORD color\",\"type\":\"string\"},\"type\":{\"description\":\"Type of error\",\"example\":\"wrong color format\",\"type\":\"string\"},\"value\":{\"description\":\"The invalid value that was provided\",\"example\":\"yellou\",\"type\":\"string\"}},\"type\":\"object\"},\"status\":{\"description\":\"Status of the API response\",\"enum\":[\"error\"],\"type\":\"string\"}},\"required\":[\"status\",\"error\"],\"type\":\"object\"}}},\"description\":\"Invalid color format\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/","segments":[],"select":{"exist":["hex","hsl","hsla","keyword","rgb","rgba"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"get_color_by_query","name__orig":"get_color_by_query","Name":"GetColorByQuery","name_":"get_color_by_query","name-":"get-color-by-query","NAME":"GET_COLOR_BY_QUERY","index$":1}, {"active":true,"entity":"get_color_by_query","key$":"BasicGetColorByQueryFlow","kind":"basic","name":"BasicGetColorByQueryFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"get_color_by_query_ref01","srcdatavar":"get_color_by_query_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-get_color_by_query_ref01"}}],"index$":0}]}, 'GetColorByQuery')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let get_color_by_query_ref01_data = Object.values(setup.data.existing.get_color_by_query)[0] as any

    // LOAD
    const get_color_by_query_ref01_ent = client.GetColorByQuery()
    const get_color_by_query_ref01_match_dt0: any = {}
    const get_color_by_query_ref01_data_dt0 = (await get_color_by_query_ref01_ent.load(get_color_by_query_ref01_match_dt0)).data()
    assert(null != get_color_by_query_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/get_color_by_query/GetColorByQueryTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = SerialifColorSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['get_color_by_query01','get_color_by_query02','get_color_by_query03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SERIALIF_COLOR_TEST_GET_COLOR_BY_QUERY_ENTID': idmap,
    'SERIALIF_COLOR_TEST_LIVE': 'FALSE',
    'SERIALIF_COLOR_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['SERIALIF_COLOR_TEST_GET_COLOR_BY_QUERY_ENTID']

  const live = 'TRUE' === env.SERIALIF_COLOR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SERIALIF_COLOR_TEST_GET_COLOR_BY_QUERY_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new SerialifColorSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.SERIALIF_COLOR_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
