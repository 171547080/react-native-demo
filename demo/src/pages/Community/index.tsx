import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import bg from '../../../assets/bg.jpg';
import { RootStackNavigation } from '../../router';

interface IProps{
  navigation: RootStackNavigation
}

class Community extends React.Component<IProps> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello Community !!! </Text>
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
export default Community;
