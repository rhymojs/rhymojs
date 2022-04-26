This is the documentation of the Rhymo project's functions, types, hooks, etc. The language used in this documentation file will be very basic and easy to understand.

If you see any typo's, or any other language error; please create an issue.

## Table of Contents

- [`makeRandomString`](https://github.com/rhymojs/rhymojs/blob/master/DOCUMENTATION.md#makerandomstring)
- [`toCapitalizeCase`](https://github.com/rhymojs/rhymojs/blob/master/DOCUMENTATION.md#tocapitalizecase)
- [`uniqueArray`](https://github.com/rhymojs/rhymojs/blob/master/DOCUMENTATION.md#uniquearray)
- [`useClipboard`](https://github.com/rhymojs/rhymojs/blob/master/DOCUMENTATION.md#useclipboard)
- [`useGeolocation`](https://github.com/rhymojs/rhymojs/blob/master/DOCUMENTATION.md#usegeolocation)
- [`useLocalStorage`](https://github.com/rhymojs/rhymojs/blob/master/DOCUMENTATION.md#uselocalstorage)

<br>

## `makeRandomString()`

### Definition

This function generates a random string taking in the desired length as a parameter. It only uses letters and capital letters. No symbols.

### Possible Cases

- When you want to create a safe password
- When you want to create a token

### Example

```js
myString = makeRandomString(10);
console.log(myString);

// output: iuojhkdsfd
```

<br>

## `toCapitalizeCase()`

### Definition

This function capitalizes the first character of a given string.

### Possible Cases

- When you want to capitalize names
- When you want to capitalize titles

### Example

```js
myString = toCapitalizeCase("rhymo");
console.log(myString);

// output: Rhymo
```

<br>

## `uniqueArray()`

### Definition

This function removes the duplicated elements in an array.

### Possible Cases

- When you want to remove unintentional user inputs

### Example

```js
myArray = uniqueArray(["hello", "hello", "world", "world"]);
console.log(myArray);

// output: ["hello", "world"]
```

<br>

## `useClipboard()`

### Definition

This function helps you interact with the Clipboard API. You can get the value of the clipboard or set a value. Takes in initial value as a parameter.

### Possible Cases

- When you want to let the user copy something

### Example

```js
myClipboard = useClipboard("");
myClipboard.setClipboard("hello");

console.log(myClipboard.clipboard());

// output: "hello"
```

<br>

## `useGeolocation()`

### Definition

This function gets the user's IP.

### Possible Cases

- When you want to localize the language of your website to where the user lives
- When you want to add specific content for specific regions

### Example

```js
myGeolocation = useGeolocation();
console.log(myGeolocation);

// output: "127.0.0.1"
```

<br>

## `useLocalStorage()`

### Definition

This function helps you manage the local storage. Sometimes managing the local storage gets very repetitive and tidy to do. You should enter the name of the item that will be stored as a parameter. This will return you functions for setting and getting the value of that item.

### Possible Cases

- When you want to remember account settings

### Example

```js
myLocalStorageItem = useLocalStorage("theme");

myLocalStorageItem.setValue("dark");
console.log(myLocalStorageItem.value());
// output: dark

myLocalStorageItem.setValue("light");
console.log(myLocalStorageItem.value());
// output: light
```
