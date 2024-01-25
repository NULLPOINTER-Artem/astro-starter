module.exports = {
  plugins: [
    require("postcss-import"),
    require('postcss-inline-svg')({ paths: ['src/assets/images/icons'] }), // svg-load('icon-name.svg', color=#0000, other attrs)
    require("postcss-url"),
    require("postcss-combine-media-query"),
    require("postcss-combine-duplicated-selectors")({
      removeDuplicatedProperties: true,
      removeDuplicatedValues: false,
    }),
    require("autoprefixer"),
    require("cssnano")({ preset: "advanced" }),
    require("postcss-reporter"),
  ],
};
