import Generator from 'yeoman-generator';
import type { PromptQuestion } from 'yeoman-generator';

// eslint-disable-next-line import/no-unresolved
import { packageByProject, projectLanguages } from './constants.js';
// eslint-disable-next-line import/no-unresolved
import { PROJECT } from './enums.js';
// eslint-disable-next-line import/no-unresolved
import { Package } from './types.js';

type Response = {
  name: string;
  language: PROJECT;
  description: string;
  authorName: string;
  authorEmail: string;
  repository: string;
  homepage: string;
  packageManager: 'npm' | 'yarn' | 'pnpm';
};

export default class extends Generator {
  private response: Response = {
    name: '',
    language: PROJECT.REACT,
    description: '',
    authorName: '',
    authorEmail: '',
    repository: '',
    homepage: '',
    packageManager: 'npm',
  };

  _log_message(message: string) {
    // eslint-disable-next-line no-console
    console.log(message);
  }

  async _getCommonQuestions() {
    const commonQuestions: PromptQuestion[] = [
      {
        type: 'input',
        name: 'name',
        prefix: '>',
        message: 'What is your app named ?',
        default: 'my-clean-project',
      },
      {
        type: 'list',
        name: 'language',
        prefix: '>',
        message: 'Select the language of your project :',
        choices: projectLanguages,
      },
    ];

    const commonAnswers = await this.prompt(commonQuestions);
    this.response.name = commonAnswers.name;
    this.response.language = commonAnswers.language;
  }

  async _getPackageJsonQuestions() {
    const suffixSkip = ' (Enter to skip)';

    const packageJsonQuestions: PromptQuestion[] = [
      {
        type: 'input',
        name: 'description',
        prefix: '>',
        message: 'Add description to the project',
        suffix: suffixSkip,
      },
      {
        type: 'input',
        name: 'authorName',
        prefix: '>',
        message: 'Add your name to the project',
        default: await this.git.name(),
      },
      {
        type: 'input',
        name: 'authorEmail',
        prefix: '>',
        message: 'Add your email to the project',
        default: await this.git.email(),
      },
      {
        type: 'input',
        name: 'repository',
        prefix: '>',
        message: 'Add repository to the project',
        suffix: suffixSkip,
      },
      {
        type: 'input',
        name: 'homepage',
        prefix: '>',
        message: 'Add the homepage of your project',
        suffix: suffixSkip,
      },
      {
        type: 'list',
        name: 'packageManager',
        prefix: '>',
        message: 'Choose your package managers',
        choices: [
          {
            name: 'NPM',
            value: 'npm',
          },
          {
            name: 'YARN',
            value: 'yarn',
          },
          {
            name: 'PNPM',
            value: 'pnpm',
          },
        ],
      },
    ];

    const packageJsonAnswers = await this.prompt(packageJsonQuestions);
    this.response.description = packageJsonAnswers.description;
    this.response.authorName = packageJsonAnswers.authorName;
    this.response.authorEmail = packageJsonAnswers.authorEmail;
    this.response.repository = packageJsonAnswers.repository;
    this.response.homepage = packageJsonAnswers.homepage;
    this.response.packageManager = packageJsonAnswers.packageManager;
  }

  initializing() {
    this._log_message(
      '\nCreate your own project among the different templates available\n',
    );
  }

  async prompting() {
    await this._getCommonQuestions();

    if (this.response.language !== PROJECT.PYTHON) {
      await this._getPackageJsonQuestions();
    }
  }

  async writing() {
    await this.fs.copy(
      this.templatePath(`${this.response.language}`),
      this.destinationPath(''),
      { globOptions: { dot: true } },
    );

    if (this.response.language === PROJECT.PYTHON) {
      return;
    }

    type UserInfo = Pick<
      Package,
      'name' | 'description' | 'author' | 'repository' | 'homepage'
    >;
    const userInfo: UserInfo = {
      name: this.response.name,
      description: this.response.description,
      author: {
        name: this.response.authorName,
        email: this.response.authorEmail,
      },
      repository: this.response.repository,
      homepage: this.response.homepage,
    };

    await this.fs.extendJSON(this.destinationPath('package.json'), {
      ...packageByProject[this.response.language],
      ...userInfo,
    });
  }

  async install() {
    if (this.response.language === PROJECT.PYTHON) {
      this.log('\nImportant !');
      this._log_message(
        '> Update your pyproject.toml with => name, description, authors',
      );
      this._log_message('> Activate your environment and run poetry install');
      return;
    }

    await this.spawn(this.response.packageManager, ['install']);
  }

  end() {
    this._log_message('\nInstallation completed your project is ready');
    this._log_message('Enjoy :D');
  }
}
