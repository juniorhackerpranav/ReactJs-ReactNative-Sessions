import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack> 
      <Stack.Screen name='index' options={{
      }}/>
      <Stack.Screen name='about' options={{}}/>
      <Stack.Screen name='profile' options={{}}/>
      <Stack.Screen name='profile/setting' options={{
      }}/>
      <Stack.Screen name='contact' options={{
      }}/>
    </Stack>
  )
}

export default _layout

 
// Bottom Tab 
// Stack 
// Drawer


// import { View, Text, TextInput, ToastAndroid, Pressable } from 'react-native'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import React, { useState } from 'react'

// const _layout = () => {

//   const [password, setpassword] = useState("")
//   const [phone, setPhone] = useState("")
//   const [name, setname] = useState("")

//   const submit = () => {
//     ToastAndroid.show("Form Submittend", ToastAndroid.SHORT);
//   }

//   return (
//     <SafeAreaView>

//       <View style={{ padding: 10 }}>
//         <Text style={{ paddingBottom: 10, fontSize: 20 }}>Form Example</Text>

//         <View>
//           <Text>Enter name : </Text>
//           <TextInput value={name}
//             placeholder='Name'
//             style={{ borderWidth: 1 }}
//             onChangeText={(value) => setname(value)}
//           />
//         </View>

//         <View>
//           <Text>Enter password : </Text>
//           <TextInput value={password}
//             placeholder='Password field'
//             style={{ borderWidth: 1 }}
//             onChangeText={(value) => setpassword(value)}
//             secureTextEntry={true}
//           />
//         </View>

//         <View>
//           <Text>Enter phone : </Text>
//           <TextInput value={phone}
//             placeholder='Phone field'
//             style={{ borderWidth: 1 }}
//             keyboardType='phone-pad'
//             onChangeText={(value) => setPhone(value)}
//           />
//         </View>

//       </View>

//       <Pressable onPress={()=>submit()}>
//         <Text>Submit</Text>
//       </Pressable>

//     </SafeAreaView>
//   )
// }

// export default _layout


// import { View, Text, ScrollView, Button, Pressable, ToastAndroid, ActivityIndicator, StatusBar, FlatList } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { useFocusEffect } from 'expo-router/build/react-navigation';
// import axios from "axios";


// interface PostType {
//   userId: string;
//   id: string;
//   title: string;
//   body: string;
// }


// const _layout = () => {

//   const [posts, setPosts] = useState<PostType[]>([]);

//   const fetchData = async () => {
//     try {
//       const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

//       setPosts(res.data as PostType[]);
//     } catch (error) {
//       ToastAndroid.show("Some error ", ToastAndroid.SHORT);
//     }
//   }

//   useEffect(() => {
//     fetchData();
//   }, [])

//   return (
//     <SafeAreaView>
//       {/* <Button title='Some title'></Button> */}

//       <FlatList
//         data={posts}
//         keyExtractor={(a) => a.id}
//         renderItem={({ item }) => {
//           return <View style={{ borderWidth: 2, marginBottom: 5 }}>
//             <Text>Id : {item.id}</Text>
//             <Text>{item.title}</Text>
//           </View>
//         }}
//       ></FlatList>


//       {/* <Pressable onPress={() => {
//         ToastAndroid.show("This is message", ToastAndroid.LONG);
//       }}>
//         <Text>Click Here</Text>
//       </Pressable> */}

//       {/* <StatusBar backgroundColor={"blue"} barStyle={"dark-content"} /> */}

//       {/* <ActivityIndicator size={40} /> */}

//       {/* <ScrollView horizontal={true}>
//         {
//           students.map((a) => {
//             return <View style={{height:20, width:70}}>
//               <Text>{a}</Text>
//             </View>
//           })
//         }
//       </ScrollView> */}

//       {/* <View style={{}}>
//         <Text style={{ fontSize: 10, color: "red" }}>1</Text>
//         <Text style={{ fontSize: 10, color: "red" }}>2</Text>
//         <Text style={{ fontSize: 10, color: "red" }}>3</Text>
//       </View> */}
//     </SafeAreaView>
//   )
// }

// export default _layout