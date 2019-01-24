import React, {Component} from 'react';
import {View, Image} from 'react-native';
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
                return(
                    <Card>
                        <CardSection>
                            <Image style={styles.imageStyle} source={{uri: "https://i.kym-cdn.com/photos/images/newsfeed/000/676/221/295.jpg"}} />  
                        </CardSection>
                        <CardSection>
                            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
                        </CardSection>
                    </Card>
                ) 
            case false: 
                return <LoginForm />
            default:
                return <View style={styles.spinnerStyle}><Spinner size="large" /></View>
        }        
    }


    render() {
        return(
            <View>
                <Header headerText="Authentication Demo" />
                        {this.renderContent()}
            </View>
        )
    }
}

const styles = {
    spinnerStyle: {
        padding: 100,
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
}

export default App;