import React, {Component} from 'react';
import {View} from 'react-native';
import {Header, Button, Card, CardSection, Spinner} from './components/common';
import firebase from '@firebase/app';
import '@firebase/auth'
import LoginForm from './components/LoginForm'

class App extends Component {
    state = { loggedIn: null}
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCyHP-oek2dwCMEkiSMSTj-U7hCsiErCJQ",
            authDomain: "auth-react-jv.firebaseapp.com",
            databaseURL: "https://auth-react-jv.firebaseio.com",
            projectId: "auth-react-jv",
            storageBucket: "auth-react-jv.appspot.com",
            messagingSenderId: "169345772950"
          });
          firebase.auth().onAuthStateChanged((user) => {
              if(user) {
                  this.setState({ loggedIn: true});
              } else {
                  this.setState({ loggedIn: false});
              }
          })
    }

    renderContent() {
        switch (this.state.loggedIn){
            case true: 
                return <Card><CardSection><Button>Test</Button></CardSection></Card>
            case false: 
                return <LoginForm />
            default:
                return <View style={styles.spinnerStyle}><Spinner size="large" /></View>
        }        
    }


    render() {
        return(
            <View>
                <Header headerText="Authentication" />
                        {this.renderContent()}
            </View>
        )
    }
}

const styles = {
    spinnerStyle: {
        padding: 100,
    }
}

export default App;