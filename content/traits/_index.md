---
title: Traits
weight: 6
---

## Global Traits 

### Move (Animations)

|Left|Right|Up|Down|
|-|-|-|-|
|`move-l`|`move-r`|`move-u`|`move-d`|
|`inner-move-l`|`inner-move-r`|`inner-move-u`|`inner-move-d`|

### Outlined 

|Options|Description|
|-|-|
|`outlined`|`border: 1px solid currentColor;`|
|`outlined-black`|`border: 1px solid #000;`|
|`outlined-white`|`border: 1px solid #fff;`|


#### Inner Outlined 

|Options|Description|
|-|-|
|`inner-outlined`|`> * { border: 1px solid currentColor; }`|
|`inner-outlined-black`|`> * { border: 1px solid #000; }`|
|`inner-outlined-white`|`> * { border: 1px solid #fff; }`|

### Rounded 

|Options|Description|
|-|-|
|`rounded-1`|`border-radius: 5px;`|
|`rounded-2`|`border-radius: 10px;`|
|`rounded-3`|`border-radius: 15px;`|
|`rounded-4`|`border-radius: 20px;`|
|`rounded-5`|`border-radius: 25px;`|
|`rounded-6`|`border-radius: 30px;`|
|`rounded-7`|`border-radius: 35px;`|
|`rounded-7`|`border-radius: 100%;`|


#### Inner Rounded 

|Options|Description|
|-|-|
|`inner-rounded-1`|`> * { border-radius: 5px; }`|
|`inner-rounded-2`|`> * { border-radius: 10px; }`|
|`inner-rounded-3`|`> * { border-radius: 15px; }`|
|`inner-rounded-4`|`> * { border-radius: 20px; }`|
|`inner-rounded-5`|`> * { border-radius: 25px; }`|
|`inner-rounded-6`|`> * { border-radius: 30px; }`|
|`inner-rounded-7`|`> * { border-radius: 35px; }`|
|`inner-rounded-7`|`> * { border-radius: 100%; }`|


### Shadow

#### Single Direction

|Option|Description|
|-|-|
|`shadow-u-1`|`filter: drop-shadow(0px -4px 5px var(--is-shadow-color));`|
|`shadow-u-2`|`filter: drop-shadow(0px -8px 10px var(--is-shadow-color));`|
|`shadow-u-3`|`filter: drop-shadow(0px -16px 20px var(--is-shadow-color));`|
|`shadow-d-1`|`filter: drop-shadow(0px 4px 5px var(--is-shadow-color));`|
|`shadow-d-2`|`filter: drop-shadow(0px 8px 10px var(--is-shadow-color));`|
|`shadow-d-3`|`filter: drop-shadow(0px 16px 20px var(--is-shadow-color));`|
|`shadow-l-1`|`filter: drop-shadow(4px 0px 5px var(--is-shadow-color));`|
|`shadow-l-2`|`filter: drop-shadow(8px 0px 10px var(--is-shadow-color));`|
|`shadow-l-3`|`filter: drop-shadow(16px 0px 20px var(--is-shadow-color));`|
|`shadow-r-1`|`filter: drop-shadow(-4px 0px 5px var(--is-shadow-color));`|
|`shadow-r-2`|`filter: drop-shadow(-8px 0px 10px var(--is-shadow-color));`|
|`shadow-r-3`|`filter: drop-shadow(-16px 0px 20px var(--is-shadow-color));`|

{{< docs/shadows-single-direction >}}

#### Diagonal

|Option|Description|
|-|-|
|`shadow-ul-1`|`filter: drop-shadow(-4px -4px 5px var(--is-shadow-color));`|
|`shadow-ul-1`|`filter: drop-shadow(-8px -8px 10px var(--is-shadow-color));`|
|`shadow-ul-1`|`filter: drop-shadow(-16px -16px 20px var(--is-shadow-color));`|
|`shadow-ur-1`|`filter: drop-shadow(4px -4px 5px var(--is-shadow-color));`|
|`shadow-ur-1`|`filter: drop-shadow(8px -8px 10px var(--is-shadow-color));`|
|`shadow-ur-1`|`filter: drop-shadow(16px -16px 20px var(--is-shadow-color));`|
|`shadow-dl-1`|`filter: drop-shadow(-4px 4px 5px var(--is-shadow-color));`|
|`shadow-dl-2`|`filter: drop-shadow(-8px 8px 10px var(--is-shadow-color));`|
|`shadow-dl-2`|`filter: drop-shadow(-16px 16px 20px var(--is-shadow-color));`|
|`shadow-dr-1`|`filter: drop-shadow(4px 4px 5px var(--is-shadow-color));`|
|`shadow-dr-2`|`filter: drop-shadow(8px 8px 10px var(--is-shadow-color));`|
|`shadow-dr-2`|`filter: drop-shadow(16px 16px 20px var(--is-shadow-color));`|

{{< docs/shadows-diagonal >}}

### Stickiness  

|Options|Description|
|-|-|
|`sticky`|` position: sticky; top:0;`|


### Level

|Options|Description|
|-|-|
|`level-top`|`z-index: 9999`|
|`level-bottom`|`z-index: -9999`|


---

## Spread Traits

### Inner Pinned

|Options|Description|
|---|----|
|`inner-pinned-top`| `align-items: flex-start;`|
|`inner-pinned-bottom`| `align-items: flex-end;`|
|`inner-pinned-center`| `align-items: center;`|
|`inner-pinned-stretch`| `align-items: stretch;`|
|`inner-pinned-baseline`| `align-items: baseline;`|


{{<  docs/spread-inner-pinned>}}

### Responsive Sizing & Visibility

#### Direct

|Mobile  |Tablet|Touch|Desktop|
|---|----|---|---|
|(<768px)|(>768px <1024px)|(<1024px)|(>1024px)|
|`is-fullsize-mobile`|`is-fullsize-tablet` |`is-fullsize-touch`|`is-fullsize-desktop`|
|`is-hidden-mobile`|`is-hidden-tablet` |`is-hidden-touch`|`is-hidden-desktop`|
|`is-invisible-mobile`|`is-invisible-tablet` |`is-invisible-touch`|`is-invisible-desktop`|

#### Inner 

|Mobile|Tablet|Touch|Desktop|
|---|----|---|---|
|(<768px)|(>768px <1024px)|(<1024px)|(>1024px)|
|`inner-fullsize-mobile`|`inner-fullsize-tablet` |`inner-fullsize-touch`|`inner-fullsize-desktop`|
|`inner-hidden-mobile`|`inner-hidden-tablet` |`inner-hidden-touch`|`inner-hidden-desktop`|
|`inner-invisible-mobile`|`inner-invisible-tablet` |`inner-invisible-touch`|`inner-invisible-desktop`|




---

## Stack Traits

### Fit

You can use a generic stack and apply **fits**. 

- You can use `inner-fit` on the stack itself to tailor stack items to size to their content. 
- You can also use `is-fit` directly on child elements individually. This is especially useful for customizing link or button sizes inside your stack (see following example).

#### Fit Types

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
