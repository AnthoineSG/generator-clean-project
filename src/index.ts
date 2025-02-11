import Generator from 'yeoman-generator';

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

  initializing() {
    // eslint-disable-next-line no-console
    console.log(
      '\nCreate your own project among the different templates available\n',
    );
  }

  async prompting() {
    const suffixSkip = ' (Enter to skip)';

    const promptAnswers = await this.prompt([
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
    ]);

    this.response = {
      name: promptAnswers.name,
      language: promptAnswers.language,
      description: promptAnswers.description,
      authorName: promptAnswers.authorName,
      authorEmail: promptAnswers.authorEmail,
      repository: promptAnswers.repository,
      homepage: promptAnswers.homepage,
      packageManager: promptAnswers.packageManager,
    };
  }

  async writing() {
    await this.fs.copy(
      this.templatePath(`${this.response.language}`),
      this.destinationPath(''),
      { globOptions: { dot: true } },
    );

    if (this.response.language !== PROJECT.PYTHON) {
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
  }

  async install() {
    await this.spawn(this.response.packageManager, ['install']);
  }

  end() {
    // eslint-disable-next-line no-console
    console.log('\nEnjoy :D');
  }
}
