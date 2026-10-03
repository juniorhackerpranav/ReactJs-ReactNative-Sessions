Defn : 
React Native is an open-source mobile application framework created by Meta (Facebook) in 2015. It allows developers to build cross-platform mobile apps for Android and iOS using JavaScript (or TypeScript) and React.

2. Key FeaturesCross
    - Platform Efficiency: 
        Share up to 80–90% of your codebase across iOS and Android, drastically reducing development cost and time-to-market.
    - Native Performance: 
        Renders true native UI elements, providing the look, feel, and performance of a native app.   
    - Fast Refresh: 
        Live changes update immediately in your simulator or physical device while retaining your current application state.
    - Massive Ecosystem & Community: 
        Supported by Meta and thousands of open-source contributors, featuring mature tools like Expo for rapid setup.   
    - Access to Native APIs: 
        Easily drop into native C++, Java/Kotlin, or Objective-C/Swift code whenever direct hardware access (e.g., Bluetooth, custom GPU shaders) is needed.


1. View
    Definition: View is like a div in React web. It is a fundamental container used to group, organize, and style other components.
2. Text
    Definition: Text is used to display text content. It supports text styling, nesting, and text-related interactions.
3. ScrollView
    Definition: ScrollView is a container that allows users to scroll through content vertically or horizontally. It is suitable for a limited amount of content.
4. SafeAreaView
    Definition: SafeAreaView is a legacy core component that helps keep content away from certain unsafe screen areas, such as notches. For modern apps, react-native-safe-area-context is generally preferred.
5. Button
    Definition: Button is a basic component used to perform an action when pressed. It has limited styling options.
6. Pressable
    Definition: Pressable is used to detect press interactions. Unlike Button, it allows complete customization of its appearance and press states.
7. TextInput
    Definition: TextInput is like the HTML input element. It allows users to enter text, passwords, emails, and other input values.
9. TouchableOpacity
    Definition: TouchableOpacity detects touch events and reduces the opacity of its children while pressed, providing visual feedback. Pressable is usually preferred for new implementations.
10. Image
    Definition: Image is used to display images from local assets or remote URLs.
11. FlatList
    Definition: FlatList efficiently renders large or dynamic lists by rendering items as needed, instead of rendering every item at once.
14. ActivityIndicator
    Definition: ActivityIndicator displays a loading spinner while some task is running, such as fetching data from an API.
15. StatusBar
    Definition: StatusBar controls the appearance of the device status bar, including its text and background appearance, subject to platform limitations.




Navigation : 
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack



 
### 1. View

Used as a container, similar to `<div>` in React.

```tsx
<View>
  <Text>Hello React Native</Text>
</View>
```

---

### 2. Text

Used to display text.

```tsx
<Text>Hello World!</Text>
```

With styling:

```tsx
<Text style={{ fontSize: 24 }}>
  Welcome to React Native
</Text>
```

---

### 3. ScrollView

Used when content needs to be scrollable.

```tsx
<ScrollView>
  <Text>Item 1</Text>
  <Text>Item 2</Text>
  <Text>Item 3</Text>
  <Text>Item 4</Text>
  <Text>Item 5</Text>
</ScrollView>
```

---

### 4. SafeAreaView

Keeps content away from unsafe areas such as notches.

```tsx
<SafeAreaView>
  <Text>Hello from Safe Area</Text>
</SafeAreaView>
```

> For modern apps, `react-native-safe-area-context` is generally preferred.

---

### 5. Button

Basic button for performing an action.

```tsx
<Button
  title="Click Me"
  onPress={() => alert('Button Pressed')}
/>
```

---

### 6. Pressable

Used to detect press interactions with fully customizable UI.

```tsx
<Pressable
  onPress={() => alert('Pressed')}
>
  <Text>Press Me</Text>
</Pressable>
```

With press state:

```tsx
<Pressable
  onPress={() => alert('Pressed')}
  style={({ pressed }) => ({
    opacity: pressed ? 0.5 : 1,
  })}
>
  <Text>Press Me</Text>
</Pressable>
```

---

### 7. TextInput

Used to accept user input.

```tsx
<TextInput
  placeholder="Enter your name"
/>
```

With state:

```tsx
const [name, setName] = useState('');

<TextInput
  placeholder="Enter your name"
  value={name}
  onChangeText={setName}
/>
```

---

### 8. TouchableOpacity

Makes a component touchable and reduces opacity when pressed.

```tsx
<TouchableOpacity
  onPress={() => alert('Pressed')}
>
  <Text>Click Me</Text>
</TouchableOpacity>
```

> `Pressable` is generally preferred for new implementations.

---

### 9. Image

Used to display an image.

**Remote image:**

```tsx
<Image
  source={{
    uri: 'https://picsum.photos/200',
  }}
  style={{
    width: 200,
    height: 200,
  }}
/>
```

**Local image:**

```tsx
<Image
  source={require('./assets/logo.png')}
  style={{
    width: 200,
    height: 200,
  }}
/>
```

---

### 10. FlatList

Used to efficiently display lists.

```tsx
const users = [
  { id: '1', name: 'Pranav' },
  { id: '2', name: 'Rahul' },
  { id: '3', name: 'Amit' },
];

<FlatList
  data={users}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <Text>{item.name}</Text>
  )}
/>
```

---

### 11. ActivityIndicator

Displays a loading spinner.

```tsx
<ActivityIndicator />
```

With size:

```tsx
<ActivityIndicator
  size="large"
/>
```

Example while fetching API:

```tsx
{loading && <ActivityIndicator size="large" />}
```

---

### 12. StatusBar

Controls the appearance of the device status bar.

```tsx
<StatusBar
  barStyle="dark-content"
/>
```

For a light status-bar text:

```tsx
<StatusBar
  barStyle="light-content"
/>
```