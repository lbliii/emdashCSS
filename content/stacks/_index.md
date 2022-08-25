---
title: Stacks
---

A stack is basically a container that utilizes **flexbox** to flow vertically (`flex-flow: column wrap;`). It can be used to quickly create simple stacked structures like text layouts and link directories. 

## Generic Stacks

A generic stack fills its container's width; if child elements are present, they will auto-size to fill the stack horizontally **and** vertically.


```html
<section class="stack purple inner-m-1 inner-p-1">
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
    <div class="white m-1 p-1 inner-m-1 inner-p-1 rounded-3"> 
        <h1>Hello, Dolly!</h1>
        <p> It's so nice to have you back where you belong.</p>
    </div>
    <div class="black m-1 p-1 inner-m-1 inner-p-1 rounded-3"> 
        <h1>Hello, Dolly!</h1>
        <p> It's so nice to have you back where you belong.</p>
    </div>
    <div class="white m-1 p-1 inner-m-1 inner-p-1 rounded-3"> 
        <h1>Hello, Dolly!</h1>
        <p> It's so nice to have you back where you belong.</p>
    </div>
</section>
```

{{<  docs/stack-left >}}

### Stack Right

```html
<section class="purple stack-right">
    <div class="white m-1 p-1 inner-m-1 inner-p-1 rounded-3"> 
        <h1>Hello, Dolly!</h1>
        <p> It's so nice to have you back where you belong.</p>
    </div>
    <div class="black m-1 p-1 inner-m-1 inner-p-1 rounded-3"> 
        <h1>Hello, Dolly!</h1>
        <p> It's so nice to have you back where you belong.</p>
    </div>
    <div class="white m-1 p-1 inner-m-1 inner-p-1 rounded-3"> 
        <h1>Hello, Dolly!</h1>
        <p> It's so nice to have you back where you belong.</p>
    </div>
</section>
```

{{<  docs/stack-right >}}

### Stack Center 

```html
<section class="purple stack-center">
    <div class="white m-1 p-1 inner-m-1 inner-p-1 rounded-3"> 
        <h1>Hello, Dolly!</h1>
        <p> It's so nice to have you back where you belong.</p>
    </div>
    <div class="black m-1 p-1 inner-m-1 inner-p-1 rounded-3"> 
        <h1>Hello, Dolly!</h1>
        <p> It's so nice to have you back where you belong.</p>
    </div>
    <div class="white m-1 p-1 inner-m-1 inner-p-1 rounded-3"> 
        <h1>Hello, Dolly!</h1>
        <p> It's so nice to have you back where you belong.</p>
    </div>
</section>
```

{{<  docs/stack-center >}}

---

## Fit

Alternatively, you can use a generic stack and apply **fits**. 

- You can use `inner-fit` on the stack itself to tailor stack items to size to their content. 
- You can also use `is-fit` directly on child elements individually. This is especially useful for customizing link or button sizes inside your stack (see following example).

### Fit Types

|Type |Description |
|----|-------------|
|`is-fit` | `max-width: fit content; flex:none;`    |
| `is-fit-x` | `max-width: fit content;`  |
|`is-fit-y`| `flex:none;` |
|`inner-fit`| `> * { max-width: fit content; flex:none; } ` |
|`inner-fit-x`|`> * { max-width: fit content; } ` |
|`inner-fit-y`|`> * { flex:none; } ` |

```html
<section class="spread purple">
        <div class="stack inner-p-1 inner-m-2 ">
            <a href="" class="button white s text-center">  Link 1 </a>
            <a href="" class="button white s is-fit-y">  Link 2 </a>
            <a href="" class="button white s is-fit-x">  Link 3 </a>
            <a href="" class="button white s is-fit">  Link 4 </a>
        </div>
 
    <div class="is-four-fifths white inner-m-1 inner-p-1 text-center">
        <h1>Hello, world!</h1>
        <p> Lots of SEO Content here.</p>
        <p> Lots of SEO Content here.</p>
        <p> Lots of SEO Content here.</p>
        <p> Lots of SEO Content here.</p>
    </div>
</section>
```

{{<  docs/stack-in-spread >}}
