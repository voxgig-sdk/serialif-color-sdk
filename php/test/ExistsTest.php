<?php
declare(strict_types=1);

// SerialifColor SDK exists test

require_once __DIR__ . '/../serialifcolor_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = SerialifColorSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
