<?php
declare(strict_types=1);

// SerialifColor SDK configuration

class SerialifColorConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "SerialifColor",
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
              'active' => true,
              'name' => 'base',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'base_without_alpha',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'base_without_alpha_contrasted_text',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'complementary',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'complementary_without_alpha',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'complementary_without_alpha_contrasted_text',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'grayscale',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'grayscale_without_alpha',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'grayscale_without_alpha_contrasted_text',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'status',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 9,
            ],
          ],
          'name' => 'get_color_by_path',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'aquamarine',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'color',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
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
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'get_color_by_query' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'base',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'base_without_alpha',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'base_without_alpha_contrasted_text',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'complementary',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'complementary_without_alpha',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'complementary_without_alpha_contrasted_text',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'grayscale',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'grayscale_without_alpha',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'grayscale_without_alpha_contrasted_text',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'status',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 9,
            ],
          ],
          'name' => 'get_color_by_query',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => '55667788',
                        'kind' => 'query',
                        'name' => 'hex',
                        'orig' => 'hex',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => '85,102,119',
                        'kind' => 'query',
                        'name' => 'hsl',
                        'orig' => 'hsl',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => '85,102,119,0.53',
                        'kind' => 'query',
                        'name' => 'hsla',
                        'orig' => 'hsla',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 'aquamarine',
                        'kind' => 'query',
                        'name' => 'keyword',
                        'orig' => 'keyword',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => '85,102,119',
                        'kind' => 'query',
                        'name' => 'rgb',
                        'orig' => 'rgb',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => '85,102,119,0.53',
                        'kind' => 'query',
                        'name' => 'rgba',
                        'orig' => 'rgba',
                        'reqd' => false,
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
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
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
