# SerialifColor SDK utility: make_context

from serialifcolor_sdk.core.context import SerialifColorContext


def make_context_util(ctxmap, basectx):
    return SerialifColorContext(ctxmap, basectx)
