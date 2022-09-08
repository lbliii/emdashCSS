---
title: Spreads
description: The powerhouse of this framework. 
weight: 1
---

A spread is basically a container that utilizes **flexbox** to flow horizontally. It can be used to quickly create everything from baseline layout structures to top-level components. 

## Generic Spreads

A generic spread fills its container's width; if child elements are present, they will auto-size to fill the spread.

### Basic Example

```html
    <section class="spread purple"> 
        <div class="blue"> one </div>
        <div class="red"> two </div>
        <div class="green"> three </div>
    </section>
```

{{<  docs/spread-generic >}}

### With Inner Spacing

Spreads utilize cascades to push standardized styles to child elements. This makes it quick and easy to whip up a series of buttons or cards.

```html
    <section class="spread purple inner-s-1"> 
        <div class="white"> one </div>
        <div class="white"> two </div>
        <div class="white"> three </div>
    </section>
```

{{<  docs/spread-generic-spaced >}}

---

## Directional Spreads 

Directional spreads have child elements with defined sizes that **do not equal** the full size of the parent spread.

### Spread-Left

```html
<section class="spread-left purple"> 
    <section class="is-one-third">
            <div class="white m-1 p-1"> one </div>
    </section>
    <section class="is-one-third">
            <div class="white m-1 p-1"> two </div>
    </section>
</section>
```

{{<  docs/spread-left >}}

### Spread-Right

```html
<section class="spread-right purple"> 
    <section class="is-one-third">
            <div class="white m-1 p-1"> one </div>
    </section>
    <section class="is-one-third">
            <div class="white m-1 p-1"> two </div>
    </section>
</section>
```

{{<  docs/spread-right >}}

### Spread-Center 

```html
<section class="spread-center purple"> 
    <section class="is-one-third">
            <div class="white m-1 p-1"> one </div>
    </section>
    <section class="is-one-third">
            <div class="white m-1 p-1"> two </div>
    </section>
</section>
```
{{<  docs/spread-center >}}

### Spread-Around

```html
<section class="spread-around purple"> 
    <section class="is-one-third">
            <div class="white m-1 p-1"> one </div>
    </section>
    <section class="is-one-third">
            <div class="white m-1 p-1"> two </div>
    </section>
</section>
```

{{<  docs/spread-around >}}


###  Sizes

Sizes are only used for top-level child elements in a directional spread.

{{<  docs/sizes >}}


--- 

## Nested Spreads

Notice in each example that you control set the mobile size via `is-fullfsize-mobile`.


### CTA Example 

```html
<section class="spread purple ">
    <div class="is-fullsize-mobile"> 
        <div class="brighten-1 inner-p-2">
            <h1> petals on a wet,<br> black bough.</h1>
            <h2 class="subtitle-2"> -Ezra Pound</h2>
            <section class="spread-left inner-fit inner-m-1 inner-p-2 inner-rounded-1">
                    <button class="button s outlined "> Get Started </button>
                    <button class="button s darken-2"> Live Demo</button>
            </section>
        </div>
    </div>
    <div class="is-fullsize-mobile darken-2"></div>
</section>

```

{{<  docs/spread-nested >}}

### Blade Example

```html
<section class="spread inner-pinned-center purple p-4">
    <div class="text-center is-fullsize-mobile">
        <h1 > Mr. Meowgi</h1>
        <h2 class="subtitle-2 m"> is a russian blue cat.</h2>
    </div>
    <div class="spread rounded-2 display-pattern py-2 inner-m-3 inner-p-2 inner-fullsize-mobile">
        <div class="text-center white"> 
            <p>Meow.</p>
        </div> 
        <div class="text-right white"> 
            <p> Wow.</p>
        </div> 
        <div class=" text-left white"> 
            <p> Wow.</p>
        </div> 
    </div>
</section>
```

{{<  docs/spread-nested-more >}}

