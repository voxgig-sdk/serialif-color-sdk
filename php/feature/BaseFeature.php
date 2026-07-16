<?php
declare(strict_types=1);

// SerialifColor SDK base feature

class SerialifColorBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(SerialifColorContext $ctx, array $options): void {}
    public function PostConstruct(SerialifColorContext $ctx): void {}
    public function PostConstructEntity(SerialifColorContext $ctx): void {}
    public function SetData(SerialifColorContext $ctx): void {}
    public function GetData(SerialifColorContext $ctx): void {}
    public function GetMatch(SerialifColorContext $ctx): void {}
    public function SetMatch(SerialifColorContext $ctx): void {}
    public function PrePoint(SerialifColorContext $ctx): void {}
    public function PreSpec(SerialifColorContext $ctx): void {}
    public function PreRequest(SerialifColorContext $ctx): void {}
    public function PreResponse(SerialifColorContext $ctx): void {}
    public function PreResult(SerialifColorContext $ctx): void {}
    public function PreDone(SerialifColorContext $ctx): void {}
    public function PreUnexpected(SerialifColorContext $ctx): void {}
}
