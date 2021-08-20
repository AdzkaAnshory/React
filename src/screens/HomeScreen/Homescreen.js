import React, { Component } from 'react';
import { ListItem, Avatar, Icon, Header, Text, Button} from 'react-native-elements'
import { FlatList, StyleSheet, View} from 'react-native';


class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
                list : [{id : 1,name:"Heda Kynge", avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',number:"113 698 3859"},
                        {id : 2,name:"Tom Traill",  avatar_url: 'https://freepikpsd.com/media/2019/10/contact-person-icon-png-1-Transparent-Images.png', number:"222 615 3812"},
                        {id : 3,name:"Chet Wicken", avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', number:"928 916 5350"},
                        {id : 4,name:"Melony Teliga", avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', number:"895 521 1986"},
                        {id : 5,name:"Rodrique Minichillo", avatar_url: 'https://freepikpsd.com/media/2019/10/contact-person-icon-png-1-Transparent-Images.png', number:"520 358 2316"},
                        {id : 6,name:"Giuditta Kares", avatar_url: 'https://freepikpsd.com/media/2019/10/contact-person-icon-png-1-Transparent-Images.png', number:"456 756 6639"},
                        {id : 7,name:"Ingrid Speight", avatar_url: 'https://freepikpsd.com/media/2019/10/contact-person-icon-png-1-Transparent-Images.png', number:"635 713 6072"},
                        {id : 8,name:"Hyacinth McCrachen", avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', number:"960 732 6375"},
                        {id : 9,name:"Berta Cockrell", avatar_url: 'https://freepikpsd.com/media/2019/10/contact-person-icon-png-1-Transparent-Images.png', number:"496 971 3403"},
                        {id : 10,name:"Harriett Poulglais",avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', number:"114 223 5098"},
                        {id : 11,name:"Wilfrid Simison", avatar_url: 'https://freepikpsd.com/media/2019/10/contact-person-icon-png-1-Transparent-Images.png', number:"700 216 0456"},
                        {id : 12,name:"Clim Cases",avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', number:"256 334 2658"},
                        {id : 13,name:"Nerti Michiel", avatar_url: 'https://freepikpsd.com/media/2019/10/contact-person-icon-png-1-Transparent-Images.png',number:"249 835 2493"},
                        {id : 14,name:"Cirstoforo Keeves",avatar_url: 'https://freepikpsd.com/media/2019/10/contact-person-icon-png-1-Transparent-Images.png',number:"369 520 1469"},
                        {id : 15,name:"Georgie Mariette",avatar_url: 'https://freepikpsd.com/media/2019/10/contact-person-icon-png-1-Transparent-Images.png',number:"810 974 3916"},
                        {id : 16,name:"Kelly Alabone", avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', number:"765 553 3611"},
                        {id : 17,name:"Almeda Tosney", avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', number:"150 806 4107"},
                        {id : 18,name:"Mina McDermid", avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', number:"417 411 8271"},
                        {id : 19,name:"Agnesse Crown",avatar_url: 'https://freepikpsd.com/media/2019/10/contact-person-icon-png-1-Transparent-Images.png',number:"996 864 3992"},
                        {id : 20,name:"Amerigo Inglefield", avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', number:"255 140 7775"}
                    ],
                namePress: "",
                avatarPress: "",
                numberPress: "",
            }
    }
    keyExtractor = (item, index) => index.toString()

    onPressLogout = () => {
        this.props.setScreen({ screen : "login" })
    }

    onPressDetail = name => {
        const list = this.state.list
        const result = list.find(list => list.name === name)
        this.props.selectedList({result})
        this.props.setDetail({ screen : "detail" })
    }

    onPressDelete = id =>{
        const list = this.state.list
        console.log(id-1);
        list.splice(id-1,1)
    }

    renderItem = ({ item }) => (
        <ListItem.Swipeable
        leftContent={
            <Button
            title="Info"
            icon={{ name: 'info', color: 'white' }}
            buttonStyle={{ minHeight: '100%' }}
            onPress={this.onPressDetail.bind(this, item.name)}
            />
        }
        rightContent={
            <Button
            title="Delete"
            icon={{ name: 'delete', color: 'white' }}
            buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
            onPress={this.onPressDelete.bind(this, item.id)}
            />
        }
        >
        <Avatar title={item.name[0]} source={item.avatar_url && { uri: item.avatar_url }}/>
        <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.number}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
        </ListItem.Swipeable>
      )
      

    render() { 
        return ( 
            <View style={styles.container}>
                <View>
                <Header
                    backgroundColor= '#ff5a66'
                    leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
                    centerComponent={{ text: 'Contact', style: { color: '#fff' } }}
                    rightComponent={<Text
                        title="Log out" type="outline"
                        containerStyle={styles.loginContainer}
                        style={{color:'#fff'}}
                        onPress={() => this.onPressLogout()}
                        >Log Out
                    </Text>}
                    />
                </View>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.list}
                    renderItem={this.renderItem}
                /> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})
 
export default HomeScreen;