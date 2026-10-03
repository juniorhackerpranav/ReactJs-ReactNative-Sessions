# Session 1 : React Native Introduction and Basics

```text
1. Introduction to React Native

2. What is React Native?

3. Why React Native?

4. React Native Features

5. Create First React Native Project

6. Understand the Project Structure

7. Core Components

8. View

9. Text

10. ScrollView and SafeAreaView

11. Button, Pressable, and TouchableOpacity

12. TextInput

13. Image

14. FlatList

15. ActivityIndicator and StatusBar
```

***

## 1. Introduction to React Native

React Native is an open-source mobile application development framework created by Meta (formerly Facebook) and released in 2015. It allows developers to build cross-platform mobile applications for Android and iOS using JavaScript or TypeScript along with the React library.

***

## 2. What is React Native?

* **Cross-platform framework:** Write one codebase and run it on both Android and iOS.
* **Uses React concepts:** Components, props, state, and hooks work similarly to React web development.
* **Native UI components:** React Native renders real native mobile UI components instead of web views, giving apps a native-like look and feel.
* **JavaScript/TypeScript support:** Developers can use JavaScript or TypeScript to build mobile applications.

***

## 3. Why React Native?

* **Single codebase:** Build Android and iOS apps without writing completely separate native applications.
* **Faster development:** Reuse components, logic, and code across platforms, reducing development time and effort.
* **Native-like performance:** Applications use native UI components, providing a smooth mobile experience.
* **Large ecosystem:** Supports many third-party libraries, tools, and plugins.
* **Strong community:** Backed by Meta and widely used by developers and companies around the world.

***

## 4. React Native Features

* **Cross-platform development:** Build apps for Android and iOS from one project.
* **Reusable components:** Create UI components once and reuse them throughout the app.
* **Component-based architecture:** Makes applications modular, maintainable, and scalable.
* **Fast Refresh:** Instantly see code changes in the app without rebuilding the entire application.
* **Third-party library support:** Use community packages for navigation, animations, storage, camera, maps, and more.
* **Good performance:** Native components help deliver responsive mobile applications.

***

## 5. Create First React Native Project

The recommended way to create a React Native project is by using the React Native CLI.

### Commands to Run:

```bash
# Create a new React Native project
npx @react-native-community/cli init MyReactNativeApp

# Navigate into the project directory
cd MyReactNativeApp

# Install dependencies
npm install

# Run the app on Android
npm run android

# Run the app on iOS (macOS only)
npm run ios

# Start Metro bundler
npm start
```

***

## 6. Understand the Project Structure

A standard React Native project structure looks like this:

```text
MyReactNativeApp/
├── android/                 # Android native project files
├── ios/                     # iOS native project files
├── node_modules/            # Installed npm packages and dependencies
├── src/                     # Main application source code
│   ├── components/          # Reusable UI components
│   ├── screens/             # Application screens
│   ├── assets/              # Images, fonts, and other static files
│   └── App.tsx              # Root application component
├── .gitignore               # Files ignored by Git
├── App.tsx                  # Root component
├── index.js                 # Entry point of the React Native app
├── package.json             # Project metadata, scripts, and dependencies
└── tsconfig.json            # TypeScript configuration file
```

***

## 7. Core Components

React Native provides built-in core components for building mobile UIs. These components are similar to HTML elements in web development, but they render native mobile UI elements.

| React Native Component | Similar Web Element | Purpose |
|---|---|---|
| `View` | `div` | Container for grouping and styling components |
| `Text` | `p`, `h1`, `span` | Display text content |
| `TextInput` | `input` | Accept user input |
| `Image` | `img` | Display images |
| `ScrollView` | Scrollable container | Scroll through content |
| `FlatList` | List | Efficiently render large lists |
| `Button` | `button` | Perform an action when pressed |
| `Pressable` | `button` | Handle custom press interactions |
| `ActivityIndicator` | Loader | Show a loading spinner |
| `StatusBar` | Browser bar | Control device status bar appearance |

***

## 8. View

`View` is like a `div` in React web. It is the fundamental container used to group, organize, and style other components.

### Example:

```jsx
import { View, Text, StyleSheet } from "react-native";

function App() {
  return (
    <View style={styles.container}>
      <Text>Hello React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default App;
```

***

## 9. Text

