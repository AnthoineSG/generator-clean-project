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
    main: 'expo-router/entry',
    scripts: {
      'expo-prebuild': 'npx expo prebuild',
      clean: 'rm -rf node_modules && rm -rf .expo',
      'reset-cache': 'yarn storybook:clean && expo start -c',
      start: 'expo start',
      android: 'expo start --android',
      ios: 'expo start --ios',
      web: 'expo start --web',
      test: 'jest --watchAll',
      'expo:lint': 'expo lint',
      lint: 'eslint',
      format: 'prettier --write .',
      'storybook:clean': 'rm -rf node_modules/.cache/storybook',
      'storybook-generate': 'sb-rn-get-stories',
    },
    jest: {
      preset: 'jest-expo',
    },
    dependencies: {
      '@babel/plugin-proposal-export-namespace-from': '^7.18.9',
      '@expo/vector-icons': '^14.0.2',
      '@react-native-async-storage/async-storage': '^2.1.0',
      '@react-navigation/native': '^6.0.2',
      expo: '~51.0.24',
      'expo-constants': '~16.0.2',
      'expo-font': '~12.0.9',
      'expo-linking': '~6.3.1',
      'expo-router': '~3.5.20',
      'expo-splash-screen': '~0.27.5',
      'expo-status-bar': '~1.12.1',
      'expo-system-ui': '~3.0.7',
      'expo-web-browser': '~13.0.3',
      react: '18.2.0',
      'react-dom': '18.2.0',
      'react-native': '0.74.3',
      'react-native-gesture-handler': '^2.21.2',
      'react-native-reanimated': '3.10.1',
      'react-native-safe-area-context': '4.10.5',
      'react-native-screens': '3.31.1',
      'react-native-uuid': '^2.0.3',
      'react-native-web': '~0.19.10',
    },
    devDependencies: {
      '@babel/core': '^7.20.0',
      '@eslint/compat': '^1.2.5',
      '@react-native-community/datetimepicker': '8.2.0',
      '@react-native-community/slider': '4.5.5',
      '@storybook/addon-ondevice-actions': '8.5.1',
      '@storybook/addon-ondevice-controls': '8.5.1',
      '@storybook/react-native': '8.5.1',
      '@types/jest': '^29.5.12',
      '@types/react': '~18.2.45',
      '@types/react-test-renderer': '^18.0.7',
      '@typescript-eslint/eslint-plugin': '^8.20.0',
      '@typescript-eslint/parser': '^8.20.0',
      'babel-loader': '8.4.1',
      eslint: '^9.18.0',
      'eslint-config-expo': '^8.0.1',
      'eslint-config-prettier': '^10.0.1',
      'eslint-plugin-import': '^2.31.0',
      'eslint-plugin-prettier': '^5.2.3',
      'eslint-plugin-react': '^7.37.4',
      'eslint-plugin-react-hooks': '^5.1.0',
      'eslint-plugin-react-native': '^5.0.0',
      jest: '^29.2.1',
      'jest-expo': '~51.0.3',
      prettier: '^3.4.2',
      'react-native-svg': '15.11.1',
      'react-test-renderer': '18.2.0',
      typescript: '~5.3.3',
    },
  },
};
