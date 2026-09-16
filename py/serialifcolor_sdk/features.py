# SerialifColor SDK feature factory

from serialifcolor_sdk.feature.base_feature import SerialifColorBaseFeature
from serialifcolor_sdk.feature.ratelimit_feature import SerialifColorRatelimitFeature
from serialifcolor_sdk.feature.retry_feature import SerialifColorRetryFeature
from serialifcolor_sdk.feature.test_feature import SerialifColorTestFeature
from serialifcolor_sdk.feature.timeout_feature import SerialifColorTimeoutFeature


_FEATURES = {
    "base": lambda: SerialifColorBaseFeature(),
    "ratelimit": lambda: SerialifColorRatelimitFeature(),
    "retry": lambda: SerialifColorRetryFeature(),
    "test": lambda: SerialifColorTestFeature(),
    "timeout": lambda: SerialifColorTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
