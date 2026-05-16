package = "voxgig-sdk-serialif-color"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/serialif-color-sdk.git"
}
description = {
  summary = "SerialifColor SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["serialif-color_sdk"] = "serialif-color_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
