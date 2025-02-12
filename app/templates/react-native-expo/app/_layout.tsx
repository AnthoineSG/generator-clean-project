import { FC, useEffect } from 'react';

import { SplashScreen, Stack } from 'expo-router';

import { useFonts } from '@/assets/useFonts';

SplashScreen.preventAutoHideAsync();

type RootLayoutProps = Record<string, never>;

const RootLayout: FC<RootLayoutProps> = () => {
  const { fontsError, fontsLoaded } = useFonts();

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  useEffect(() => {
    (() => {
      if (fontsLoaded || fontsError) {
        SplashScreen.hideAsync();
      }
    })();
  }, [fontsLoaded, fontsError]);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
