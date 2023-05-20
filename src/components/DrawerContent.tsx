import { View, Image } from "react-native";
import {
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";

const DrawerContent = (props: any) => {
    return (
        <View style={{ flex: 1, backgroundColor: "#121212" }}>
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
                        source={require("../../assets/images/default_avatar.png")}
                        style={{ width: 90, height: 90, borderRadius: 50 }}
                    />
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>
    );
};
export default DrawerContent;
