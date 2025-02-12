import { FC } from 'react';
import { Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

type HomeProps = Record<string, never>;

const Home: FC<HomeProps> = () => {
  const i18nWording = 'Hello World';

  return (
    <SafeAreaView style={{ height: '100%' }}>
      <Text>{i18nWording}</Text>
    </SafeAreaView>
  );
};

export default Home;
