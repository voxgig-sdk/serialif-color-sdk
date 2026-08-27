# Typed models for the SerialifColor SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class GetColorByPathRequired(TypedDict):
    status: str


class GetColorByPath(GetColorByPathRequired, total=False):
    base: dict
    base_without_alpha: dict
    base_without_alpha_contrasted_text: dict
    complementary: dict
    complementary_without_alpha: dict
    complementary_without_alpha_contrasted_text: dict
    grayscale: dict
    grayscale_without_alpha: dict
    grayscale_without_alpha_contrasted_text: dict
    id: str


class GetColorByPathLoadMatch(TypedDict):
    id: str


class GetColorByQueryRequired(TypedDict):
    status: str


class GetColorByQuery(GetColorByQueryRequired, total=False):
    base: dict
    base_without_alpha: dict
    base_without_alpha_contrasted_text: dict
    complementary: dict
    complementary_without_alpha: dict
    complementary_without_alpha_contrasted_text: dict
    grayscale: dict
    grayscale_without_alpha: dict
    grayscale_without_alpha_contrasted_text: dict


class GetColorByQueryLoadMatch(TypedDict, total=False):
    base: dict
    base_without_alpha: dict
    base_without_alpha_contrasted_text: dict
    complementary: dict
    complementary_without_alpha: dict
    complementary_without_alpha_contrasted_text: dict
    grayscale: dict
    grayscale_without_alpha: dict
    grayscale_without_alpha_contrasted_text: dict
    status: str
