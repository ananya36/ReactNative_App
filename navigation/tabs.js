import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import aboutus from "../screens/aboutus"
import feed from "../screens/feed"

const Tab =createBottomTabNavigator();
const Tabs = () => {
    return(
        <TabNavigator>
            <Tab.Screen name="AboutUs" component={aboutus}/>
            <Tab.Screen name="Feed" component={feed} />
        </TabNavigator>
    )
}
export default Tabs;