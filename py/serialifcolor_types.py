# Typed models for the SerialifColor SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class GetColorByPath:
    status: str
    base: Optional[dict] = None
    base_without_alpha: Optional[dict] = None
    base_without_alpha_contrasted_text: Optional[dict] = None
    complementary: Optional[dict] = None
    complementary_without_alpha: Optional[dict] = None
    complementary_without_alpha_contrasted_text: Optional[dict] = None
    grayscale: Optional[dict] = None
    grayscale_without_alpha: Optional[dict] = None
    grayscale_without_alpha_contrasted_text: Optional[dict] = None


@dataclass
class GetColorByPathLoadMatch:
    id: str


@dataclass
class GetColorByQuery:
    status: str
    base: Optional[dict] = None
    base_without_alpha: Optional[dict] = None
    base_without_alpha_contrasted_text: Optional[dict] = None
    complementary: Optional[dict] = None
    complementary_without_alpha: Optional[dict] = None
    complementary_without_alpha_contrasted_text: Optional[dict] = None
    grayscale: Optional[dict] = None
    grayscale_without_alpha: Optional[dict] = None
    grayscale_without_alpha_contrasted_text: Optional[dict] = None


@dataclass
class GetColorByQueryLoadMatch:
    base: Optional[dict] = None
    base_without_alpha: Optional[dict] = None
    base_without_alpha_contrasted_text: Optional[dict] = None
    complementary: Optional[dict] = None
    complementary_without_alpha: Optional[dict] = None
    complementary_without_alpha_contrasted_text: Optional[dict] = None
    grayscale: Optional[dict] = None
    grayscale_without_alpha: Optional[dict] = None
    grayscale_without_alpha_contrasted_text: Optional[dict] = None
    status: Optional[str] = None

