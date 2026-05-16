# GetColorByPath entity test

require "minitest/autorun"
require "json"
require_relative "../SerialifColor_sdk"
require_relative "runner"

class GetColorByPathEntityTest < Minitest::Test
  def test_create_instance
    testsdk = SerialifColorSDK.test(nil, nil)
    ent = testsdk.GetColorByPath(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = get_color_by_path_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "get_color_by_path." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set SERIALIFCOLOR_TEST_GET_COLOR_BY_PATH_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    get_color_by_path_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.get_color_by_path")))
    get_color_by_path_ref01_data = nil
    if get_color_by_path_ref01_data_raw.length > 0
      get_color_by_path_ref01_data = Helpers.to_map(get_color_by_path_ref01_data_raw[0][1])
    end

    # LOAD
    get_color_by_path_ref01_ent = client.GetColorByPath(nil)
    get_color_by_path_ref01_match_dt0 = {}
    get_color_by_path_ref01_data_dt0_loaded, err = get_color_by_path_ref01_ent.load(get_color_by_path_ref01_match_dt0, nil)
    assert_nil err
    assert !get_color_by_path_ref01_data_dt0_loaded.nil?

  end
end

def get_color_by_path_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "get_color_by_path", "GetColorByPathTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = SerialifColorSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["get_color_by_path01", "get_color_by_path02", "get_color_by_path03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["SERIALIFCOLOR_TEST_GET_COLOR_BY_PATH_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "SERIALIFCOLOR_TEST_GET_COLOR_BY_PATH_ENTID" => idmap,
    "SERIALIFCOLOR_TEST_LIVE" => "FALSE",
    "SERIALIFCOLOR_TEST_EXPLAIN" => "FALSE",
    "SERIALIFCOLOR_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["SERIALIFCOLOR_TEST_GET_COLOR_BY_PATH_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["SERIALIFCOLOR_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
        "apikey" => env["SERIALIFCOLOR_APIKEY"],
      },
      extra || {},
    ])
    client = SerialifColorSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["SERIALIFCOLOR_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["SERIALIFCOLOR_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
