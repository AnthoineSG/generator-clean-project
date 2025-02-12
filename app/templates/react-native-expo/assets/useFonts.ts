import { useFonts as useFontsExpo } from 'expo-font';

type UseFonts = () => {
  fontsLoaded: ReturnType<typeof useFontsExpo>[0];
  fontsError: ReturnType<typeof useFontsExpo>[1];
};

export const useFonts: UseFonts = () => {
  const [fontsLoaded, fontsError] = useFontsExpo({
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    'Poppins-Bold': require('./fonts/Poppins-Bold.ttf'),
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    'Poppins-ExtraBold': require('./fonts/Poppins-ExtraBold.ttf'),
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    'Poppins-ExtraLight': require('./fonts/Poppins-ExtraLight.ttf'),
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    'Poppins-Light': require('./fonts/Poppins-Light.ttf'),
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    'Poppins-Medium': require('./fonts/Poppins-Medium.ttf'),
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    'Poppins-Regular': require('./fonts/Poppins-Regular.ttf'),
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    'Poppins-SemiBold': require('./fonts/Poppins-SemiBold.ttf'),
  });

  return { fontsLoaded, fontsError };
};
