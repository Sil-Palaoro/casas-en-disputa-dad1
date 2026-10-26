export default {
  testEnvironment: "node",
  testMatch: ["<rootDir>/test/**/*.test.js"],
  extensionsToTreatAsEsm: [".js"],
  // Los imports usan .js porque ese será el formato del código compilado.
  moduleNameMapper: { "^(\\.{1,2}/.*)\\.js$": "$1" },
};
