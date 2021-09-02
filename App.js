import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import BooksScreen from './src/components/BooksScreen';
import BookDetailScreen from './src/components/BookDetailScreen';
import AddBookScreen from './src/components/AddBookScreen';
import EditBookScreen from './src/components/EditBookScreen';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';

const MainNavigator = createStackNavigator({
 Book: { screen: BooksScreen },
 BookDetails: { screen: BookDetailScreen },
 AddBook: { screen: AddBookScreen },
 EditBook: { screen: EditBookScreen },
});

const MyRootComponent = createAppContainer(MainNavigator);
const cache = new InMemoryCache();
const client = new ApolloClient({
 cache,
 link: new HttpLink({
    uri: 'http://localhost:3000/graphql',
 }),
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <ApolloProvider client={client}>
        <MyRootComponent />
      </ApolloProvider>
    );
  }
}
 
export default App;
// const App = () => (
//  <ApolloProvider client={client}>
//   <MyRootComponent />
//  </ApolloProvider>
// );

// AppRegistry.registerComponent('MyApp', () => App);