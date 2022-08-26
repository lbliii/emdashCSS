---
title: Text
weight: 4
---

## Root 

```css
:root {
    --xsmall-text: 0.6rem;
    --small-text: 0.8rem;
    --medium-text: 1rem;
    --large-text: 1.2rem;
    --xlarge-text: 1.5rem;
    --xxlarge-text: 2rem;
    --xxxlarge-text: 3rem;
}
```

---

## Sizes 

|Option|Description|
|-|-|
|`xs`|`font-size: var(--xsmall-text);`|
|`s`|`font-size: var(--small-text);`|
|`m`|`font-size: var(--medium-text);`|
|`l`|`font-size: var(--large-text);`|
|`xl`|`font-size: var(--xlarge-text);`|
|`xxl`|`font-size: var(--xxlarge-text);`|
|`xxxl`|`font-size: var(--xxxlarge-text);`|

## Weights 

|Option|Description|
|-|-|
|`extra-thin`|`font-weight: 100;`|
|`thin`|`font-weight: 200;`|
|`light`|`font-weight: 300;`|
|`normal`|`font-weight: 400;`|
|`medium`|`font-weight: 500;`|
|`semi-bold`|`font-weight: 600;`|
|`bold`|`font-weight: 700;`|
|`extra-bold`|`font-weight: 800;`|
|`hefty`|`font-weight: 900;`|


## Transforms 

|Option|Description|
|-|-|
|`uppercase`|`text-transform: uppercase;`|
|`lowercase`|`text-transform: lowercase;`|
|`capitalize`|`text-transform: capitalize;`|


## Alignments 

|Option|Description|
|-|-|
|`text-left`|`text-align: left;`|
|`text-right`|`text-align: right;`|
|`text-center`|`text-align: center;`|
|`text-justify`|`text-align: justify;`|


### Inner Alignments  

|Option|Description|
|-|-|
|`inner-text-left`|`> * {display: flex; justify-content: center; align-items: center; }`|
|`inner-text-right`|`> * {display: flex; justify-content: flex-end; align-items: center; }`|
|`inner-text-center`|`> * {display: flex; justify-content: flex-start; align-items: center; }`|

## Miscellaneous 

|Option|Description|
|-|-|
|`text-nowrap`|`white-space: nowrap;`|
|`italic`|`font-style: italic;`|
|`underline`|`text-decoration: underline;`|
|`strikethrough`|`text-decoration: line-through;`|