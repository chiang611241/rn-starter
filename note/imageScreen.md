# Image screen

## custom component - ImageDetail.js
```javascript
<ImageDetail
    title="Forest"
    imageSource={require("../../assets/images/forest.jpg")}
    score={9}
/>
```

This file can create custom component for screen or project. <br>
The parent component can pass props to child component. <br>

## Two way to pass prop

1.
```javascript
const ImageDetail = (prop) => {
  return (
    <View>
      <Image source={prop.imageSource} />
      <Text>{prop.title}</Text>
      <Text>Image Score - {prop.score}</Text>
    </View>
  );
};
```

2.
```javascript
const ImageDetail = ({ imageSource, title, score }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image Score - {score}</Text>
    </View>
  );
};
```

