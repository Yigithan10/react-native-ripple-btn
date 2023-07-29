This is a custom button with ripple effect.
My build versions:
1- react-native-gesture-handler: 2.9.0
2- react-native-reanimated: 2.14.4

## Installation

```bash
  npm install react-native-ripple-btn
```

## Doc

[react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/)

[react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/docs/)

## Usage

```js
    //App.js
    import { GestureHandlerRootView } from "react-native-gesture-handler";

    <GestureHandlerRootView style={{flex: 1}}>
      //Your codes in here
    </GestureHandlerRootView>

    //Usage in screen
    import RippleButton from "react-native-ripple-btn";

    <RippleButton
        duration={800}
        width={'70%'}
        text={'btn text'}
        textSize={24}
        textColor={'white'}
        bgColor={'black'}
        borderRadius={30}
        onPress={onPress}
    />
```

## API

| prop           | type     | description             | default  |
| :------------- | :------- | :---------------------- | :------- |
| `duration`     | `Number` | Duration in ms.         | 1000     |
| `width`        | `String` | Button width.           | "70%"    |
| `height`        | `Number` | Button height.           | 50    |
| `text`         | `String` | Button text.            | "Text"   |
| `textSize`     | `Number` | Button textSize.        | 20       |
| `textColor`    | `String` | Button textColor.       | "white"  |
| `borderRadius` | `Number` | Button borderRadius.    | 10       |
| `bgColor`      | `String` | Button backgroundColor. | "purple" |
| `onPress`      | `Func`   | Button func.            | null     |
