# SerialifColor SDK utility: feature_add
module SerialifColorUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
