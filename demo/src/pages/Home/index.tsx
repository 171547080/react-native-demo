import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {RootStackNavigation} from '../../router';
import bg from '../../../assets/bg.jpg';

interface IProps {
  navigation: RootStackNavigation;
}

class Home extends React.Component<IProps> {
  onPress = () => {
    const {navigation} = this.props;
    navigation.navigate('User');
  };
  onPressDetail = () => {
    const {navigation} = this.props;
    navigation.navigate('UserDetail', {id: 1000});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello Home !!! </Text>
        <Button title="跳转到用户页面" onPress={this.onPress}></Button>
        <Text>User 1000 </Text>
        <Button title="跳转到个人信息" onPress={this.onPressDetail}></Button>
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
export default Home;
