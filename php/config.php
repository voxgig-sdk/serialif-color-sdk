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
                "test" => [
          'options' => [
            'active' => false,
          ],
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
              'short' => 'Requested base color',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'base_without_alpha',
              'short' => 'Base color without alpha channel',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'base_without_alpha_contrasted_text',
              'short' => 'Black or white text color that contrasts with base color',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'complementary',
              'short' => 'Complementary color',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'complementary_without_alpha',
              'short' => 'Complementary color without alpha channel',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'complementary_without_alpha_contrasted_text',
              'short' => 'Black or white text color that contrasts with complementary color',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'grayscale',
              'short' => 'Grayscale version of the color',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'grayscale_without_alpha',
              'short' => 'Grayscale color without alpha channel',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'grayscale_without_alpha_contrasted_text',
              'short' => 'Black or white text color that contrasts with grayscale color',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'status',
              'req' => true,
              'short' => 'Status of the API response',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'get_color_by_path',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 'aquamarine',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'color',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/{color}',
                  'parts' => [
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'color' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
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
              'short' => 'Requested base color',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'base_without_alpha',
              'short' => 'Base color without alpha channel',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'base_without_alpha_contrasted_text',
              'short' => 'Black or white text color that contrasts with base color',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'complementary',
              'short' => 'Complementary color',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'complementary_without_alpha',
              'short' => 'Complementary color without alpha channel',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'complementary_without_alpha_contrasted_text',
              'short' => 'Black or white text color that contrasts with complementary color',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'grayscale',
              'short' => 'Grayscale version of the color',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'grayscale_without_alpha',
              'short' => 'Grayscale color without alpha channel',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'grayscale_without_alpha_contrasted_text',
              'short' => 'Black or white text color that contrasts with grayscale color',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'status',
              'req' => true,
              'short' => 'Status of the API response',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'get_color_by_query',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => '55667788',
                        'kind' => 'query',
                        'name' => 'hex',
                        'orig' => 'hex',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => '85,102,119',
                        'kind' => 'query',
                        'name' => 'hsl',
                        'orig' => 'hsl',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => '85,102,119,0.53',
                        'kind' => 'query',
                        'name' => 'hsla',
                        'orig' => 'hsla',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'aquamarine',
                        'kind' => 'query',
                        'name' => 'keyword',
                        'orig' => 'keyword',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => '85,102,119',
                        'kind' => 'query',
                        'name' => 'rgb',
                        'orig' => 'rgb',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => '85,102,119,0.53',
                        'kind' => 'query',
                        'name' => 'rgba',
                        'orig' => 'rgba',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/',
                  'parts' => [],
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
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
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
