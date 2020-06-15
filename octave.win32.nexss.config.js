let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "Octave";
languageConfig.description = "Scientific Programming Language";
languageConfig.url = "https://www.gnu.org/software/octave/";
languageConfig.founders = ["John W. Eaton", "many others"];
languageConfig.developers = [];
languageConfig.years = ["1988"];
languageConfig.extensions = [".m"];
languageConfig.executeCommandLine = "";
languageConfig.printCommandLine = "";
languageConfig.checkSyntax = "";
languageConfig.interactiveShell = "node";
languageConfig.builders = {};
languageConfig.compilers = {
  node: {
    install: "scoop install octave",
    command: "octave",
    args: "<file>",
    help: ``,
  },
};
languageConfig.errors = require("./nexss.octave.errors");
languageConfig.languagePackageManagers = {};

module.exports = languageConfig;
