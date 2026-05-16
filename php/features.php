<?php
declare(strict_types=1);

// SerialifColor SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class SerialifColorFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new SerialifColorBaseFeature();
            case "test":
                return new SerialifColorTestFeature();
            default:
                return new SerialifColorBaseFeature();
        }
    }
}
