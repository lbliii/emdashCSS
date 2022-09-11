---
title: Text
description: Explore text sizes, weights, alignments, and transformations.
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

## General Options

|Sizes|Weights|Transforms|Alignments|
|-|-|-|-|
|`xs` |`extra-thin`|`upper-case`|`text-right`|
|`s` H6 & P|`thin`|`lower-case`|`text-left`|
|`m` H5|`light`|`capitalize`|`text-center`|
|`l` H4|`normal`||`text-justify`|
|`xl` H3|`medium`||`c-text-left`|
|`xxl` H2|`bold`||`c-text-right`|
|`xxxl` H1|`extra-bolt`||`c-text-center`|
||`hefty`|||



## Miscellaneous 

|Option|Description|
|-|-|
|`text-nowrap`|`white-space: nowrap;`|
|`italic`|`font-style: italic;`|
|`underline`|`text-decoration: underline;`|
|`strikethrough`|`text-decoration: line-through;`|


### Break Words

You can break words to fall vertically using the `break` utility class.

```html
<div class="stack-center white sp-1">
    <div class="spread-center">
        <div class="is-fit">
        <h2 class="break m text-center is-fit sp-1">Mission <br><br>  Log</h2>
        </div>
        <div class="text-justify">
            <p>A note about Vollmer. He no longer describes the earth as a library globe or a map that has come alive, as a cosmic eye staring into deep space. This last was his most ambitious fling at imagery. The war has changed the way he sees the earth. The earth is land and water, the dwelling place of mortal men, in elevated dictionary terms. He doesn’t see it any more (storm-spiralled, sea-bright, breathing heat and haze and colour) as an occasion for picturesque language, for easeful play or speculation. </p>
            <p> At two hundred and twenty kilometres we see ship wakes and the larger airports. Icebergs, lightning bolts, sand-dunes. I point out lava flows and cold-core eddies. That silver ribbon off the Irish coast, I tell him, is an oil slick. [...]</p>
        </div>
        <h2 class="break m text-center is-fit sp-1">Mission <br><br>  Log</h2>
    </div>
    <h2 class="text-center sp-1"> Human Moments <br> in WW3</h2>
</div> 
```

{{< docs/text-break>}}

## Verticals

{{< docs/text-vertical>}}