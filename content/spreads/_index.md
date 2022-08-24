---
title: Spreads
description: The powerhouse of this framework. 
---

A spread is basically a container that utilizes **flexbox**. It can be used to quickly create everything from baseline layout structures to top-level components. 

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
    <section class="spread purple inner-m-1 inner-p-1"> 
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
<section class="spread-right purple"> 
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
<section class="spread-left purple"> 
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


## Sizes

{{<  docs/sizes >}}


--- 

## Nested Spreads

```html
<section class="spread purple ">
    <div class="is-half is-fullsize-mobile"> 
        <div class="brighten-1 inner-p-3">
            <h1 class="text-center"> petals on a wet,<br> black bough.
            </h1>
            <h2 class="subtitle-2 mt-4 mb-4 text-center"> -Ezra Pound</h2>
            <section class="spread-left inner-is-fit inner-m-1 inner-p-3 inner-rounded-1">
                    <button class="button l is-outlined "> Get Started </button>
                    <button class="button l darken-3"> Live Demo</button>
            </section>
        </div>
    </div>
    <div class="is-half  is-fullsize-mobile darken-2"></div>
</section>
```

{{<  docs/spread-nested >}}

```html
<section class="spread inner-pinned-center purple  p-4">
    <div class=" text-center fullsize-mobile">
        <h1 > Mr. Meowgi</h1>
        <h2 class="subtitle-2"> is a russian blue cat.</h2>
    </div>
    <div class="spread rounded-2 fullsize-mobile display-pattern py-4">
        <div class=" is-one-third fullsize-mobile">
            <div class="content-wrapper text-center white m-3 p-3 "> 
                <p>
                    Meow.
                </p>
            </div> 
        </div>
        <div class=" is-one-third fullsize-mobile">
            <div class="content-wrapper text-right white m-3 p-3"> 
                <p>
                   Wow.
                </p>
            </div> 
        </div>
        <div class=" is-one-third fullsize-mobile">
            <div class="content-wrapper text-left white m-3 p-3 "> 
                <p>
                    Wow.
                </p>
            </div> 
        </div>
    </div>
</section>
```

{{<  docs/spread-nested-more >}}

---

## Best Practices 

- Assign **Spacing** to elements inside your sized spread items (grandchild elements).

