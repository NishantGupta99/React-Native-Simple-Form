import React from 'react';
import axios from 'axios';
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
  submit(name, email, password) {
    axios.post('http://localhost:8000/users', {
      firstName: "nishant",
      email: "hello@gmail",
      password: "demo"
    })
    .then(function (response) {
      console.warn(response);
    })
    .catch(function (error) {
      console.warn(error);
    });
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
          placeholder="enter your emails"
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
        <Button
          title="submit"
          onPress={() => {
            this.submit();
          }}
        />
      </View>
    );
  }
}

export default App;
