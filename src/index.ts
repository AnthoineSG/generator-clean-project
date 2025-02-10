import Generator from "yeoman-generator";

export default class extends Generator {
  private answers_language: string = "";

  private _never_called() {
    this.log("_never_called - START");
    this.log("_never_called - END");
  }

  initializing() {
    this.log("initializing - START");

    this._never_called();

    this.log("initializing - END");
  }

  async prompting() {
    this.log("prompting - START");

    const answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname,
      },
      {
        type: "list",
        name: "language",
        message: "Select the language of your project :",
        choices: [
          {
            name: "Python",
            value: "python",
          },
          {
            name: "React Native",
            value: "react-native",
          },
        ],
      },
    ]);

    this.answers_language = answers.language;

    this.log("prompting - END");
  }

  writing() {
    this.log("install - START");

    this.fs.copyTpl(
      this.templatePath(`${this.answers_language}`),
      this.destinationPath("")
    );

    this.log("install - END");
  }

  install() {
    this.log("install - START");
    this.log("install - END");
  }
}
