<?php
declare(strict_types=1);

// SerialifColor SDK utility: prepare_headers

class SerialifColorPrepareHeaders
{
    public static function call(SerialifColorContext $ctx): array
    {
        $options = $ctx->client->options_map();
        $headers = \Voxgig\Struct\Struct::getprop($options, 'headers');
        if (!$headers) {
            return [];
        }
        $out = \Voxgig\Struct\Struct::clone($headers);
        return is_array($out) ? $out : [];
    }
}
