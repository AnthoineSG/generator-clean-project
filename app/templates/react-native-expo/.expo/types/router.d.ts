/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `` | `/` | `/(tabs)` | `/..\ui\ScreenContainer\` | `/..\ui\ScreenContainer\ScreenContainer` | `/_sitemap` | `/profile` | `/sandbox` | `/settings` | `/storybook` | `/task`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
