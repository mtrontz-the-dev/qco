mtron@DESKTOP-RVVE8I7 MINGW64 ~/Desktop/template-starter copy/qco
$ qcobjects --help
Usage: qcobjects-cli [options] [command]

Options:
  -V, --version                 output the version number
  -h, --help                    output usage information

Commands:
  create [options] <appname>    Creates an app with <appname>
  publish [options] <appname>   Publishes an app with <appname>
  v-major [options] [filename]  Semantic Versioning: Upgrade to a new major version
  v-minor [options] [filename]  Semantic Versioning: Upgrade to a new minor version
  v-patch [options] [filename]  Semantic Versioning: Upgrade to a new patch version
  v-sync [options] [filename]   Semantic Versioning: Sync the version of NPM with version of GIT
  v-changelog                   Semantic Versioning: Shows a changelog using Semantic Versioning
  jira [options] <subcommand>   Jira Integration:
                                Sub-Commands can be:
                                    issues: To get the issues list from JIRA

  upgrade-to-enterprise         Upgrades to QCObjects Enterprise Edition
  generate-sw <appname>         Generates the service worker  <appname>
  launch <appname>              Launches the application

Use:
  $ qcobjects-cli [command] --help
  For detailed information of a command