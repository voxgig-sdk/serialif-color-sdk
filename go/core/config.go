package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "SerialifColor",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://color.serialif.com",
			"auth": map[string]any{
				"prefix": "Bearer",
			},
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
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "base_without_alpha",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "base_without_alpha_contrasted_text",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "complementary",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "complementary_without_alpha",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "complementary_without_alpha_contrasted_text",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 5,
					},
					map[string]any{
						"name": "grayscale",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 6,
					},
					map[string]any{
						"name": "grayscale_without_alpha",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 7,
					},
					map[string]any{
						"name": "grayscale_without_alpha_contrasted_text",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 8,
					},
					map[string]any{
						"name": "status",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 9,
					},
				},
				"name": "get_color_by_path",
				"op": map[string]any{
					"load": map[string]any{
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
											"active": true,
										},
									},
								},
								"method": "GET",
								"orig": "/{color}",
								"parts": []any{
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"color": "id",
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
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
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
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "base_without_alpha",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "base_without_alpha_contrasted_text",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "complementary",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "complementary_without_alpha",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "complementary_without_alpha_contrasted_text",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 5,
					},
					map[string]any{
						"name": "grayscale",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 6,
					},
					map[string]any{
						"name": "grayscale_without_alpha",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 7,
					},
					map[string]any{
						"name": "grayscale_without_alpha_contrasted_text",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 8,
					},
					map[string]any{
						"name": "status",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 9,
					},
				},
				"name": "get_color_by_query",
				"op": map[string]any{
					"load": map[string]any{
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
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": "85,102,119",
											"kind": "query",
											"name": "hsl",
											"orig": "hsl",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": "85,102,119,0.53",
											"kind": "query",
											"name": "hsla",
											"orig": "hsla",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": "aquamarine",
											"kind": "query",
											"name": "keyword",
											"orig": "keyword",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": "85,102,119",
											"kind": "query",
											"name": "rgb",
											"orig": "rgb",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": "85,102,119,0.53",
											"kind": "query",
											"name": "rgba",
											"orig": "rgba",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
								"method": "GET",
								"orig": "/",
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
								"active": true,
								"parts": []any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
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
