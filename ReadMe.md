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
      opacity={0.8}
      opacityColor={'white'}
      width={'70%'}
      height={50}
      text={'Button text'}
      textSize={20}
      textColor={'white'}
      bgColor={'purple'}
      borderRadius={10}
      onPress={onPress}
    />
```

## API
opacity 0.8;   opacityColor = 'white';
| prop           | type     | description             | default  |
| :------------- | :------- | :---------------------- | :------- |
| `duration`     | `Number` | Duration in ms.         | 800      |
| `opacity`      | `Number` | Ripple effect opacity.  | 0.8      |
| `opacityColor` | `String` | Ripple effect color.    | "white"  |
| `width`        | `String` | Button width.           | "70%"    |
| `height`       | `Number` | Button height.          |   50     |
| `text`         | `String` | Button text.            | "Text"   |
| `textSize`     | `Number` | Button textSize.        | 20       |
| `textColor`    | `String` | Button textColor.       | "white"  |
| `borderRadius` | `Number` | Button borderRadius.    | 10       |
| `bgColor`      | `String` | Button backgroundColor. | "purple" |
| `onPress`      | `Func`   | Button func.            | null     |
