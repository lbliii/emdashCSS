---
title: Text
---

## Root 

```css
:root {
     --is-font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --is-header-line-height: 80%;
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

{{< docs/text-sizes >}}

## Standard

|Sizes|Weights|Transforms|Alignments|
|-|-|-|-|
|`xs`|`extra-thin`|`upper-case`|`text-right`|
|`s`|`thin`|`lower-case`|`text-left`|
|`m`|`light`|`capitalize`|`text-center`|
|`l`|`normal`||`text-justify`|
|`xl`|`medium`||`c-text-left`|
|`xxl`|`bold`||`c-text-right`|
|`xxxl`|`extra-bolt`||`c-text-center`|
||`hefty`|||



## Miscellaneous 

|Option|Description|
|-|-|
|`text-nowrap`|`white-space: nowrap;`|
|`italic`|`font-style: italic;`|
|`underline`|`text-decoration: underline;`|
|`strikethrough`|`text-decoration: line-through;`|