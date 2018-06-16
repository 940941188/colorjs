# colorjs

## Install Colorjs

### Node.js

``` shell

  npm install colorjs

```

ES6

``` javascript

  import colorjs from 'colorjs';

  colorjs('#fff').format('RGB');

```


## Document

### Parse

#### RGBHex

```javascript

  colorjs('#fff');

  colorjs('#000000');

```

#### RGB

``` javascript

  colorjs({ r: 255, g: 255, b: 255 });

```

#### HSL

``` javascript

  colorjs({ h: 300, s: 100, l: 100 });

```

#### HSV

``` javascript

  colorjs({ h: 300, s: 100, v: 100 });

```

#### Format Type


  colorjs(clolorString, formatType);


``` javascript

  colorjs('#fff', 'RGBHex');

  colorjs('255, 255, 255', 'R, G, B');

  colorjs('300 100 100', 'H S L');

```
### Display

``` javascript

  colorjs('#fff', 'RGBHex').format('R, G, B');  // '255, 255, 255'

  colorjs('255, 255, 255', 'R, G, B').format('RGBHex');  // '#ffffff'

  colorjs('300 100 100', 'H S L').format('HSL'); // { h: 300, s: 100, l: 100 }

```

### Manipulate

#### Add

``` javascript

  colorjs('#000').add('r', 255);  //#ff0000

```

#### Subtraction

``` javascript

  colorjs('#fff').sub('r', 255);  //#00ffff

```


### Query

### Random
