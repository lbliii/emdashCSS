---
title: Layers
weight: 3
beta: true 
description: Layer elements horizontally and shift them center, left, or right.
---

## Generic Layers 

Layers overlap. Each layered item will rise to the top if hovered. You can apply any styling utilities you like to the items in a layer.

### Basic Example

```html
<div class="layer p-1 c-mx-4 c-p-4 c-fullsize-mobile c-outlined-black"> 
        <div class="white sp-2">
            <p>Layer One</p>
        </div>
        <div class="white sp-2">
            <p>Layer Two</p>
        </div>
        <div class="white sp-2">
            <p>Layer Three</p>
        </div>
</div>
```
{{< docs/layer-simple-left >}}

## Directional Layers 

### Layer-Left 

```html
<div class="layer-left p-1 c-one-third c-shadow-dr-1 text-center "> 
        <div class="white s-2 gradient-lr-bw">
            <h2 class="text-m">Layer One</h2>
            <p class="subtitle-1">Layer One</p>
            <img class="image-1x1 black"> 
        </div>
        <div class="white s-2 gradient-lr-bw">
            <h2 class="text-m">Layer Two</h2>
            <p class="subtitle-1">Layer Two</p>
            <img class="image-1x1 black"> 
        </div>
        <div class="white s-2 gradient-lr-bw">
            <h2 class="text-m">Layer Three</h2>
            <p class="subtitle-1">Layer Three</p>
            <img class="image-1x1 black"> 
        </div>
</div>
```

{{< docs/layer-left >}}


### Layer-Center 

```html
<div class="layer-center p-1 c-mx-4 c-fullsize-mobile"> 
        <div class="white s-2 gradient-lr-bw">
            <h2 class="text-m">Layer One</h2>
            <p class="subtitle-1">Layer One</p>
        </div>
        <div class="white s-2 gradient-lr-bw">
            <h2 class="text-m">Layer Two</h2>
            <p class="subtitle-1">Layer Two</p>
        </div>
        <div class="white s-2 gradient-lr-bw">
            <h2 class="text-m">Layer Three</h2>
            <p class="subtitle-1">Layer Three</p>
        </div>
</div>
```

{{< docs/layer-center >}}


### Layer-Right 

```html
<div class="layer-right p-1 c-fullsize-mobile c-shadow-dr-1 text-center"> 
        <div class="white s-2 gradient-lr-bw">
            <h2 class="text-m">Layer One</h2>
            <p class="subtitle-1">Layer One</p>
            <img class="image-1x1 black"> 
        </div>
        <div class="white s-2 gradient-lr-bw">
            <h2 class="text-m">Layer Two</h2>
            <p class="subtitle-1">Layer Two</p>
            <img class="image-1x1 black"> 
        </div>
        <div class="white s-2 gradient-lr-bw">
            <h2 class="text-m">Layer Three</h2>
            <p class="subtitle-1">Layer Three</p>
            <img class="image-1x1 black"> 
        </div>
</div>
```

{{< docs/layer-right >}}