# SerialifColor SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module SerialifColorFeatures
  def self.make_feature(name)
    case name
    when "base"
      SerialifColorBaseFeature.new
    when "test"
      SerialifColorTestFeature.new
    else
      SerialifColorBaseFeature.new
    end
  end
end