`Text` is used to display text content. It supports text styling, nesting, and text-related interactions.

### Example:

```jsx
import { Text, StyleSheet } from "react-native";

function App() {
  return (
    <Text style={styles.title}>
      Welcome to React Native
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});

export default App;
```

***

## 10. ScrollView and SafeAreaView

### ScrollView

`ScrollView` allows users to scroll through content vertically or horizontally. It is suitable for a limited amount of content.

```jsx
import { ScrollView, Text } from "react-native";

function App() {
  return (
    <ScrollView>
      <Text>Item 1</Text>
      <Text>Item 2</Text>
      <Text>Item 3</Text>
    </ScrollView>
  );
}

export default App;
```

### SafeAreaView

`SafeAreaView` is a legacy core component that helps keep content away from unsafe screen areas such as notches and status bars. For modern apps, `react-native-safe-area-context` is generally preferred.

```jsx
import { SafeAreaView, Text } from "react-native";

function App() {
  return (
    <SafeAreaView>
      <Text>Content stays inside the safe area</Text>
    </SafeAreaView>
  );
}

export default App;
```

***

## 11. Button, Pressable, and TouchableOpacity

### Button

`Button` is a basic component used to perform an action when pressed. It has limited styling options.

```jsx
import { Button, Alert } from "react-native";

function App() {
  return (
    <Button
      title="Click Me"
      onPress={() => Alert.alert("Button Pressed")}
    />
  );
}

export default App;
```

### Pressable

`Pressable` is used to detect press interactions. Unlike `Button`, it allows complete customization of its appearance and press states. It is usually preferred for new implementations.

```jsx
import { Pressable, Text, StyleSheet } from "react-native";

function App() {
  return (
    <Pressable
      style={styles.button}
      onPress={() => console.log("Pressed")}
    >
      <Text style={styles.buttonText}>Press Me</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default App;
```

### TouchableOpacity

`TouchableOpacity` detects touch events and reduces the opacity of its children while pressed, providing visual feedback. `Pressable` is usually preferred for new implementations.

```jsx
import { TouchableOpacity, Text } from "react-native";

function App() {
  return (
    <TouchableOpacity onPress={() => console.log("Touched")}>
      <Text>Touch Me</Text>
    </TouchableOpacity>
  );
}

export default App;
```

***

## 12. TextInput

`TextInput` is like the HTML `input` element. It allows users to enter text, passwords, emails, and other input values.

### Example:

```jsx
import { useState } from "react";
import { TextInput, Text, StyleSheet } from "react-native";

function App() {
  const [name, setName] = useState("");

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <Text>Hello, {name}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
  },
});

export default App;
```

***

## 13. Image

`Image` is used to display images from local assets or remote URLs.

### Local Image:

```jsx
import { Image } from "react-native";

function App() {
  return (
    <Image
      source={require("./assets/logo.png")}
      style={{ width: 100, height: 100 }}
    />
  );
}

export default App;
```

### Remote Image:

```jsx
import { Image } from "react-native";

function App() {
  return (
    <Image
      source={{
        uri: "https://reactnative.dev/img/react_native_logo.png",
      }}
      style={{ width: 100, height: 100 }}
    />
  );
}

export default App;
```

***

## 14. FlatList

`FlatList` efficiently renders large or dynamic lists by rendering items as needed, instead of rendering every item at once.

### Example:

```jsx
import { FlatList, Text, View } from "react-native";

const students = [
  { id: "1", name: "Alice" },
  { id: "2", name: "Bob" },
  { id: "3", name: "Charlie" },
];

function App() {
  return (
    <FlatList
      data={students}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View>
          <Text>{item.name}</Text>
        </View>
      )}
    />
  );
}

export default App;
```

***

## 15. ActivityIndicator and StatusBar

### ActivityIndicator

`ActivityIndicator` displays a loading spinner while some task is running, such as fetching data from an API.

```jsx
import { ActivityIndicator, View } from "react-native";

function App() {
  return (
    <View>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}

export default App;
```

### StatusBar

`StatusBar` controls the appearance of the device status bar, including its text and background appearance, subject to platform limitations.

```jsx
import { StatusBar, Text } from "react-native";

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Text>React Native StatusBar Example</Text>
    </>
  );
}

export default App;
```

*** 