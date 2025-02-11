// eslint-disable-next-line import/no-unresolved
import { PROJECT } from './enums.js';

export type ProjectWithPackage = Exclude<PROJECT, PROJECT.PYTHON>;

export type Package = {
  name: string;
  version: string;
  description: string;
  author: {
    name: string;
    email: string;
  };
  repository: string;
  homepage: string;
  type?: string;
  scripts: Record<string, string>;
  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
};
