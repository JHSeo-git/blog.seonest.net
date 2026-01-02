module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [1, "always", 150],
    "body-max-line-length": [1, "always", 300],
  },
}
