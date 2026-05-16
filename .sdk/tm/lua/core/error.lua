-- SerialifColor SDK error

local SerialifColorError = {}
SerialifColorError.__index = SerialifColorError


function SerialifColorError.new(code, msg, ctx)
  local self = setmetatable({}, SerialifColorError)
  self.is_sdk_error = true
  self.sdk = "SerialifColor"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function SerialifColorError:error()
  return self.msg
end


function SerialifColorError:__tostring()
  return self.msg
end


return SerialifColorError
