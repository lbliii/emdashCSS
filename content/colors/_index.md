---
title: Colors 
weight: 5
---


**EmdashCSS** Comes with a default set of color classes that pair backgrounds with text.

## Root 

```css
:root {
  --is-text-color: #000000;
  --is-text-color-inverted: #ffffff;
  --is-header-text-color: #000000;
  --is-header-text-color-inverted: #ffffff;
  --is-shadow-color: var(--is-dark-gray);
  --is-red: #ff0000;
  --is-green: #00ff00;
  --is-blue: #0000ff;
  --is-yellow: #ffff00;
  --is-orange: #ff8000;
  --is-purple: #8000ff;
  --is-pink: #ff0080;
  --is-white: #ffffff;
  --is-black: #000000;
  --is-gray: #808080;
  --is-graident-warm-pt-1: #ff0000;
  --is-graident-warm-pt-2: #ff4000;
  --is-graident-warm-pt-3: #ff8000;
  --is-graident-warm-pt-4: #ffbf00;
  --is-graident-warm-pt-5: #ffff00;
  --is-gradient-cold-pt-1: #0033ff;
  --is-gradient-cold-pt-2: #2200ff;
  --is-gradient-cold-pt-3: #5d00ff;
  --is-gradient-cold-pt-4: #8c00ff;
  --is-gradient-cold-pt-5: #f700ff;
}
```

---

### Background Colors

{{< docs/colors >}}


### Paired Text Colors 

{{< docs/colors-with-text >}}

### Gradients 

|Warm|Cold|
|-|-|
|`gradient-lr-warm `|`gradient-lr-cold `|
|`gradient-rl-warm `|`gradient-rl-cold `|
|`gradient-tb-warm `|`gradient-tb-cold `|
|`gradient-bt-warm `|`gradient-bt-cold `|

{{< docs/color-gradients >}}

---

## Shades 

### Darken 

```html
<section class="spread purple">
    <div class="ghost-3 "></div>
    <div class="ghost-3 darken-1"></div>
    <div class="ghost-3 darken-2"></div>
    <div class="ghost-3 darken-3"></div>
    <div class="ghost-3 darken-4"></div>
    <div class="ghost-3 darken-5"></div>
    <div class="ghost-3 darken-6"></div>
    <div class="ghost-3 darken-7"></div>
</section>
```

{{< docs/colors-darken >}}

### Brighten 

```html
<section class="spread purple">
    <div class="ghost-3"></div>
    <div class="ghost-3 brighten-1"></div>
    <div class="ghost-3 brighten-2"></div>
    <div class="ghost-3 brighten-3"></div>
    <div class="ghost-3 brighten-4"></div>
    <div class="ghost-3 brighten-5"></div>
    <div class="ghost-3 brighten-6"></div>
    <div class="ghost-3 brighten-7"></div>
</section>
```

{{< docs/colors-brighten >}}

---

## Filters 

### Grayscale 

This filter grayscales all child elements as well. 

```html
<section class="spread">
    <div class="ghost-3 red grayscale"></div>
    <div class="ghost-3 orange grayscale"></div>
    <div class="ghost-3 yellow grayscale"></div>
    <div class="ghost-3 green grayscale"></div>
    <div class="ghost-3 blue grayscale"></div>
    <div class="ghost-3 purple grayscale"></div>
    <div class="ghost-3 pink grayscale"></div>
    <div class="ghost-3 white grayscale"></div>
    <div class="ghost-3 black grayscale"></div>
    <div class="ghost-3 gray grayscale"></div>
</section>
```

{{< docs/colors-grayscale >}}

### Blur

```html
<section class="spread">
    <div class="ghost-3 red blur"></div>
    <div class="ghost-3 orange blur"></div>
    <div class="ghost-3 yellow blur"></div>
    <div class="ghost-3 green blur"></div>
    <div class="ghost-3 blue blur"></div>
    <div class="ghost-3 purple blur"></div>
    <div class="ghost-3 pink blur"></div>
    <div class="ghost-3 white blur"></div>
    <div class="ghost-3 black blur"></div>
    <div class="ghost-3 gray blur"></div>
</section>
```

{{< docs/colors-blur >}}

### Contrast 

```html
<section class="spread">
    <div class="ghost-3 red contrast"></div>
    <div class="ghost-3 orange contrast"></div>
    <div class="ghost-3 yellow contrast"></div>
    <div class="ghost-3 green contrast"></div>
    <div class="ghost-3 blue contrast"></div>
    <div class="ghost-3 purple contrast"></div>
    <div class="ghost-3 pink contrast"></div>
    <div class="ghost-3 white contrast"></div>
    <div class="ghost-3 black contrast"></div>
    <div class="ghost-3 gray contrast"></div>
</section>
```

{{< docs/colors-contrast >}}

### Hue Rotate 

```html
<section class="spread">
    <div class="ghost-3 red hue-rotate"></div>
    <div class="ghost-3 orange hue-rotate"></div>
    <div class="ghost-3 yellow hue-rotate"></div>
    <div class="ghost-3 green hue-rotate"></div>
    <div class="ghost-3 blue hue-rotate"></div>
    <div class="ghost-3 purple hue-rotate"></div>
    <div class="ghost-3 pink hue-rotate"></div>
    <div class="ghost-3 white hue-rotate"></div>
    <div class="ghost-3 black hue-rotate"></div>
    <div class="ghost-3 gray hue-rotate"></div>
</section>
```

{{< docs/colors-hue-rotate >}}

---

## Supernaturals

###  Ghost Types

Ghosts are defined heights with no content. Their intended use is mostly for testing and fun; however, you can probably use them to design colorful dividers and borders. 

|Type| Description|
|-|-|
|`ghost-1`| `height: 1px;`|
|`ghost-2`| `height: 5px;`|
|`ghost-3`|`height: 50px;`|
|`ghost-4`|`height: 100px;`|


## Ghoul Types 

Ghouls have a set maximum height and width so that you can easily create blocks and circles.

|Type| Description|
|-|-|
|`ghouls-1`|`> * { max-width: 10px; max-height: 10px; height: 10px;}`|
|`ghouls-2`|`> * { max-width: 10px; max-height: 20px; height: 20px;}`|
|`ghouls-3`|`> * { max-width: 10px; max-height: 30px; height: 30px;}`|
|`ghouls-4`|`> * { max-width: 10px; max-height: 40px; height: 40px;}`|
|`ghouls-5`|`> * { max-width: 10px; max-height: 50px; height: 50px;}`|
|`ghouls-6`|`> * { max-width: 10px; max-height: 100px; height: 100px;}`|
|`ghouls-7`|`> * { max-width: 200px; max-height: 200px; height: 200px;}`|

#### Circles 

```html
<section class="spread-center inner-m-1 ghouls-1">
    <div class="button red rounded-7 "></div>
    <div class="button gray rounded-7 "></div>
    <div class="button green rounded-7 "></div>
</section>
```

{{< docs/ghoul-circles >}}

#### Squares 

```html
<section class="spread-center inner-m-1 ghouls-4">
    <div class="button red"></div>
    <div class="button gray"></div>
    <div class="button green"></div>
</section>
```

{{< docs/ghoul-squares >}}