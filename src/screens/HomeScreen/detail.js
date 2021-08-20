import React, { Component } from 'react';
import { ListItem, Avatar, Icon, Header, Text, Button} from 'react-native-elements'
import { FlatList, StyleSheet, View, ActivityIndicator} from 'react-native';



class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectedName: "",
            selectedUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            selectedNumber:"",
            homeScreen: "detail"
         }
    }

    componentDidMount =()=>{
        const selected = this.props.selected
        console.log(selected.avatar_url);
        this.setState({
            selectedName : selected.name,
            selectedNumber: selected.number,
            selectedUrl: selected.avatar_url
        })
    }

    onPressBack = () => {
        this.props.setHome({ screen : "home" })
    }
    render() { 
        const item = this.state
        return (
            <View>
                <View>
                <Header
                    backgroundColor= '#ff5a66'
                    leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
                    centerComponent={{ text: 'Detail Contact', style: { color: '#fff' } }}
                    rightComponent={<Text
                        title="Log out" type="outline"
                        containerStyle={styles.loginContainer}
                        style={{color:'#fff'}}
                        onPress={() => this.onPressBack()}
                        >Back
                    </Text>}
                    />
                </View>
                <View>
                    <Avatar
                        title={item.selectedName}
                        source={{uri: item.selectedUrl}}
                        style={{ width: '100%', height: 200 }}
                        />
                </View>
                <View style={{paddingLeft: 20, paddingTop : 30}}>
                    <Text>
                        Name 
                    </Text>
                    <Text>
                        {item.selectedName}
                    </Text>
                </View>
                <View style={{paddingLeft: 20, paddingTop : 30}}>
                    <Text>
                        Number 
                    </Text>
                    <Text>
                        {item.selectedNumber}
                    </Text>
                </View>
            </View>
         );
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    loginText: {
        backgroundColor: "#ff5a66",
        borderRadius: 5
    },
})

export default Detail;