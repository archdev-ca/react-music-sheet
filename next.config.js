/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // emotion: true,
    emotion: {
      sourceMap: true,
      autoLabel: "dev-only",
      labelFormat: "[local]",
      importMap: {
        "@mui/material": {
          styled: {
            canonicalImport: ["@emotion/styled", "default"],
            styledBaseImport: ["@mui/material", "styled"],
          },
        },
        "@mui/material/styles": {
          styled: {
            canonicalImport: ["@emotion/styled", "default"],
            styledBaseImport: ["@mui/material/styles", "styled"],
          },
        },
      },
    },
  },
};

module.exports = nextConfig;
