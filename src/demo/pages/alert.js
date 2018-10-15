import React from 'react';
import { Scene, Button, Alert, Text } from 'react-one-ui';

export class Page_Alert extends React.Component {
    state = { message: '' };
    render() {
        return (
            <Scene centered>
                <Button
                    title="Show Alert"
                    onPress={() =>
                        Alert.alert('Alert Example', 'Hello from alert', [
                            { text: 'Ok', onPress: () => this.setState({ message: 'Ok clicked' }) },
                            { text: 'Cancel', onPress: () => this.setState({ message: 'Canceled  clicked' }) }
                        ])
                    }
                />
                <Text style={{ marginTop: 10 }}>{this.state.message}</Text>
            </Scene>
        );
    }
}
