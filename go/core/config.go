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
						"active": true,
						"name": "base",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "base_without_alpha",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "base_without_alpha_contrasted_text",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "complementary",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "complementary_without_alpha",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "complementary_without_alpha_contrasted_text",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "grayscale",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "grayscale_without_alpha",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "grayscale_without_alpha_contrasted_text",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "status",
						"req": true,
						"type": "`$STRING`",
						"index$": 9,
					},
				},
				"name": "get_color_by_path",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "aquamarine",
											"kind": "param",
											"name": "id",
											"orig": "color",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
							},
						},
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
						"active": true,
						"name": "base",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "base_without_alpha",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "base_without_alpha_contrasted_text",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "complementary",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "complementary_without_alpha",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "complementary_without_alpha_contrasted_text",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "grayscale",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "grayscale_without_alpha",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "grayscale_without_alpha_contrasted_text",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "status",
						"req": true,
						"type": "`$STRING`",
						"index$": 9,
					},
				},
				"name": "get_color_by_query",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"example": "55667788",
											"kind": "query",
											"name": "hex",
											"orig": "hex",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "85,102,119",
											"kind": "query",
											"name": "hsl",
											"orig": "hsl",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "85,102,119,0.53",
											"kind": "query",
											"name": "hsla",
											"orig": "hsla",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "aquamarine",
											"kind": "query",
											"name": "keyword",
											"orig": "keyword",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "85,102,119",
											"kind": "query",
											"name": "rgb",
											"orig": "rgb",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "85,102,119,0.53",
											"kind": "query",
											"name": "rgba",
											"orig": "rgba",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
								"method": "GET",
								"orig": "/",
								"parts": []any{},
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
								"index$": 0,
							},
						},
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
