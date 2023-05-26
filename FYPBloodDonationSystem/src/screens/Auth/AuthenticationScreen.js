import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Text,
    View,
    Image,
    Dimensions,
    StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const win = Dimensions.get('window');
const ratio = win.width / 602;

const AuthenticationScreen = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View style={{backgroundColor: "#DE0A1E", alignItems: 'center'}}>

                    <Image style={styles.image}
                        resizeMode={'contain'}
                        source={require('../../../assets/StartupPic.png')} />

                    <Text
                        style={{
                            color: 'white',
                            textAlign: 'center',
                            paddingTop: 30,
                            fontSize: 25,
                            fontWeight: '900'
                        }}>
                        Blood Connect
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 10, paddingTop: 5}}>
                        <View style={{backgroundColor: '#b6b6b6', width: 40, height: 3}}></View>
                        <Text style={{fontSize: 14, fontWeight: 500, color: 'white'}}>When the blood flows, a life glows</Text>
                        <View style={{backgroundColor: '#b6b6b6', width: 40, height: 3}}></View>
                    </View>
                    <Text
                        style={{
                            color: 'white',
                            textAlign: 'center',
                            paddingTop: 30,
                            fontSize: 16,
                            fontWeight: '500',
                            paddingHorizontal: 20
                        }}>
                        Discover nearby blood donation centers, schedule appointments, and track your donation history with our user-friendly Blood Donation Application. Join us in saving lives today!
                    </Text>

                    <View style={styles.fixToText}>
                        <View style={styles.buttonView}>
                            <TouchableOpacity
                                style={styles.buttonStyle}
                                onPress={() => navigation.navigate('SignupFirst')}>
                                <Text style={styles.buttonText}>
                                    {"Signup"}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={styles.buttonStyle2}
                            onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.buttonText}>
                                {"Login"}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.divider} />

                    {/* <View style={styles.fixToColumn}>
                        <View style={styles.buttonView2}>
                            <TouchableOpacity
                                style={styles.buttonStyle3}
                                onPress={() => Alert.alert('Google button pressed')}>
                                <Image style={styles.imageIcon}
                                    //resizeMode={'contain'}
                                    source={require('../../../assets/google.png')} />
                                <Text style={styles.buttonText2}>
                                    {"Continue With Google"}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={styles.buttonStyle3}
                            onPress={() => Alert.alert('Facebook button pressed')}>
                            <Image style={styles.imageIcon}
                                resizeMode={'contain'}
                                source={require('../../../assets/facebook.png')} />
                            <Text style={styles.buttonText2}>
                                {"Continue With Facebook"}
                            </Text>
                        </TouchableOpacity>
                    </View> */}
                    <View style={styles.plainPaddingBottom} />

                </View>
            </ScrollView>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 30,
    },
    fixToColumn: {
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 70,
    },
    buttonView: {
        flexDirection: 'row',
        paddingRight: 20
    },
    buttonView2: {
        paddingBottom: 40
    },
    buttonStyle: {
        backgroundColor: '#00CC66',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 25,
    },
    buttonStyle2: {
        backgroundColor: '#0080FF',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 25,
    },
    buttonStyle3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 3
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        justifyContent: 'center'
    },
    buttonText2: {
        paddingLeft: 5,
        fontSize: 17,
        fontWeight: 500,
        color: 'black',
    },
    image: {
        flex: 1,
        alignSelf: 'stretch',
        width: win.width,
        height: 576 * ratio,
        marginBottom: 20
    },
    imageIcon: {
        width: 15,
        height: 15,
    },
    divider: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginHorizontal: 30,
        marginBottom: 40
    },
    plainPaddingBottom: {
        paddingBottom: 174
    }
});

export default AuthenticationScreen;