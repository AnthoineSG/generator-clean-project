// eslint-disable-next-line import/no-unresolved
import { PROJECT } from './enums.js';
// eslint-disable-next-line import/no-unresolved
import { ProjectWithPackage, Package } from './types.js';

type ProjectLanguage = {
  name: string;
  value: PROJECT;
};

export const projectLanguages: ProjectLanguage[] = [
  {
    name: 'React native',
    value: PROJECT.REACT_NATIVE,
  },
  {
    name: 'React native with Expo',
    value: PROJECT.REACT_NATIVE_EXPO,
  },
  {
    name: 'React',
    value: PROJECT.REACT,
  },
  {
    name: 'React Next.js',
    value: PROJECT.REACT_NEXT,
  },
  {
    name: 'React Vite.js',
    value: PROJECT.REACT_VITE,
  },
  {
    name: 'Python',
    value: PROJECT.PYTHON,
  },
];

type PackageByProject = Record<ProjectWithPackage, Package>;

export const packageByProject: PackageByProject = {
  [PROJECT.REACT_NEXT]: {
    name: '',
    description: '',
    version: '0.1.0',
    author: {
      email: '',
      name: '',
    },
    homepage: '',
    repository: '',
    type: '',
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
    author: {
      email: '',
      name: '',
    },
    homepage: '',
    repository: '',
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
    author: {
      email: '',
      name: '',
    },
    homepage: '',
    repository: '',
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
    author: {
      email: '',
      name: '',
    },
    homepage: '',
    repository: '',
    scripts: {},
    dependencies: {},
    devDependencies: {},
  },
  [PROJECT.REACT_NATIVE_EXPO]: {
    name: '',
    description: '',
    version: '0.1.0',
    author: {
      email: '',
      name: '',
    },
    homepage: '',
    repository: '',
    scripts: {},
    dependencies: {},
    devDependencies: {},
  },
};
