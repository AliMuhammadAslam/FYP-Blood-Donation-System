import React, { useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Text,
    View,
    Image,
    Alert,
    Dimensions,
    StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import AsyncStorage from '@react-native-async-storage/async-storage';

const win = Dimensions.get('window');
const ratio = win.width / 602;

const AuthenticationScreen = () => {

    const navigation = useNavigation();
 
    

    // useEffect(() => { 
    //     //console.log("automatic login"); 
    //     AsyncStorage.getItem(id);
    //     if (id != null){
    //         console.log("automatic login"); 
    //     }
    //   }); //No second Argument 


    return (
        <SafeAreaView>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
            //style={backgroundStyle}
            >

                <View

                    style={{
                        backgroundColor: "#DE0A1E"
                    }}>

                    <Image style={styles.image}
                        resizeMode={'contain'}
                        source={require('../../../assets/StartupPic.png')} />

                    <Text
                        style={{
                            color: 'white',
                            textAlign: 'center',
                            paddingTop: 20,
                            fontSize: 15

                        }}>
                        {"The more details the better\nWrite a nice title and description\nSelect a category and add photos"}
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

                    <View style={styles.fixToColumn}>
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
                    </View>
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
        // flexDirection: 'column',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 70,
    },
    buttonView: {
        //flex:1,
        flexDirection: 'row',
        paddingRight: 20
    },
    buttonView2: {
        paddingBottom: 40
    },
    buttonStyle: {
        //width: '100%',
        backgroundColor: '#00CC66',
        //paddingRight: 50,
        // borderColor: 'white',
        // borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 25,
        //width: 105
    },
    buttonStyle2: {
        // width: '40%',
        backgroundColor: '#0080FF',
        //paddingRight: 50,
        // borderColor: 'white',
        // borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 25,
        //width: 105
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
        //justifyContent: 'center'

    },
    image: {
        flex: 1,
        alignSelf: 'stretch',
        width: win.width,
        height: 576 * ratio,
    },
    imageIcon: {
        //flex: 1,
        //alignSelf: 'stretch',
        width: 15,
        height: 15,
    },
    divider: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        //marginVertical: 10,
        marginHorizontal: 30,
        marginBottom: 40

    },
    plainPaddingBottom: {
        paddingBottom: 100
    }
});

export default AuthenticationScreen;