# SerialifColor SDK exists test

require "minitest/autorun"
require_relative "../SerialifColor_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = SerialifColorSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
