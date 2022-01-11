import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import bg from '../../../assets/bg.jpg';

class Login extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello Login !!! </Text>
      </View>
    );
  }
}
// 变量提升
const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: bg,
    width: '100%',
    height: '100%',
  },
});
export default Login;
