import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import react from "react";
import { View, Text } from "react-native";
// import {Icon, View} from 'native-base'

function Sidebar({ ...props }) {
    return (
        <>
            <View>
                
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <DrawerItem label="Ver 1.0"
                style={{}}
            // icon={({color, size}) => <Icon name="grade" />}
            />
            <Text>App Version 1.0</Text>
        </>
    )
}
export default Sidebar