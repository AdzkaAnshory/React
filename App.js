import React, { Component } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import HomeScreen from './src/screens/homescreen';
import LoginScreen from './src/screens/loginscreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list : [{name:"Heda Kynge", avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',number:"113 698 3859"},
                        {name:"Tom Traill",  avatar_url: 'https://freepikpsd.com/media/2019/10/contact-person-icon-png-1-Transparent-Images.png', number:"222 615 3812"},
                        {name:"Chet Wicken", avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', number:"928 916 5350"},
                        {name:"Melony Teliga", avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', number:"895 521 1986"},
                        {name:"Rodrique Minichillo", avatar_url: 'https://freepikpsd.com/media/2019/10/contact-person-icon-png-1-Transparent-Images.png', number:"520 358 2316"},
                        {name:"Giuditta Kares", avatar_url: 'https://freepikpsd.com/media/2019/10/contact-person-icon-png-1-Transparent-Images.png', number:"456 756 6639"},
                        {name:"Ingrid Speight", avatar_url: 'https://freepikpsd.com/media/2019/10/contact-person-icon-png-1-Transparent-Images.png', number:"635 713 6072"},
                        {name:"Hyacinth McCrachen", avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', number:"960 732 6375"},
                        {name:"Berta Cockrell", avatar_url: 'https://freepikpsd.com/media/2019/10/contact-person-icon-png-1-Transparent-Images.png', number:"496 971 3403"},
                        {name:"Harriett Poulglais",avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', number:"114 223 5098"},
                        {name:"Wilfrid Simison", avatar_url: 'https://freepikpsd.com/media/2019/10/contact-person-icon-png-1-Transparent-Images.png', number:"700 216 0456"},
                        {name:"Clim Cases",avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', number:"256 334 2658"},
                        {name:"Nerti Michiel", avatar_url: 'https://freepikpsd.com/media/2019/10/contact-person-icon-png-1-Transparent-Images.png',number:"249 835 2493"},
                        {name:"Cirstoforo Keeves",avatar_url: 'https://freepikpsd.com/media/2019/10/contact-person-icon-png-1-Transparent-Images.png',number:"369 520 1469"},
                        {name:"Georgie Mariette",avatar_url: 'https://freepikpsd.com/media/2019/10/contact-person-icon-png-1-Transparent-Images.png',number:"810 974 3916"},
                        {name:"Kelly Alabone", avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', number:"765 553 3611"},
                        {name:"Almeda Tosney", avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', number:"150 806 4107"},
                        {name:"Mina McDermid", avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', number:"417 411 8271"},
                        {name:"Agnesse Crown",avatar_url: 'https://freepikpsd.com/media/2019/10/contact-person-icon-png-1-Transparent-Images.png',number:"996 864 3992"},
                        {name:"Amerigo Inglefield", avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', number:"255 140 7775"}
                    ], 
      screen : ""
     }
  }

  setScreen = obj => {
    this.setState({
      screen: obj.screen
    })
  }

  renderedScreen = () => {
    if(this.state.screen === "")
      return <LoginScreen setScreen={this.setScreen}/>
    
    return <HomeScreen list={this.state.list} setScreen={this.setScreen}/>
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