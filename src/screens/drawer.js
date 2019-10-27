import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Share,
} from 'react-native'
import { DrawerItems } from 'react-navigation'
import { Avatar, Icon, SearchBar } from 'react-native-elements'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

class Drawer extends Component {
  state = {
    isCollapsed: true,
  }

  _onShare = async () => {
    try {
      const result = await Share.share({
        url: 'https://www.drahmadsportsmedicine.com/',
      })
    } catch (error) {
      alert(error.message)
    }
  }

  render() {
    const { isCollapsed } = this.state
    const { navigate } = this.props.navigation

    return (
      <ScrollView>
        <View style={styles.userBox}>
          <Avatar
            small
            rounded
            source={require('../assets/logo/logo2.png')}
            activeOpacity={0.7}
            containerStyle={styles.avatar}
          />
          <View style={styles.nameHolder}>
            <View style={styles.row}>
              <Text style={styles.authorText}>Sideline App</Text>
            </View>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.verticalGap} />
        <View style={styles.settingsContainer}>
          <TouchableOpacity
            style={styles.settingsRow}
            onPress={() => {
              navigate('Notifications')
            }}>
            <Icon name="home" type="font-awesome" color="#ffffff" />
            <Text style={styles.settingsText}>Home</Text>
            <View style={styles.horizontalGap} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.settingsRow}
            onPress={() => {
              navigate('MySearches')
            }}>
            <Icon
              name="search"
              type="evilicons"
              color="white"
              onPress={this.props.onProfilePress}
              containerStyle={styles.profileIcon}
            />
            <Text style={styles.settingsText}>My Searches</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.settingsRow}
            onPress={() => {
              this._onShare()
            }}>
            <Icon
              name="share"
              type="entypo"
              reverseColor="black"
              color="white"
              onPress={this.props.onProfilePress}
              containerStyle={styles.profileIcon}
            />
            <Text style={styles.settingsText}>Share</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.settingsRow}
            onPress={() => {
              navigate('MedicalDisclaimer')
            }}>
            <Icon
              name="medical-bag"
              type="material-community"
              reverseColor="black"
              color="white"
              onPress={this.props.onProfilePress}
              containerStyle={styles.profileIcon}
            />
            <Text style={styles.settingsText}>Medical Disclaimer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.settingsRow}
            onPress={() => {
              navigate('HowToUse')
            }}>
            <Icon
              name="cogs"
              type="material-community"
              reverseColor="black"
              color="white"
              onPress={this.props.onProfilePress}
              containerStyle={styles.profileIcon}
            />
            <Text style={styles.settingsText}>How To use</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.settingsRow}
            onPress={() => {
              navigate('About')
            }}>
            <Icon
              name="information-variant"
              type="material-community"
              reverseColor="black"
              color="white"
              onPress={this.props.onProfilePress}
              containerStyle={styles.profileIcon}
            />
            <Text style={styles.settingsText}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.settingsRow}
            onPress={() => {
              navigate('Contact')
            }}>
            <Icon
              name="contact-mail"
              type="material-community"
              reverseColor="black"
              color="white"
              onPress={this.props.onProfilePress}
              containerStyle={styles.profileIcon}
            />
            <Text style={styles.settingsText}>Contact Us</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
      </ScrollView>
    )
  }
}
export default Drawer

const styles = StyleSheet.create({
  userBox: {
    backgroundColor: '#3b56b9',
    height: hp('14.2%'),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: wp('75%'),
  },
  settingsContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: wp('75%'),
    backgroundColor: '#3b56b9',
    height: hp('100%'),
  },
  avatar: {
    marginLeft: wp('5.3%'),
  },
  nameHolder: {
    marginLeft: wp('3%'),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  innerBadge: {
    paddingHorizontal: wp('1%'),
    paddingVertical: hp('.2%'),
    flexDirection: 'row',
  },
  firstBadge: {
    backgroundColor: '#555555',
    borderRadius: wp('1.3%'),
  },
  badge: {
    backgroundColor: '#555555',
    borderRadius: wp('1.3%'),
    marginLeft: wp('1%'),
  },
  badgeText: {
    fontSize: 9,
    color: 'white',
    paddingHorizontal: wp('.5%'),
    fontWeight: 'bold',
    flexDirection: 'row',
  },
  authorText: {
    fontSize: 22,
    fontWeight: '400',
    color: '#ffffff',
    letterSpacing: wp('1%'),
  },
  line: {
    height: hp('.1%'),
    width: wp('75%'),
    backgroundColor: 'white',
  },
  settingsText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#ffffff',
    marginLeft: wp('5.8%'),
  },
  settingsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: wp('5.5%'),
    marginBottom: hp('5%'),
    width: wp('100%'),
    // backgroundColor: 'red',
  },

  horizontalGap: {
    width: wp('2.7%'),
  },
  verticalGap: {
    width: wp('75%'),
    height: hp('5%'),
    backgroundColor: '#3b56b9',
  },
})
