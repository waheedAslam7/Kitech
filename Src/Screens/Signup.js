import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Input} from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';
import Check_Box from './CheckBox';
import {TouchableOpacity} from 'react-native';
import F from '../Assets/F.svg';
import G from '../Assets/G.svg';
import A from '../Assets/A.svg';
import Logo from '../Assets/Logo.svg';

const Signup = ({navigation}) => {
  const [c, setc] = useState(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
         <View style={{flex:1,flexDirection:"row",bottom:10}}>
<Image
source={require("..//Assets/B.png")}
style={{
  tintColor:"red",
  height:100,
  width:100,
  resizeMode:"center",
  opacity:0.2,left:-30
  
}}
/>

<Image
source={require("..//Assets/B2.png")}
style={{
  tintColor:"red",
  height:100,
  width:100,
  resizeMode:"center",
  opacity:0.2,left:30
  
}}
/>
      </View>
      <View
        style={{
          flex: 1,
          height: Dimensions.get('window').height,
          width: Dimensions.get('window').width,
          position:"absolute"
        }}>
        <View style={{flex: 1}}>
          <View
            style={{
              height: '10%',
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
              flexDirection: 'row',
            }}>
            <FontAwesome5
              name="arrow-left"
              size={20}
              color={'black'}
              style={{left: -30}}
              onPress={() => {
                navigation.goBack();
              }}
            />
            <Logo />
          </View>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              width: '90%',
              alignSelf: 'center',
              fontSize: 18,
              marginTop: 20,
            }}>
            Create your account
          </Text>

          <Text
            style={{
              color: '#E5384E',
              fontWeight: 'bold',
              width: '90%',
              alignSelf: 'center',
              fontSize: 15,
              marginTop: 10,
            }}>
            Join Kitchenara and take your food experience to the next level!
          </Text>

          <View
            style={{
              height: '8%',
              width: '90%',
              alignSelf: 'center',
              backgroundColor: '#FAFAFA',
              alignItems: 'center',
              borderRadius: 15,
              marginTop: 10,
            }}>
            <Input
              placeholder="Email"
              inputContainerStyle={{
                borderWidth: 1,
                borderColor: '#FAFAFA',
                alignSelf: 'center',
                height: '80%',
              }}
              leftIcon={
                <FontAwesome5 name="envelope" color={'#9E9E9E'} size={18} />
              }
            />
          </View>

          <View
            style={{
              height: '8%',
              width: '90%',
              alignSelf: 'center',
              backgroundColor: '#FAFAFA',
              alignItems: 'center',
              borderRadius: 15,
              marginTop: 15,
            }}>
            <Input
              placeholder="Password"
              inputContainerStyle={{
                borderWidth: 1,
                borderColor: '#FAFAFA',
                alignSelf: 'center',
                height: '80%',
              }}
              leftIcon={
                <FontAwesome5 name="lock" color={'#9E9E9E'} size={18} />
              }
              rightIcon={
                <FontAwesome5 name="eye-slash" color={'#9E9E9E'} size={18} />
              }
            />
          </View>

          <View
            style={{
              height: '8%',
              width: '90%',
              alignSelf: 'center',
              backgroundColor: '#FAFAFA',
              alignItems: 'center',
              borderRadius: 15,
              marginTop: 15,
            }}>
            <Input
              placeholder="Phone"
              inputContainerStyle={{
                borderWidth: 1,
                borderColor: '#FAFAFA',
                alignSelf: 'center',
                height: '80%',
              }}
              leftIcon={
                <FontAwesome5 name="phone" color={'#9E9E9E'} size={18} />
              }
            />
          </View>
          <View style={{height: '30%'}} />
          <TouchableOpacity
            style={{
              height: '7%',
              width: '90%',
              alignSelf: 'center',
              backgroundColor: '#E5384E',
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              Send
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({});
