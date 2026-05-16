# SerialifColor SDK utility: make_context
require_relative '../core/context'
module SerialifColorUtilities
  MakeContext = ->(ctxmap, basectx) {
    SerialifColorContext.new(ctxmap, basectx)
  }
end
