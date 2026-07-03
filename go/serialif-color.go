package voxgigserialifcolorsdk

import (
	"github.com/voxgig-sdk/serialif-color-sdk/go/core"
	"github.com/voxgig-sdk/serialif-color-sdk/go/entity"
	"github.com/voxgig-sdk/serialif-color-sdk/go/feature"
	_ "github.com/voxgig-sdk/serialif-color-sdk/go/utility"
)

// Type aliases preserve external API.
type SerialifColorSDK = core.SerialifColorSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type SerialifColorEntity = core.SerialifColorEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type SerialifColorError = core.SerialifColorError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewGetColorByPathEntityFunc = func(client *core.SerialifColorSDK, entopts map[string]any) core.SerialifColorEntity {
		return entity.NewGetColorByPathEntity(client, entopts)
	}
	core.NewGetColorByQueryEntityFunc = func(client *core.SerialifColorSDK, entopts map[string]any) core.SerialifColorEntity {
		return entity.NewGetColorByQueryEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewSerialifColorSDK = core.NewSerialifColorSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewSerialifColorSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *SerialifColorSDK  { return NewSerialifColorSDK(nil) }
func Test() *SerialifColorSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
