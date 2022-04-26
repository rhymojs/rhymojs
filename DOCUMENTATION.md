This is the documentation of the Rhymo project's functions, types, hooks, etc. The language used in this documentation file will be very basic and easy to understand.

If you see any typo's, or any other language error; please create an issue.

## Table of Contents

- [`makeRandomString`](https://github.com/rhymojs/rhymojs/blob/master/DOCUMENTATION.md#makerandomstring)
- [`toCapitalizeCase`](https://github.com/rhymojs/rhymojs/blob/master/DOCUMENTATION.md#tocapitalizecase)

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
