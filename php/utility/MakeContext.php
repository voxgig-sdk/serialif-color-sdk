<?php
declare(strict_types=1);

// SerialifColor SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class SerialifColorMakeContext
{
    public static function call(array $ctxmap, ?SerialifColorContext $basectx): SerialifColorContext
    {
        return new SerialifColorContext($ctxmap, $basectx);
    }
}
