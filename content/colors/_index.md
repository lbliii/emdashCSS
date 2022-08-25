---
title: Colors 
---


EmdashCSS Comes with a default set of color classes that pair backgrounds with text.

## Root 

```css
:root {
    --is-text-color: #000000;
    --is-text-color-inverted: #ffffff;
    --is-header-text-color: #000000;
    --is-header-text-color-inverted: #ffffff;
    --is-red : #ff0000;
    --is-green : #00ff00;
    --is-blue : #0000ff;
    --is-yellow : #ffff00;
    --is-orange : #ff8000;
    --is-purple : #8000ff;
    --is-pink : #ff0080;
    --is-white : #ffffff;
    --is-black : #000000;
    --is-gray : #808080;
    --is-light-gray : #c0c0c0;
    --is-dark-gray : #404040;
    --is-light-red : #ff8080;
    --is-light-green : #80ff80;
    --is-light-blue : #8080ff;
    --is-light-yellow : #ffff80;
    --is-light-orange : #ffbf80;
    --is-light-purple : #bf80ff;
    --is-light-pink : #ff80bf;
    --is-primary: var(--is-purple);
}
```

### Background Colors

{{< docs/colors >}}

### Paired Text Colors 

{{< docs/colors-with-text >}}

---

## Shades 

### Darken 

```html
<section class="spread">
    <div class="ghost-3 purple"></div>
    <div class="ghost-3 purple darken-1"></div>
    <div class="ghost-3 purple darken-2"></div>
    <div class="ghost-3 purple darken-3"></div>
    <div class="ghost-3 purple darken-4"></div>
    <div class="ghost-3 purple darken-5"></div>
    <div class="ghost-3 purple darken-6"></div>
    <div class="ghost-3 purple darken-7"></div>
</section>
```

{{< docs/colors-darken >}}

### Brighten 

```html
<section class="spread">
    <div class="ghost-3 purple"></div>
    <div class="ghost-3 purple brighten-1"></div>
    <div class="ghost-3 purple brighten-2"></div>
    <div class="ghost-3 purple brighten-3"></div>
    <div class="ghost-3 purple brighten-4"></div>
    <div class="ghost-3 purple brighten-5"></div>
    <div class="ghost-3 purple brighten-6"></div>
    <div class="ghost-3 purple brighten-7"></div>
</section>
```

{{< docs/colors-brighten >}}

---

## Filters 

### Grayscale 

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