<?php
declare(strict_types=1);

// Typed models for the SerialifColor SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** GetColorByPath entity data model. */
class GetColorByPath
{
    public ?array $base = null;
    public ?array $base_without_alpha = null;
    public ?array $base_without_alpha_contrasted_text = null;
    public ?array $complementary = null;
    public ?array $complementary_without_alpha = null;
    public ?array $complementary_without_alpha_contrasted_text = null;
    public ?array $grayscale = null;
    public ?array $grayscale_without_alpha = null;
    public ?array $grayscale_without_alpha_contrasted_text = null;
    public string $status;
}

/** Request payload for GetColorByPath#load. */
class GetColorByPathLoadMatch
{
    public string $id;
}

/** GetColorByQuery entity data model. */
class GetColorByQuery
{
    public ?array $base = null;
    public ?array $base_without_alpha = null;
    public ?array $base_without_alpha_contrasted_text = null;
    public ?array $complementary = null;
    public ?array $complementary_without_alpha = null;
    public ?array $complementary_without_alpha_contrasted_text = null;
    public ?array $grayscale = null;
    public ?array $grayscale_without_alpha = null;
    public ?array $grayscale_without_alpha_contrasted_text = null;
    public string $status;
}

/** Request payload for GetColorByQuery#load. */
class GetColorByQueryLoadMatch
{
    public ?array $base = null;
    public ?array $base_without_alpha = null;
    public ?array $base_without_alpha_contrasted_text = null;
    public ?array $complementary = null;
    public ?array $complementary_without_alpha = null;
    public ?array $complementary_without_alpha_contrasted_text = null;
    public ?array $grayscale = null;
    public ?array $grayscale_without_alpha = null;
    public ?array $grayscale_without_alpha_contrasted_text = null;
    public ?string $status = null;
}

