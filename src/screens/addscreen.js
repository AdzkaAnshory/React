import React from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import { Header } from "react-native-elements/dist/header/Header";
import { AppStyles } from "../../AppStyles";

class AddScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      name: "",
      avatar_url: '',
      number: "",
    };
  }
  
  static navigationOptions = {
    title: 'Add Book',
   };
  componentDidMount() {
    
  }

  componentWillUnmount() {
  }

  onPressSave = () => {
    if(this.state.name === "" && this.state.number === "")
      return Alert.alert("Fild Kosong","Fild name dan number tidak boleh kosong!!")
    
    if(this.state.avatar_url === ''){
      this.setState({
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
      })
    }

    this.props.addAction({
      name: this.state.name,
      avatar_url: this.state.avatar_url,
      number: this.state.number 
    })
    this.props.setScreen({ screen : "home" })    
  }

  onPressCancel = () => {
    this.props.setScreen({ screen : "home" })
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Header
            backgroundColor= '#ff5a66'
            centerComponent={{ text: 'Add new', style: { color: '#fff' } }}
          />
        </View>
        <Text style={[styles.title, styles.leftTitle]}>Add new account</Text>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.body}
            placeholder="Full Name"
            onChangeText={text => this.setState({ name: text })}
            value={this.state.name}
            placeholderTextColor={AppStyles.color.grey}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.body}
            placeholder="Url image"
            onChangeText={text => this.setState({ avatar_url: text })}
            value={this.state.avatar_url}
            placeholderTextColor={AppStyles.color.grey}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.body}
            placeholder="Phone Number"
            onChangeText={text => this.setState({ number: text })}
            value={this.state.number}
            placeholderTextColor={AppStyles.color.grey}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.loginContainer}>
            <Text
                title="Save" type="outline"
                style={styles.loginText}
                onPress={() => this.onPressSave()}
                >
            Save
            </Text>
        </View>
        <View style={styles.loginContainer}>
            <Text
                title="Cancel" type="outline"
                style={styles.loginText}
                onPress={() => this.onPressCancel()}
                >
            Cancel
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
    marginTop: 30,
  },
  loginText: {
    color: AppStyles.color.white
  },
  placeholder: {
    color: "red",
    textAlign: 'center'
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
  },
  facebookContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30
  },
  facebookText: {
    color: AppStyles.color.white
  }
});

export default AddScreen;
