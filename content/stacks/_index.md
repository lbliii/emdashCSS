---
title: Stacks
weight: 2
---

A stack is basically a container that utilizes **flexbox** to flow vertically. It can be used to quickly create simple stacked structures like text layouts and link directories. 

## Generic Stacks

A generic stack fills its container's width; if child elements are present, they will auto-size to fill the stack horizontally **and** vertically.


```html
<section class="stack purple nr-s-1">
    <div class="white"> Hello</div>
    <div class="white text-right"> I'm over here now</div>
    <div class="white text-center"> now I'm feeling centered</div>
</section>
```

{{<  docs/stack-wide >}}

---

## Directional Stacks 

Directional stacks shift elements **left**, **right**, and **center**. They do not use sizing; instead, they fit the content.

### Stack left 

```html
<section class="purple stack-left">
    <div class="white m-1 p-1 nr-s-1 rounded-3"> 
        <h1>Hello, Dolly!</h1>
        <p> It's so nice to have you back where you belong.</p>
    </div>
    <div class="black m-1 p-1 nr-s-1 rounded-3"> 
        <h1>Hello, Dolly!</h1>
        <p> It's so nice to have you back where you belong.</p>
    </div>
    <div class="white m-1 p-1 nr-s-1 rounded-3"> 
        <h1>Hello, Dolly!</h1>
        <p> It's so nice to have you back where you belong.</p>
    </div>
</section>
```

{{<  docs/stack-left >}}

### Stack Right

```html
<section class="purple stack-right">
    <div class="white m-1 p-1 nr-s-1 rounded-3"> 
        <h1>Hello, Dolly!</h1>
        <p> It's so nice to have you back where you belong.</p>
    </div>
    <div class="black m-1 p-1 nr-s-1 rounded-3"> 
        <h1>Hello, Dolly!</h1>
        <p> It's so nice to have you back where you belong.</p>
    </div>
    <div class="white m-1 p-1 nr-s-1 rounded-3"> 
        <h1>Hello, Dolly!</h1>
        <p> It's so nice to have you back where you belong.</p>
    </div>
</section>
```

{{<  docs/stack-right >}}

### Stack Center 

```html
<section class="purple stack-center">
    <div class="white m-1 p-1 nr-s-1 rounded-3"> 
        <h1>Hello, Dolly!</h1>
        <p> It's so nice to have you back where you belong.</p>
    </div>
    <div class="black m-1 p-1 nr-s-1 rounded-3"> 
        <h1>Hello, Dolly!</h1>
        <p> It's so nice to have you back where you belong.</p>
    </div>
    <div class="white m-1 p-1 nr-s-1 rounded-3"> 
        <h1>Hello, Dolly!</h1>
        <p> It's so nice to have you back where you belong.</p>
    </div>
</section>
```

{{<  docs/stack-center >}}

