<?php
declare(strict_types=1);

// GetColorByPath entity test

require_once __DIR__ . '/../serialifcolor_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class GetColorByPathEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = SerialifColorSDK::test(null, null);
        $ent = $testsdk->GetColorByPath(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = get_color_by_path_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "get_color_by_path." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set SERIALIFCOLOR_TEST_GET_COLOR_BY_PATH_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $get_color_by_path_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.get_color_by_path")));
        $get_color_by_path_ref01_data = null;
        if (count($get_color_by_path_ref01_data_raw) > 0) {
            $get_color_by_path_ref01_data = Helpers::to_map($get_color_by_path_ref01_data_raw[0][1]);
        }

        // LOAD
        $get_color_by_path_ref01_ent = $client->GetColorByPath(null);
        $get_color_by_path_ref01_match_dt0 = [];
        [$get_color_by_path_ref01_data_dt0_loaded, $err] = $get_color_by_path_ref01_ent->load($get_color_by_path_ref01_match_dt0, null);
        $this->assertNull($err);
        $this->assertNotNull($get_color_by_path_ref01_data_dt0_loaded);

    }
}

function get_color_by_path_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/get_color_by_path/GetColorByPathTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = SerialifColorSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["get_color_by_path01", "get_color_by_path02", "get_color_by_path03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("SERIALIFCOLOR_TEST_GET_COLOR_BY_PATH_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "SERIALIFCOLOR_TEST_GET_COLOR_BY_PATH_ENTID" => $idmap,
        "SERIALIFCOLOR_TEST_LIVE" => "FALSE",
        "SERIALIFCOLOR_TEST_EXPLAIN" => "FALSE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["SERIALIFCOLOR_TEST_GET_COLOR_BY_PATH_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["SERIALIFCOLOR_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
            ],
            $extra ?? [],
        ]);
        $client = new SerialifColorSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["SERIALIFCOLOR_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["SERIALIFCOLOR_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
