import React from 'react';
import { Scene, Text, theme, ScrollView, css } from 'react-one-ui';

const styles = css({ m: { marginTop: 20 } });

export const Page_OneProvider = () => (
    <Scene centered>
        <Text>One provider is a component where you have to encapsulate all your app in it</Text>
        <Text>One provider enables you to use all APIs such alert and force rtl</Text>
        <Text>e.g.</Text>
        <Text style={styles.m}>{"import { OneProvider } from 'react-one-ui'"}</Text>
        <Text style={styles.m}>{'<OneProvider><MyApp /></OneProvider>'}</Text>
    </Scene>
);

export const Page_Platform = () => (
    <Scene centered>
        <Text>react-one-ui gives you short-cut to common platform related is usages </Text>
        <Text style={styles.m}>{"import { isWeb, isNative, isIOS, isAndroid, isIphoneX } from 'react-one-ui'"}</Text>
    </Scene>
);

export const Page_Scene = () => (
    <Scene centered>
        <Text>Scene is a View component that has a style flex:1, it also has a prop called "ceneter" that does alignItems: </Text>
        <Text style={styles.m}>it also has a prop called "ceneter" that does alignItems: ceneter and justify content center </Text>
    </Scene>
);

export const Page_Theme = () => (
    <ScrollView contentContainerStyle={{ alignItems: 'center', paddingTop: 15 }}>
        <Text>You can override the theme by introducing a variable in your "package.json" called "oneTheme"</Text>
        <Text>default themes currently defined in src/react-one-ui/theme/index.js</Text>
        {Object.entries(theme).map((t, i) => (
            <Text key={i}>{`${t[0]}  =  ${t[1]}`}</Text>
        ))}

        <Text style={styles.m}>Also there is an alias configured for "StyleSheet.create" as "css"</Text>
        <Text style={styles.m}>{"import { css } from 'react-one-ui'"}</Text>
    </ScrollView>
);
/**/
