# ProjectName SDK exists test

import pytest
from serialifcolor_sdk import SerialifColorSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = SerialifColorSDK.test(None, None)
        assert testsdk is not None
