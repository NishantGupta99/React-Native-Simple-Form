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

  // username = this.state.name;
  // mail = this.state.email;
  // password = this.state.password
  submit() {
    axios.post('http://10.0.2.2:8000/users', {
      firstName: this.state.name,
      email: this.state.email,
      password: this.state.password
    },{
      headers:{
        ['content-type']:'application/json'
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.error(error);
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
