# frozen_string_literal: true

# Typed models for the SerialifColor SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# GetColorByPath entity data model.
#
# @!attribute [rw] base
#   @return [Hash, nil]
#
# @!attribute [rw] base_without_alpha
#   @return [Hash, nil]
#
# @!attribute [rw] base_without_alpha_contrasted_text
#   @return [Hash, nil]
#
# @!attribute [rw] complementary
#   @return [Hash, nil]
#
# @!attribute [rw] complementary_without_alpha
#   @return [Hash, nil]
#
# @!attribute [rw] complementary_without_alpha_contrasted_text
#   @return [Hash, nil]
#
# @!attribute [rw] grayscale
#   @return [Hash, nil]
#
# @!attribute [rw] grayscale_without_alpha
#   @return [Hash, nil]
#
# @!attribute [rw] grayscale_without_alpha_contrasted_text
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String]
GetColorByPath = Struct.new(
  :base,
  :base_without_alpha,
  :base_without_alpha_contrasted_text,
  :complementary,
  :complementary_without_alpha,
  :complementary_without_alpha_contrasted_text,
  :grayscale,
  :grayscale_without_alpha,
  :grayscale_without_alpha_contrasted_text,
  :id,
  :status,
  keyword_init: true
)

# Request payload for GetColorByPath#load.
#
# @!attribute [rw] id
#   @return [String]
GetColorByPathLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# GetColorByQuery entity data model.
#
# @!attribute [rw] base
#   @return [Hash, nil]
#
# @!attribute [rw] base_without_alpha
#   @return [Hash, nil]
#
# @!attribute [rw] base_without_alpha_contrasted_text
#   @return [Hash, nil]
#
# @!attribute [rw] complementary
#   @return [Hash, nil]
#
# @!attribute [rw] complementary_without_alpha
#   @return [Hash, nil]
#
# @!attribute [rw] complementary_without_alpha_contrasted_text
#   @return [Hash, nil]
#
# @!attribute [rw] grayscale
#   @return [Hash, nil]
#
# @!attribute [rw] grayscale_without_alpha
#   @return [Hash, nil]
#
# @!attribute [rw] grayscale_without_alpha_contrasted_text
#   @return [Hash, nil]
#
# @!attribute [rw] status
#   @return [String]
GetColorByQuery = Struct.new(
  :base,
  :base_without_alpha,
  :base_without_alpha_contrasted_text,
  :complementary,
  :complementary_without_alpha,
  :complementary_without_alpha_contrasted_text,
  :grayscale,
  :grayscale_without_alpha,
  :grayscale_without_alpha_contrasted_text,
  :status,
  keyword_init: true
)

# Request payload for GetColorByQuery#load.
#
# @!attribute [rw] base
#   @return [Hash, nil]
#
# @!attribute [rw] base_without_alpha
#   @return [Hash, nil]
#
# @!attribute [rw] base_without_alpha_contrasted_text
#   @return [Hash, nil]
#
# @!attribute [rw] complementary
#   @return [Hash, nil]
#
# @!attribute [rw] complementary_without_alpha
#   @return [Hash, nil]
#
# @!attribute [rw] complementary_without_alpha_contrasted_text
#   @return [Hash, nil]
#
# @!attribute [rw] grayscale
#   @return [Hash, nil]
#
# @!attribute [rw] grayscale_without_alpha
#   @return [Hash, nil]
#
# @!attribute [rw] grayscale_without_alpha_contrasted_text
#   @return [Hash, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
GetColorByQueryLoadMatch = Struct.new(
  :base,
  :base_without_alpha,
  :base_without_alpha_contrasted_text,
  :complementary,
  :complementary_without_alpha,
  :complementary_without_alpha_contrasted_text,
  :grayscale,
  :grayscale_without_alpha,
  :grayscale_without_alpha_contrasted_text,
  :status,
  keyword_init: true
)

