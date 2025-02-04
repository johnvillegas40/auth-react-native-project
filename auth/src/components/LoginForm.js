import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth'
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false }

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true })

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this))
        });
    }
    onLoginFail(){
        this.setState({ error: 'Authentication Failed', loading: false})
    }

    onLoginSuccess() {
        this.setState({ 
            email: '',
            password: '',
            loading: '',
            error: ''
        });
    }

    renderButton() {
        if(this.state.loading) {
            return <Spinner size="small" />
        }
        return(
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        )
    }

    render() {
        return(
            <View>
            <Card>
                <CardSection>
                    <Input
                    placeholder="user@gmail.com"
                    label="Email:"
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })} />
                </CardSection>

                <CardSection>
                    <Input
                    secureTextEntry={true}
                    placeholder="password"
                    label="Password:"
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })} />
                </CardSection>

                
                <CardSection>
                    {this.renderButton()}
                </CardSection>

                
            </Card>
            <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
            </View>
        )
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center', 
        color: 'red'
    }
}

export default LoginForm