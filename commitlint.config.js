/* eslint-disable @typescript-eslint/no-var-requires */
const configConventional = require("@commitlint/config-conventional");

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    ...configConventional.rules,
    "type-enum": [
      2,
      "always",
      ["hotfix", ...configConventional.rules["type-enum"][2]],
    ],
  },
};
