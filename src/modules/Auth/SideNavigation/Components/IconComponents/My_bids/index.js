import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    StyleSheet,
    Image
} from 'react-native';

const { width, height } = Dimensions.get('window');
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Record = (props) => {
    return (
        <View style={{ flexDirection: 'row', marginBottom: 5, justifyContent: "space-between", }}>
            <Text style={style.cellDetail}>{props.CustomerName}</Text>
            <Text style={style.cellDetail}>{props.BidTime}</Text>
            <Text style={{ fontSize: 8, marginTop: 10, width: '21%', }}>{props.BidRank}</Text>
            <Text style={{ fontSize: 8, marginTop: 10, width: '21%', }}>{props.YourBid}</Text>
            <Text style={style.cellDetail}>{props.WinningBid}</Text>
        </View>
    )
}


const My_bidsComponent = () => {
    var MyLoop = [];
    return (
        <View style={{ backgroundColor: '#4448FF', flex: 1, }}>
            <View style={{ backgroundColor: 'white', flex: 1, borderTopLeftRadius: 15, borderTopRightRadius: 15, }}>
                <ScrollView>
                    <View style={{ flex: 1, margin: 10, marginTop: 20 }}>
                        {/* today text */}
                        <Text style={{ fontSize: 13, fontWeight: "bold" }}>Today</Text>

                        {/* Box Cell Name */}
                        <View style={{
                            elevation: 5, marginTop: 20, backgroundColor: 'white', marginHorizontal: 3,
                            borderRadius: 15, marginBottom: 15, padding: 15
                        }}>
                            <View style={{ flexDirection: 'row', marginBottom: 5, justifyContent: "space-evenly" }}>
                                <Text style={style.cellName}>Customer</Text>
                                <Text style={style.cellName}>Bid time</Text>
                                <Text style={style.cellName}>Bid rank</Text>
                                <Text style={style.cellName}>Your bid</Text>
                                <Text style={style.cellName}>Winning bid</Text>


                            </View>
                            {/* cell line */}
                            <View style={style.cellStyle}></View>
                            {/* record 1 */}
                            <Record
                                CustomerName='Ali sheikh'
                                BidTime='02:35 pm'
                                BidRank='10 of 64 bids'
                                YourBid='Rs.2500'
                                WinningBid='  Rs.2500'
                            />
                            {/* cell line */}
                            <View style={style.cellStyle}></View>
                            {/* record 2 */}
                            <Record
                                CustomerName='Ali sheikh'
                                BidTime='02:35 pm'
                                BidRank='10 of 64 bids'
                                YourBid='Rs.2500'
                                WinningBid='  Rs.2500'
                            />
                            {/* cell line */}
                            <View style={style.cellStyle}></View>
                            {/* record 3 */}
                            <Record
                                CustomerName='Ali sheikh'
                                BidTime='02:35 pm'
                                BidRank='10 of 64 bids'
                                YourBid='Rs.2500'
                                WinningBid='  Rs.2500'
                            />
                            {/* cell line */}
                            <View style={style.cellStyle}></View>
                            {/* record 4 */}
                            <Record
                                CustomerName='Ali sheikh'
                                BidTime='02:35 pm'
                                BidRank='10 of 64 bids'
                                YourBid='Rs.2500'
                                WinningBid='  Rs.2500'
                            />
                        </View>




                        {/* Yesterday text */}
                        <Text style={{ fontSize: 13, fontWeight: "bold" }}>Yesterday</Text>

                        {/* Box Cell Name */}
                        <View style={{
                            elevation: 5, marginTop: 20, backgroundColor: 'white', marginHorizontal: 3,
                            borderRadius: 15, marginBottom: 15, padding: 15
                        }}>
                            <View style={{ flexDirection: 'row', marginBottom: 5, justifyContent: "space-evenly" }}>
                                <Text style={style.cellName}>Customer</Text>
                                <Text style={style.cellName}>Bid time</Text>
                                <Text style={style.cellName}>Bid rank</Text>
                                <Text style={style.cellName}>Your bid</Text>
                                <Text style={style.cellName}>Winning bid</Text>


                            </View>
                            {/* cell line */}
                            <View style={style.cellStyle}></View>
                            {/* record 1 */}
                            <Record
                                CustomerName='Ali sheikh'
                                BidTime='02:35 pm'
                                BidRank='10 of 64 bids'
                                YourBid='Rs.2500'
                                WinningBid='  Rs.2500'
                            />
                            {/* cell line */}
                            <View style={style.cellStyle}></View>
                            {/* record 2 */}
                            <Record
                                CustomerName='Ali sheikh'
                                BidTime='02:35 pm'
                                BidRank='10 of 64 bids'
                                YourBid='Rs.2500'
                                WinningBid='  Rs.2500'
                            />
                            {/* cell line */}
                            <View style={style.cellStyle}></View>
                            {/* record 3 */}
                            <Record
                                CustomerName='Ali sheikh'
                                BidTime='02:35 pm'
                                BidRank='10 of 64 bids'
                                YourBid='Rs.2500'
                                WinningBid='  Rs.2500'
                            />
                            {/* cell line */}
                            <View style={style.cellStyle}></View>
                            {/* record 4 */}
                            <Record
                                CustomerName='Ali sheikh'
                                BidTime='02:35 pm'
                                BidRank='10 of 64 bids'
                                YourBid='Rs.2500'
                                WinningBid='  Rs.2500'
                            />
                        </View>


                    </View>
                </ScrollView>
            </View>
        </View>
    )

}



const style = StyleSheet.create({
    cellName: {
        fontSize: 11,
        fontWeight: 'bold',
        width: '20%',


    },
    cellDetail: {
        fontSize: 8,
        marginTop: 10,
        width: '20%',

    },
    cellStyle: {
        borderWidth: 0.2,
    },

})
export default My_bidsComponent;