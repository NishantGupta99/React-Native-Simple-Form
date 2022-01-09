import React from 'react';
import {View, TextInput, Button} from 'react-native';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }
  submit() {

    console.warn(this.state);
  }

  render() {
    return (
      <View style={{margin: 20}}>
        <TextInput
          placeholder="enter your name"
          style={{borderWidth: 2, borderColor: 'skyblue', margin: 20}}
          onChangeText={text => {
            this.setState({name: text});
          }}
        />
        <TextInput
          placeholder="enter your email"
          style={{borderWidth: 2, borderColor: 'skyblue', margin: 20}}
          onChangeText={text => {
            this.setState({email: text});
          }}
        />
        <TextInput
          placeholder="enter your password"
          secureTextEntry={true}
          style={{borderWidth: 2, borderColor: 'skyblue', margin: 20}}
          onChangeText={text => {
            this.setState({password: text});
          }}
        />
        <Button title='submit' onPress={()=> {this.submit()}}/>
      </View>
    );
  }
}

export default App;
