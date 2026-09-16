# SerialifColor SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module SerialifColorFeatures
  def self.make_feature(name)
    case name
    when "base"
      SerialifColorBaseFeature.new
    when "ratelimit"
      SerialifColorRatelimitFeature.new
    when "retry"
      SerialifColorRetryFeature.new
    when "test"
      SerialifColorTestFeature.new
    when "timeout"
      SerialifColorTimeoutFeature.new
    else
      SerialifColorBaseFeature.new
    end
  end
end
