import React, {useState,useContext} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Modal,
  navigation,
} from 'react-native';
import { AuthContext } from '../../../../../AuthProvider';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
import Signin from '../../Signin/Signin';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import UpperDesignCode from './BackSpace_LanguageComponents/UpperDesignCode';

//SideNavigation Bottom
const CustomDrawer = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
const{logout}=useContext(AuthContext)
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: 'white'}}>
        <UpperDesignCode />
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            paddingTop: 15,
            borderRadius: 35,
            margin: -10,
          }}>
          <DrawerItemList {...props} />
          {/*Outline*/}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <View style={{width: '100%', height: 1, backgroundColor: '#ccc'}} />
          </View>
          {/*Log out*/}
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={{
              flexDirection: 'row',
              marginBottom: 40,
              marginLeft: 20,
              marginTop: 3,
            }}>
            <Image source={require('../Images/Icons/Logout.png')} />
            <Text
              style={{
                alignSelf: 'center',
                marginLeft: 25,
                fontFamily: 'Montserrat_500Medium',
                fontSize: 16,
              }}>
              Log Out
            </Text>
          </TouchableOpacity>
          {/*Contact us*/}
          <Text
            style={{
              alignSelf: 'center',
              marginBottom: 20,
              fontFamily: 'Montserrat_500Medium',
              fontSize: 14,
            }}>
            CONNECT US AT
          </Text>
          {/*Social Media*/}
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 20,
              alignSelf: 'center',
            }}>
            <Image source={require('../Images/SocialMedia/Facebook.png')} />
            <Image
              source={require('../Images/SocialMedia/Instagram.png')}
              style={{marginHorizontal: 18}}
            />
            <Image source={require('../Images/SocialMedia/Twitter.png')} />
          </View>
        </View>
      </DrawerContentScrollView>

      {/* =================================================MODAL SCREEN========================================= */}

      {/* PopUP window */}
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(true)}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#000000aa',
            justifyContent: 'center',
          }}>
          {/* background white  */}
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 10,
              padding: 20,
              margin: 20,
              marginTop: 35,
              alignItems: 'center',
            }}>
            {/* Logout Text */}
            <Text style={{marginLeft: 10, color: '#f44336', fontSize: 15}}>
              Logout
            </Text>

            <Text
              style={{
                fontSize: 14,
                alignSelf: 'center',
                marginTop: 20,
                fontWeight: 'bold',
                color: '#5a5a5a',
              }}>
              Are you sure you want to logout!!
            </Text>

            {/* No Yes Button  */}
            <View style={{flexDirection: 'row', marginTop: 25}}>
              {/* Close Button  */}
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text
                  style={{
                    fontSize: 14,
                    paddingVertical: 10,
                    paddingHorizontal: 40,
                    borderColor: '#4448FF',
                    color: '#4448FF',
                    borderWidth: 1,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    marginRight: 10,
                  }}>
                  No
                </Text>
              </TouchableOpacity>
              {/* Yes Button  */}
              <TouchableOpacity
                onPress={() => {setModalVisible(false)
                logout()
                }}
                >
                <Text
                  style={{
                    fontSize: 14,
                    paddingVertical: 10,
                    paddingHorizontal: 40,
                    color: 'white',
                    borderWidth: 1,
                    borderColor: '#4448FF',
                    backgroundColor: '#4448FF',
                    borderRadius: 10,
                    marginLeft: 10,
                  }}>
                  Yes
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomDrawer;
