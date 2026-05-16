<?php
declare(strict_types=1);

// SerialifColor SDK utility: feature_add

class SerialifColorFeatureAdd
{
    public static function call(SerialifColorContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
