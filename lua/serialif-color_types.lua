-- Typed models for the SerialifColor SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class GetColorByPath
---@field base? table
---@field base_without_alpha? table
---@field base_without_alpha_contrasted_text? table
---@field complementary? table
---@field complementary_without_alpha? table
---@field complementary_without_alpha_contrasted_text? table
---@field grayscale? table
---@field grayscale_without_alpha? table
---@field grayscale_without_alpha_contrasted_text? table
---@field status string

---@class GetColorByPathLoadMatch
---@field id string

---@class GetColorByQuery
---@field base? table
---@field base_without_alpha? table
---@field base_without_alpha_contrasted_text? table
---@field complementary? table
---@field complementary_without_alpha? table
---@field complementary_without_alpha_contrasted_text? table
---@field grayscale? table
---@field grayscale_without_alpha? table
---@field grayscale_without_alpha_contrasted_text? table
---@field status string

---@class GetColorByQueryLoadMatch

local M = {}

return M
