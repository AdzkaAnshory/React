import React, { Component } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import HomeScreen from './src/screens/HomeScreen/Homescreen';
import LoginScreen from './src/screens/loginscreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Detail from './src/screens/HomeScreen/detail';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      screen : "login",
      selected: []
     }
  }

  setScreen = obj => {
    this.setState({
      screen: obj.screen
    })
  }

  setDetail = obj => {
    this.setState({
      screen: obj.screen
    })
  }

  selectedList = obj =>{
    this,this.setState({
      selected : obj.result
    })
  }

  renderedScreen = () => {
    if(this.state.screen === "login")
      return <LoginScreen setScreen={this.setScreen}/>
    if(this.state.screen === "detail")
      return <Detail selected={this.state.selected} setHome={this.setDetail}/>
    if(this.state.screen === "home")  
      return <HomeScreen selectedList={this.selectedList} setDetail={this.setDetail} setScreen={this.setScreen}/>
  }

  render() { 
    return ( 
      <SafeAreaProvider>
        {this.renderedScreen()}
    </SafeAreaProvider>
      );
  }
}
 
export default App;
