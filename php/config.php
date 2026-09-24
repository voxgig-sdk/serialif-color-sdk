<?php
declare(strict_types=1);

// SerialifColor SDK configuration

class SerialifColorConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "SerialifColor",
                "slug" => "serialif-color",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://color.serialif.com",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "get_color_by_path" => [],
                    "get_color_by_query" => [],
                ],
            ],
            "entity" => [
        'get_color_by_path' => [
          'fields' => [
            [
              'name' => 'base',
              'title' => 'Base',
              'type' => '`$OBJECT`',
              'short' => 'Requested base color',
            ],
            [
              'name' => 'base_without_alpha',
              'title' => 'Base Without Alpha',
              'type' => '`$OBJECT`',
              'short' => 'Base color without alpha channel',
            ],
            [
              'name' => 'base_without_alpha_contrasted_text',
              'title' => 'Base Without Alpha Contrasted Text',
              'type' => '`$OBJECT`',
              'short' => 'Black or white text color that contrasts with base color',
            ],
            [
              'name' => 'complementary',
              'title' => 'Complementary',
              'type' => '`$OBJECT`',
              'short' => 'Complementary color',
            ],
            [
              'name' => 'complementary_without_alpha',
              'title' => 'Complementary Without Alpha',
              'type' => '`$OBJECT`',
              'short' => 'Complementary color without alpha channel',
            ],
            [
              'name' => 'complementary_without_alpha_contrasted_text',
              'title' => 'Complementary Without Alpha Contrasted Text',
              'type' => '`$OBJECT`',
              'short' => 'Black or white text color that contrasts with complementary color',
            ],
            [
              'name' => 'grayscale',
              'title' => 'Grayscale',
              'type' => '`$OBJECT`',
              'short' => 'Grayscale version of the color',
            ],
            [
              'name' => 'grayscale_without_alpha',
              'title' => 'Grayscale Without Alpha',
              'type' => '`$OBJECT`',
              'short' => 'Grayscale color without alpha channel',
            ],
            [
              'name' => 'grayscale_without_alpha_contrasted_text',
              'title' => 'Grayscale Without Alpha Contrasted Text',
              'type' => '`$OBJECT`',
              'short' => 'Black or white text color that contrasts with grayscale color',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Status of the API response',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'get_color_by_path',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/{color}',
                  'segments' => [
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'color' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'color',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 'aquamarine',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'get_color_by_query' => [
          'fields' => [
            [
              'name' => 'base',
              'title' => 'Base',
              'type' => '`$OBJECT`',
              'short' => 'Requested base color',
            ],
            [
              'name' => 'base_without_alpha',
              'title' => 'Base Without Alpha',
              'type' => '`$OBJECT`',
              'short' => 'Base color without alpha channel',
            ],
            [
              'name' => 'base_without_alpha_contrasted_text',
              'title' => 'Base Without Alpha Contrasted Text',
              'type' => '`$OBJECT`',
              'short' => 'Black or white text color that contrasts with base color',
            ],
            [
              'name' => 'complementary',
              'title' => 'Complementary',
              'type' => '`$OBJECT`',
              'short' => 'Complementary color',
            ],
            [
              'name' => 'complementary_without_alpha',
              'title' => 'Complementary Without Alpha',
              'type' => '`$OBJECT`',
              'short' => 'Complementary color without alpha channel',
            ],
            [
              'name' => 'complementary_without_alpha_contrasted_text',
              'title' => 'Complementary Without Alpha Contrasted Text',
              'type' => '`$OBJECT`',
              'short' => 'Black or white text color that contrasts with complementary color',
            ],
            [
              'name' => 'grayscale',
              'title' => 'Grayscale',
              'type' => '`$OBJECT`',
              'short' => 'Grayscale version of the color',
            ],
            [
              'name' => 'grayscale_without_alpha',
              'title' => 'Grayscale Without Alpha',
              'type' => '`$OBJECT`',
              'short' => 'Grayscale color without alpha channel',
            ],
            [
              'name' => 'grayscale_without_alpha_contrasted_text',
              'title' => 'Grayscale Without Alpha Contrasted Text',
              'type' => '`$OBJECT`',
              'short' => 'Black or white text color that contrasts with grayscale color',
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Status of the API response',
            ],
          ],
          'name' => 'get_color_by_query',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/',
                  'segments' => [],
                  'parts' => [],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'hex',
                        'orig' => 'hex',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => '55667788',
                      ],
                      [
                        'name' => 'hsl',
                        'orig' => 'hsl',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => '85,102,119',
                      ],
                      [
                        'name' => 'hsla',
                        'orig' => 'hsla',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => '85,102,119,0.53',
                      ],
                      [
                        'name' => 'keyword',
                        'orig' => 'keyword',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'aquamarine',
                      ],
                      [
                        'name' => 'rgb',
                        'orig' => 'rgb',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => '85,102,119',
                      ],
                      [
                        'name' => 'rgba',
                        'orig' => 'rgba',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => '85,102,119,0.53',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'hex',
                      'hsl',
                      'hsla',
                      'keyword',
                      'rgb',
                      'rgba',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return SerialifColorFeatures::make_feature($name);
    }
}
