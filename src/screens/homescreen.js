import React, { Component } from 'react';
import { ListItem, Avatar, Icon } from 'react-native-elements'
import { FlatList, StyleSheet, View, Button} from 'react-native';


class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
                list : "",
                namePress: "",
                avatarPress: "",
                numberPress: "",
                email:""
            }
    }
    keyExtractor = (item, index) => index.toString()

    componentDidMount = () => {
        const {list} = this.props.list
        this.setState({ list })
    }
    onPressLogout = () => {
        const { email } = this.state
        this.props.setScreen({ email })
    }

    renderItem = ({ item }) => (
        <ListItem.Swipeable
        leftContent={
            <Button
            title="Info"
            icon={{ name: 'info', color: 'white' }}
            buttonStyle={{ minHeight: '100%' }}
            />
        }
        rightContent={
            <Button
            title="Delete"
            icon={{ name: 'delete', color: 'white' }}
            buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
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
                <Button
                    title="Log out" type="outline"
                    containerStyle={styles.loginContainer}
                    style={styles.loginText}
                    onPress={() => this.onPressLogout()}
                    >
                </Button>
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

    loginText: {
        backgroundColor: "#ff5a66",
        borderRadius: 5
    }
})
 
export default HomeScreen;