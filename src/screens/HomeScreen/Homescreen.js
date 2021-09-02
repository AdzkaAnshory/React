import React, { Component } from 'react';
import { ListItem, Avatar, Header, Text, Button} from 'react-native-elements'
import { FlatList, StyleSheet, View} from 'react-native';


class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
                list : [],
                namePress: "",
                avatarPress: "",
                numberPress: "",
            }
    }

    componentDidMount = () => {
        this.setState({
            list: this.props.list
        })
    }

    keyExtractor = (item, index) => index.toString()

    onPressLogout = () => {
        this.props.setScreen({ screen : "login" })
    }
    
    onPressAdd = () => {
        this.props.setScreen({ screen : "add" })
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
                    leftComponent={<Text
                        title="Log out" type="outline"
                        containerStyle={styles.loginContainer}
                        style={{color:'#fff'}}
                        onPress={() => this.onPressAdd()}
                        >Add
                    </Text>}
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