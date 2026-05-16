<?php
declare(strict_types=1);

// SerialifColor SDK utility: prepare_body

class SerialifColorPrepareBody
{
    public static function call(SerialifColorContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
