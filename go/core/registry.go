package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewGetColorByPathEntityFunc func(client *SerialifColorSDK, entopts map[string]any) SerialifColorEntity

var NewGetColorByQueryEntityFunc func(client *SerialifColorSDK, entopts map[string]any) SerialifColorEntity

