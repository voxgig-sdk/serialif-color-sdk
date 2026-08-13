# SerialifColor SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

SerialifColorUtility.registrar = ->(u) {
  u.clean = SerialifColorUtilities::Clean
  u.done = SerialifColorUtilities::Done
  u.make_error = SerialifColorUtilities::MakeError
  u.feature_add = SerialifColorUtilities::FeatureAdd
  u.feature_hook = SerialifColorUtilities::FeatureHook
  u.feature_init = SerialifColorUtilities::FeatureInit
  u.fetcher = SerialifColorUtilities::Fetcher
  u.make_fetch_def = SerialifColorUtilities::MakeFetchDef
  u.make_context = SerialifColorUtilities::MakeContext
  u.make_options = SerialifColorUtilities::MakeOptions
  u.make_request = SerialifColorUtilities::MakeRequest
  u.make_response = SerialifColorUtilities::MakeResponse
  u.make_result = SerialifColorUtilities::MakeResult
  u.make_point = SerialifColorUtilities::MakePoint
  u.make_spec = SerialifColorUtilities::MakeSpec
  u.make_url = SerialifColorUtilities::MakeUrl
  u.param = SerialifColorUtilities::Param
  u.prepare_auth = SerialifColorUtilities::PrepareAuth
  u.prepare_body = SerialifColorUtilities::PrepareBody
  u.prepare_headers = SerialifColorUtilities::PrepareHeaders
  u.prepare_method = SerialifColorUtilities::PrepareMethod
  u.prepare_params = SerialifColorUtilities::PrepareParams
  u.prepare_path = SerialifColorUtilities::PreparePath
  u.prepare_query = SerialifColorUtilities::PrepareQuery
  u.graphql_body = SerialifColorUtilities::GraphqlBody
  u.graphql_errors = SerialifColorUtilities::GraphqlErrors
  u.result_basic = SerialifColorUtilities::ResultBasic
  u.result_body = SerialifColorUtilities::ResultBody
  u.result_headers = SerialifColorUtilities::ResultHeaders
  u.transform_request = SerialifColorUtilities::TransformRequest
  u.transform_response = SerialifColorUtilities::TransformResponse
}
