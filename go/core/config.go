package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "SerialifColor",
			"slug": "serialif-color",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://color.serialif.com",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"get_color_by_path": map[string]any{},
				"get_color_by_query": map[string]any{},
			},
		},
		"entity": map[string]any{
			"get_color_by_path": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "base",
						"short": "Requested base color",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "base_without_alpha",
						"short": "Base color without alpha channel",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "base_without_alpha_contrasted_text",
						"short": "Black or white text color that contrasts with base color",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "complementary",
						"short": "Complementary color",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "complementary_without_alpha",
						"short": "Complementary color without alpha channel",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "complementary_without_alpha_contrasted_text",
						"short": "Black or white text color that contrasts with complementary color",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "grayscale",
						"short": "Grayscale version of the color",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "grayscale_without_alpha",
						"short": "Grayscale color without alpha channel",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "grayscale_without_alpha_contrasted_text",
						"short": "Black or white text color that contrasts with grayscale color",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "Status of the API response",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "get_color_by_path",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "aquamarine",
											"kind": "param",
											"name": "id",
											"orig": "color",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/{color}",
								"rename": map[string]any{
									"param": map[string]any{
										"color": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"get_color_by_query": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "base",
						"short": "Requested base color",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "base_without_alpha",
						"short": "Base color without alpha channel",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "base_without_alpha_contrasted_text",
						"short": "Black or white text color that contrasts with base color",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "complementary",
						"short": "Complementary color",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "complementary_without_alpha",
						"short": "Complementary color without alpha channel",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "complementary_without_alpha_contrasted_text",
						"short": "Black or white text color that contrasts with complementary color",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "grayscale",
						"short": "Grayscale version of the color",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "grayscale_without_alpha",
						"short": "Grayscale color without alpha channel",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "grayscale_without_alpha_contrasted_text",
						"short": "Black or white text color that contrasts with grayscale color",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "Status of the API response",
						"type": "`$STRING`",
					},
				},
				"name": "get_color_by_query",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "55667788",
											"kind": "query",
											"name": "hex",
											"orig": "hex",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "85,102,119",
											"kind": "query",
											"name": "hsl",
											"orig": "hsl",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "85,102,119,0.53",
											"kind": "query",
											"name": "hsla",
											"orig": "hsla",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "aquamarine",
											"kind": "query",
											"name": "keyword",
											"orig": "keyword",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "85,102,119",
											"kind": "query",
											"name": "rgb",
											"orig": "rgb",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "85,102,119,0.53",
											"kind": "query",
											"name": "rgba",
											"orig": "rgba",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/",
								"segments": []any{},
								"select": map[string]any{
									"exist": []any{
										"hex",
										"hsl",
										"hsla",
										"keyword",
										"rgb",
										"rgba",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
