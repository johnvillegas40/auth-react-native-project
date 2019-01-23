import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Header} from './components/common';
import firebase from 'firebase';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCyHP-oek2dwCMEkiSMSTj-U7hCsiErCJQ",
            authDomain: "auth-react-jv.firebaseapp.com",
            databaseURL: "https://auth-react-jv.firebaseio.com",
            projectId: "auth-react-jv",
            storageBucket: "auth-react-jv.appspot.com",
            messagingSenderId: "169345772950"
          });
    }
    render() {
        return(
            <View>
                <Header headerText="Authentication" />
                <Text>An App!</Text>
            </View>
        )
    }
}

export default App;