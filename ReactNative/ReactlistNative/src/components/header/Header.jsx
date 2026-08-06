import { Text, View } from "react-native";
import { Styles } from "./Styles";


export const Header = () => {
    return(
        <View style={Styles.header}>
            <Text style={Styles.HeaderTitle}>React List</Text>
        </View>
    )
}