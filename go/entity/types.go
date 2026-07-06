// Typed models for the SerialifColor SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// GetColorByPath is the typed data model for the get_color_by_path entity.
type GetColorByPath struct {
	Base *map[string]any `json:"base,omitempty"`
	BaseWithoutAlpha *map[string]any `json:"base_without_alpha,omitempty"`
	BaseWithoutAlphaContrastedText *map[string]any `json:"base_without_alpha_contrasted_text,omitempty"`
	Complementary *map[string]any `json:"complementary,omitempty"`
	ComplementaryWithoutAlpha *map[string]any `json:"complementary_without_alpha,omitempty"`
	ComplementaryWithoutAlphaContrastedText *map[string]any `json:"complementary_without_alpha_contrasted_text,omitempty"`
	Grayscale *map[string]any `json:"grayscale,omitempty"`
	GrayscaleWithoutAlpha *map[string]any `json:"grayscale_without_alpha,omitempty"`
	GrayscaleWithoutAlphaContrastedText *map[string]any `json:"grayscale_without_alpha_contrasted_text,omitempty"`
	Status string `json:"status"`
}

// GetColorByPathLoadMatch is the typed request payload for GetColorByPath.LoadTyped.
type GetColorByPathLoadMatch struct {
	Id string `json:"id"`
}

// GetColorByQuery is the typed data model for the get_color_by_query entity.
type GetColorByQuery struct {
	Base *map[string]any `json:"base,omitempty"`
	BaseWithoutAlpha *map[string]any `json:"base_without_alpha,omitempty"`
	BaseWithoutAlphaContrastedText *map[string]any `json:"base_without_alpha_contrasted_text,omitempty"`
	Complementary *map[string]any `json:"complementary,omitempty"`
	ComplementaryWithoutAlpha *map[string]any `json:"complementary_without_alpha,omitempty"`
	ComplementaryWithoutAlphaContrastedText *map[string]any `json:"complementary_without_alpha_contrasted_text,omitempty"`
	Grayscale *map[string]any `json:"grayscale,omitempty"`
	GrayscaleWithoutAlpha *map[string]any `json:"grayscale_without_alpha,omitempty"`
	GrayscaleWithoutAlphaContrastedText *map[string]any `json:"grayscale_without_alpha_contrasted_text,omitempty"`
	Status string `json:"status"`
}

// GetColorByQueryLoadMatch is the typed request payload for GetColorByQuery.LoadTyped.
type GetColorByQueryLoadMatch struct {
	Base *map[string]any `json:"base,omitempty"`
	BaseWithoutAlpha *map[string]any `json:"base_without_alpha,omitempty"`
	BaseWithoutAlphaContrastedText *map[string]any `json:"base_without_alpha_contrasted_text,omitempty"`
	Complementary *map[string]any `json:"complementary,omitempty"`
	ComplementaryWithoutAlpha *map[string]any `json:"complementary_without_alpha,omitempty"`
	ComplementaryWithoutAlphaContrastedText *map[string]any `json:"complementary_without_alpha_contrasted_text,omitempty"`
	Grayscale *map[string]any `json:"grayscale,omitempty"`
	GrayscaleWithoutAlpha *map[string]any `json:"grayscale_without_alpha,omitempty"`
	GrayscaleWithoutAlphaContrastedText *map[string]any `json:"grayscale_without_alpha_contrasted_text,omitempty"`
	Status *string `json:"status,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
