import Generator from 'yeoman-generator';

type ProjectWithPackage = Exclude<PROJECT, PROJECT.PYTHON>;

type Package = {
  name: string;
  description: string;
  version: string;
  type?: string;
  scripts: Record<string, string>;
  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
};

enum PROJECT {
  REACT_NATIVE = 'react-native',
  REACT_NATIVE_EXPO = 'react-native-expo',
  REACT = 'react',
  REACT_NEXT = 'react-next',
  REACT_VITE = 'react-vite',
  PYTHON = 'python',
}

type PackageByProject = Record<ProjectWithPackage, Package>;

const packageByProject: PackageByProject = {
  [PROJECT.REACT_NEXT]: {
    name: '',
    description: '',
    version: '0.1.0',
    scripts: {
      dev: 'next dev',
      build: 'next build',
      start: 'next start',
      lint: 'eslint "**/*.{js,jsx,ts,tsx}"',
    },
    dependencies: {
      next: '14.0.4',
      react: '^18',
      'react-dom': '^18',
    },
    devDependencies: {
      '@types/node': '^20',
      '@types/react': '^18',
      '@types/react-dom': '^18',
      '@typescript-eslint/eslint-plugin': '^6.21.0',
      '@typescript-eslint/parser': '^6.21.0',
      autoprefixer: '^10.0.1',
      eslint: '^8',
      'eslint-config-next': '14.0.4',
      'eslint-config-prettier': '^9.1.0',
      'eslint-import-resolver-typescript': '^3.6.1',
      'eslint-plugin-import': '^2.29.1',
      'eslint-plugin-prefer-arrow': '^1.2.3',
      'eslint-plugin-prettier': '^5.1.3',
      postcss: '^8',
      prettier: '^3.2.5',
      tailwindcss: '^3.3.0',
      typescript: '^5',
    },
  },
  [PROJECT.REACT_VITE]: {
    name: '',
    description: '',
    version: '0.1.0',
    type: 'module',
    scripts: {
      dev: 'vite',
      build: 'tsc && vite build',
      preview: 'vite preview',
      tsc: 'tsc',
      'tsc:watch': 'pnpm tsc --watch',
      clean: 'rm -rf node_modules',
      lint: 'eslint "./**/*.{tsx,ts,js,jsx}" --color --max-warnings 0',
      format:
        'prettier ./**/*.{ts,tsx,js,jsx,html,css,json,yml,yaml,md} --write',
    },
    dependencies: {
      '@vitejs/plugin-react': '^3.1.0',
      react: '^18.2.0',
      'react-dom': '^18.2.0',
      vite: '^4.2.0',
    },
    devDependencies: {
      '@types/react': '^18.0.27',
      '@types/react-dom': '^18.0.10',
      '@typescript-eslint/eslint-plugin': '^5.55.0',
      '@typescript-eslint/parser': '^5.55.0',
      autoprefixer: '^10.4.14',
      eslint: '^8.36.0',
      'eslint-config-airbnb': '^19.0.4',
      'eslint-config-airbnb-typescript': '^17.0.0',
      'eslint-config-prettier': '^8.7.0',
      'eslint-import-resolver-typescript': '^3.5.3',
      'eslint-plugin-deprecation': '^1.3.3',
      'eslint-plugin-import': '^2.27.5',
      'eslint-plugin-prefer-arrow': '^1.2.3',
      'eslint-plugin-prettier': '^4.2.1',
      'eslint-plugin-react': '^7.32.2',
      'eslint-plugin-react-hooks': '^4.6.0',
      postcss: '^8.4.21',
      prettier: '^2.8.4',
      tailwindcss: '^3.2.7',
      typescript: '^4.9.3',
    },
  },
  [PROJECT.REACT]: {
    name: '',
    description: '',
    version: '0.1.0',
    scripts: {
      dev: 'todo',
      build: 'todo',
      start: 'todo',
      lint: 'eslint "**/*.{js,jsx,ts,tsx}"',
    },
    dependencies: {
      next: '14.0.4',
      react: '^18',
      'react-dom': '^18',
    },
    devDependencies: {
      '@types/node': '^20',
      '@types/react': '^18',
      '@types/react-dom': '^18',
      '@typescript-eslint/eslint-plugin': '^6.21.0',
      '@typescript-eslint/parser': '^6.21.0',
      autoprefixer: '^10.0.1',
      eslint: '^8',
      'eslint-config-next': '14.0.4',
      'eslint-config-prettier': '^9.1.0',
      'eslint-import-resolver-typescript': '^3.6.1',
      'eslint-plugin-import': '^2.29.1',
      'eslint-plugin-prefer-arrow': '^1.2.3',
      'eslint-plugin-prettier': '^5.1.3',
      postcss: '^8',
      prettier: '^3.2.5',
      tailwindcss: '^3.3.0',
      typescript: '^5',
    },
  },
  [PROJECT.REACT_NATIVE]: {
    name: '',
    description: '',
    version: '0.1.0',
    scripts: {},
    dependencies: {},
    devDependencies: {},
  },
  [PROJECT.REACT_NATIVE_EXPO]: {
    name: '',
    description: '',
    version: '0.1.0',
    scripts: {},
    dependencies: {},
    devDependencies: {},
  },
};

type Response = {
  name: string;
  language: PROJECT;
};
export default class extends Generator {
  private response: Response = {
    name: 'my-clean-project',
    language: PROJECT.REACT,
  };

  initializing() {
    // eslint-disable-next-line no-console
    console.log(
      '\nCreate your own project among the different templates available\n',
    );
  }

  async prompting() {
    const promptAnswers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        prefix: '>',
        message: 'What is your app named ?',
        default: this.response.name,
      },
      {
        type: 'list',
        name: 'language',
        prefix: '>',
        message: 'Select the language of your project :',
        choices: [
          {
            name: 'React native',
            value: 'react-native',
          },
          {
            name: 'React native with Expo',
            value: 'react-native-expo',
          },
          {
            name: 'React',
            value: 'react',
          },
          {
            name: 'React Next.js',
            value: 'react-next',
          },
          {
            name: 'React Vite.js',
            value: 'react-vite',
          },
          {
            name: 'Python',
            value: 'python',
          },
        ],
      },
    ]);

    this.response.name = promptAnswers.name;
    this.response.language = promptAnswers.language;
  }

  // ! update packages.json etcetc
  configuring() {}

  writing() {
    const templatePath = `${this.response.language}`;
    const destinationPath = `${this.response.name}/`;

    this.fs.copy(
      this.templatePath(templatePath),
      this.destinationPath(destinationPath),
      { globOptions: { dot: true } },
    );

    if (this.response.language !== PROJECT.PYTHON) {
      this.fs.extendJSON(
        this.destinationPath(`${destinationPath}package.json`),
        packageByProject[this.response.language],
      );
    }
  }

  // ! install deps
  install() {}
}
