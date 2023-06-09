import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "react-native";
import DrawerContent from "./src/components/DrawerContent";
import Settings from "./src/screens/Settings";
import Predictor from "./src/screens/Predictor";
import About from "./src/screens/About";

const Drawer = createDrawerNavigator();

const App = (): JSX.Element => {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor="#121212" barStyle="light-content" />
            <Drawer.Navigator
                initialRouteName="Prediction"
                drawerContent={(props) => <DrawerContent {...props} />}
                screenOptions={{
                    drawerStyle: {
                        backgroundColor: "#ebebeb",
                        width: 240,
                    },
                }}
            >
                <Drawer.Screen
                    name="Prediction"
                    component={Predictor}
                    options={{
                        headerStyle: {
                            backgroundColor: "#121212",
                        },
                        headerTintColor: "#FFFFFF",
                    }}
                />
                <Drawer.Screen name="Settings" component={Settings} />
                <Drawer.Screen name="About" component={About} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};
export default App;
