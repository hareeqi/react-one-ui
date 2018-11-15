import React, { Component } from 'react';
import * as pages from './pages';

import { Link, theme, css, OneProvider, ScrollView, View, Text } from 'react-one-ui';

const styles = css({
    header: {
        flexDirection: 'row',
        height: 80,
        backgroundColor: theme.light_gray_color,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    item: {
        flex: 1,
        borderBottomWidth: theme.hairline,
        height: 50,
        borderColor: theme.light_gray_color
    }
});

const Item = props => <Link style={styles.item} {...props} />;

class DemoApp extends Component {
    state = { page: '' };

    _renderHeader = () => (
        <View style={styles.header}>
            <Text style={{ paddingVertical: 10 }}>{this.state.page || 'Components & API'}</Text>
            {this.state.page ? <Link style={{ paddingVertical: 10 }} title=" - Clear - " onPress={() => this.setState({ page: '' })} /> : null}
        </View>
    );
    _renderList = () => {
        const pa = Object.keys(pages);
        return (
            <ScrollView>
                {pa.map((p, i) => {
                    const page = p.replace('Page_', '');
                    return (
                        <Item
                            key={i}
                            title={page}
                            onPress={() => {
                                this.setState({ page });
                            }}
                        />
                    );
                })}
            </ScrollView>
        );
    };
    render() {
        console.log();
        const { page } = this.state;
        const Content = pages['Page_' + page];

        return (
            <OneProvider>
                {this._renderHeader()}
                {page ? <Content /> : this._renderList()}
            </OneProvider>
        );
    }
}
export default DemoApp;
