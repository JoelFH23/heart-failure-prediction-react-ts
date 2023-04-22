import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from "@react-navigation/drawer";

const DrawerContent = (props: any) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView>
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        padding: 10,
                        borderColor: "#ccc",
                        borderBottomWidth: 1,
                    }}
                >
                    <Image
                        source={{ uri: "https://i.pravatar.cc/300" }}
                        style={{ width: 90, height: 90, borderRadius: 50 }}
                    />
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>
    );
};
export default DrawerContent;
