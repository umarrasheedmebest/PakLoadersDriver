import * as React  from "react";
import {Text, View} from "react-native";

function Log_out({navigation})
{
    return(
        <View style = {{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text style = {{fontSize: 30}}>Log out</Text>
        </View>
    )
}
export default Log_out