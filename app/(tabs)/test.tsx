import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
   // Define your props here
}

const test = (props: Props) => {
   return (
      <SafeAreaView>
         <View>
            <Text>FirstTab</Text>
         </View>
      </SafeAreaView>
   );
};

export default test;

const styles = StyleSheet.create({});
