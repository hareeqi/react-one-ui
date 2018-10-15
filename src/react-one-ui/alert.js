import React from 'react';
import { Alert as AlertNative, View, Text } from 'react-native';
import { isWeb } from './platform';
import { Link } from './link';
import { theme, css } from './theme';

let Alert;

const AlertProviderNative = ({ children }) => <View style={styles.container}>{children}</View>;

class AlertProviderWeb extends React.Component {
    constructor(props) {
        super(props);
        Alert = this;
        this.state = {
            show: false
        };
    }
    alert = (title, message, options = [{ text: 'ok' }]) => {
        this.title = title;
        this.message = message;
        this.options = options;
        this.setState({ show: true });
    };
    _renderAlert = () => (
        <View style={styles.overlay}>
            <View style={styles.box}>
                <Text style={styles.title}>{this.title}</Text>
                <Text style={styles.message}>{this.message}</Text>
                <View style={styles.buttons_holder}>
                    {this.options.map((option, index) => (
                        <Link
                            style={styles.button}
                            key={index}
                            title={option.text}
                            onPress={() => {
                                option.onPress && option.onPress();
                                this.setState({ show: false });
                            }}
                        />
                    ))}
                </View>
            </View>
        </View>
    );
    render() {
        return (
            <View style={styles.container}>
                {this.props.children}
                {this.state.show ? this._renderAlert() : null}
            </View>
        );
    }
}

Alert = isWeb ? Alert : AlertNative;

const AlertProvider = isWeb ? AlertProviderWeb : AlertProviderNative;

const styles = css({
    container: {
        flex: 1
    },
    overlay: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        ...theme.absoluteFillObject
    },
    title: {
        fontSize: theme.font_xl,
        color: theme.text_color
    },
    message: {
        fontSize: theme.font_md,
        color: theme.gray_color,
        marginVertical: 15
    },
    button: {
        marginLeft: 5,
        paddingHorizontal: 20
    },
    buttons_holder: {
        flexDirection: 'row-reverse',
        flex: 1,
        alignItems: 'flex-end',
        marginTop: 20
    },
    box: {
        backgroundColor: '#fff',
        minWidth: 500,
        minHeight: 200,
        padding: 30
    }
});

export { AlertProvider, Alert };
