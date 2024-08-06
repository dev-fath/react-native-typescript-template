/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import type { PropsWithChildren } from 'react';
import React from 'react';

import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

import disableAutoScaling from 'utils/disableAutoScaling';

disableAutoScaling();

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): React.JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <Text>{title}</Text>
      <Text style={[styles.sectionDescription]}>{children}</Text>
    </View>
  );
}

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
