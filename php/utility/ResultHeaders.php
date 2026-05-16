<?php
declare(strict_types=1);

// SerialifColor SDK utility: result_headers

class SerialifColorResultHeaders
{
    public static function call(SerialifColorContext $ctx): ?SerialifColorResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
