import {StyleSheet, View} from 'react-native'

export default function App() {

    return (

        <View style={[
            styles.container,
            {
                flexDirection: 'column-reverse'
            }
        ]}>

        <View style={{flex: 2, backgroundColor: 'green'}} />

        <View style={{flex: 2, backgroundColor: 'red'}} />
        
        <View style={{flex: 2, backgroundColor: 'blue'}} />

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40
    }
})