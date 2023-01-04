import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import react from "react";
import { Alert, BackHandler, View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
// import {Icon, View} from 'native-base'

function Sidebar({ ...props }) {

    const handleExitMenu = () => {
        Alert.alert("Hold on!", "Are you sure you want to Exit ?", [
            {
                text: "Cancel",
                onPress: () => null,
                style: "cancel"
            },
            { text: "YES", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
    }

    return (
        <>
            <View style={styles.userInfoSection}>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <Image
                        source={require('./profile.png')}
                        style={styles.profileImage}
                    />
                    <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                        <Text style={styles.username}>Dipu Singh</Text>
                        <Text style={styles.userLocation}>Software Developer</Text>
                    </View>
                </View>
            </View>


            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <DrawerItem onPress={handleExitMenu} label="Exit" />
            <Text style={styles.lastItem}>App Version 1.0</Text>
            <Text style={styles.quanta}>Developed By Quanta Infotech</Text>
        </>
    )
}
export default Sidebar

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
        marginTop: 20,
        marginBottom: 20
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    username: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    userLocation: {
        fontSize: 12,
        color: 'gray',
    },
    lastItem: {
        paddingTop: 10,
        borderTopWidth: 0.25,
        borderTopColor: 'gray',
        color: 'blue',
        marginBottom: 10,
        fontSize: 15,
        textAlign: 'center'
    },
    quanta: {
        color: 'black',
        marginBottom: 30,
        fontSize: 15,
        textAlign: 'center'
    }
})