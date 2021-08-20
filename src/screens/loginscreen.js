import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Alert,
    ActivityIndicator,
    Button
  } from "react-native";
import { AppStyles } from '../../AppStyles';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screen: "home", 
            email : "",
            password: "",
            userlist : [{email : "adzka123@gmail.com", password : "adzka12345" },
                        {email : "rafi123@gmail.com", password : "rafi12345"}]
         }
    }

    onPressLogin = () => {
        const user = this.state.userlist
        const { email, password, screen } = this.state
        if(email !== "" && password !== ""){
        for(let i = 0; i < user.length; i++){
            if(user[i].email === this.state.email && user[i].password === this.state.password){
                this.props.setScreen({ screen })
                return Alert.alert("Selamat Datang ","" + email + "")
            }
        }
        return Alert.alert("Warning!!","User not found")
        }else return Alert.alert("Warning!!","Tidak boleh kosong")
    }

    onButtonPressed = () => {}
    render() { 
        return ( 
        <View style={styles.container}>
        <Text style={[styles.title, styles.leftTitle]}>Sign In</Text>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.body}
            placeholder="E-mail or phone number"
            onChangeText={text => this.setState({ email: text })}
            value={this.state.email}
            placeholderTextColor={AppStyles.color.grey}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.body}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={text => this.setState({ password: text })}
            value={this.state.password}
            placeholderTextColor={AppStyles.color.grey}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.loginContainer}>
            <Text
                title="Log in" type="outline"
                containerStyle={styles.loginContainer}
                style={styles.loginText}
                onPress={() => this.onPressLogin()}
                >
            Log In
            </Text>
        </View>
        
      </View>
     );
    }
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center"
    },
    or: {
      color: "black",
      marginTop: 40,
      marginBottom: 10
    },
    title: {
      fontSize: AppStyles.fontSize.title,
      fontWeight: "bold",
      color: AppStyles.color.tint,
      marginTop: 20,
      marginBottom: 20
    },
    leftTitle: {
      alignSelf: "stretch",
      textAlign: "left",
      marginLeft: 20
    },
    content: {
      paddingLeft: 50,
      paddingRight: 50,
      textAlign: "center",
      fontSize: AppStyles.fontSize.content,
      color: AppStyles.color.text
    },
    loginContainer: {
      width: AppStyles.buttonWidth.main,
      backgroundColor: AppStyles.color.tint,
      borderRadius: AppStyles.borderRadius.main,
      padding: 10,
      marginTop: 30
    },
    loginText: {
      color: AppStyles.color.white,
      textAlign: 'center'
    },
    placeholder: {
      color: "red"
    },
    InputContainer: {
      width: AppStyles.textInputWidth.main,
      marginTop: 30,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: AppStyles.color.grey,
      borderRadius: AppStyles.borderRadius.main
    },
    body: {
      height: 42,
      paddingLeft: 20,
      paddingRight: 20,
      color: AppStyles.color.text
    }
  });

export default LoginScreen;