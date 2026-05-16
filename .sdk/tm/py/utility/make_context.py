# SerialifColor SDK utility: make_context

from core.context import SerialifColorContext


def make_context_util(ctxmap, basectx):
    return SerialifColorContext(ctxmap, basectx)
