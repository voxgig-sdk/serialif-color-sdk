# SerialifColor SDK feature factory

from serialifcolor_sdk.feature.base_feature import SerialifColorBaseFeature
from serialifcolor_sdk.feature.test_feature import SerialifColorTestFeature


def _make_feature(name):
    features = {
        "base": lambda: SerialifColorBaseFeature(),
        "test": lambda: SerialifColorTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
