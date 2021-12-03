# List screen

## FlatList
```
<FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    keyExtractor={(friend) => friend.name}
    data={friends}
    renderItem={({ item }) => {
        return <Text>{item.name}</Text>
    }}
/>
```

`data​` array <strong>Required</strong> <br>
`renderItem` Takes an item from data and renders it into the list. <strong>Required</strong> <br>
`keyExtractor` can create unique key for renderItem. <br>
`showsHorizontalScrollIndicator` show or hide horizontal scroll bar. <br>

key link: https://reactjs.org/docs/lists-and-keys.html#keys <br>
FlatList link: https://reactnative.dev/docs/flatlist <br>
