// Typed models for the SerialifColor SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface GetColorByPath {
  base?: Record<string, any>
  base_without_alpha?: Record<string, any>
  base_without_alpha_contrasted_text?: Record<string, any>
  complementary?: Record<string, any>
  complementary_without_alpha?: Record<string, any>
  complementary_without_alpha_contrasted_text?: Record<string, any>
  grayscale?: Record<string, any>
  grayscale_without_alpha?: Record<string, any>
  grayscale_without_alpha_contrasted_text?: Record<string, any>
  id?: string
  status: string
}

export interface GetColorByPathLoadMatch {
  id: string
}

export interface GetColorByQuery {
  base?: Record<string, any>
  base_without_alpha?: Record<string, any>
  base_without_alpha_contrasted_text?: Record<string, any>
  complementary?: Record<string, any>
  complementary_without_alpha?: Record<string, any>
  complementary_without_alpha_contrasted_text?: Record<string, any>
  grayscale?: Record<string, any>
  grayscale_without_alpha?: Record<string, any>
  grayscale_without_alpha_contrasted_text?: Record<string, any>
  status: string
}

export interface GetColorByQueryLoadMatch {
  base?: Record<string, any>
  base_without_alpha?: Record<string, any>
  base_without_alpha_contrasted_text?: Record<string, any>
  complementary?: Record<string, any>
  complementary_without_alpha?: Record<string, any>
  complementary_without_alpha_contrasted_text?: Record<string, any>
  grayscale?: Record<string, any>
  grayscale_without_alpha?: Record<string, any>
  grayscale_without_alpha_contrasted_text?: Record<string, any>
  status?: string
}

