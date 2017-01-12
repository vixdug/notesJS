## Objects

six primitive data types:
 * boolean
 * null
 * undefined
 * number
 * string
 * symbol
and Objects

**boolean examples**:
- var = tFal = true;
- var = tFal = false;

**string examples**
- var myStr = "hi";
- var myStr = 'hi';
- var str = ""; *this is still a stiring, although empty*

**number examples**
- var integer = 1;
- var nonInte = 1.1;
- var inf = infinity;
- var nan = NaN;

**undefined**
- var undefined = undifined;
- var anything; _this is auto undefined_

**object**

- var myObj = {};
- var myArr = [];

Defining objects:

```
var vic = {
  name: 'victoria'
  email: 'email@email.com'
}
```
this is referred to as an associative array (Hash)

"name" is the *key* and "David" is the *value*

`david.name;`
`david['name']`

you would access from console.log(david.name) etc. which produces a string representation of the value

you could test with **typeof**
```
console.log(typeof david);
```

#functions are objects

side-effects are something that functions can have. Mutating an object counts as a side effect. You could set hte value of an object to a function.

```
var spiderman = {
  superhuman: true,
  slingWeb: function(){
    this.webReserve = this.webReserve -1; (also written this.webReserve -= 1)
    console.log('zwoosh');
  }
  webReserve: 100
};

spiderman.slingWeb();
```
The `this` keyword for context points to the object that the function were inside of was called on. that is, the object that this function is a property of.
