---
title: Clickables
---

Clickables with Emdash are largely interchangeable with only minor differences, namely: labels do not wrap and links can optionally use their default link styling or be paired with buttons/labels.

## Buttons

A `button` can be used in a Spread or a Stack. They automatically align text to their `x-` and `y-`  center. Buttons inherit their `color` and `background-color` -- this makes it easy to use **color classes** that will always be legible. 

```html
<section class="spread"> 
    <div class="spread-center inner-m-1 inner-p-1 inner-rounded-4">
        <button class=" black xs"> Get Started</button>
        <button class=" white xs"> Get Started</button>
        <button class=" red xs"> Get Started</button>
        <button class=" blue xs"> Get Started</button>
        <button class=" green xs"> Get Started</button>
        <button class=" yellow xs"> Get Started</button>
    </div>
    <div class="stack-center inner-m-1 inner-p-1 inner-rounded-4">
        <button class=" black xs"> Get Started</button>
        <button class=" white xs"> Get Started</button>
        <button class=" red xs"> Get Started</button>
        <button class=" blue xs"> Get Started</button>
        <button class=" green xs"> Get Started</button>
        <button class=" yellow xs"> Get Started</button>
    </div>
</section>
```

{{< docs/buttons-colors >}}

## Labels 

A `label` can be used in a Spread or a Stack. They automatically align text to their `x-` and `y-`  center, however their text **does not wrap**. Labels inherit their `color` and `background-color` -- this makes it easy to use **color classes** that will always be legible. They do not convert your mouse to a pointer. 

{{< docs/labels-colors >}}

```html
<section class="spread inner-pinned-top"> 
    <div class="spread-left inner-m-1 inner-p-1">
        <div class="label black xs"> Dog</div>
        <div class="label white xs"> Cat</div>
        <div class="label red xs"> Pamplemousse</div>
        <div class="label blue xs"> Pokemon</div>
        <div class="label green xs"> Wildlding</div>
        <div class="label yellow xs"> Unknown</div>
    </div>
    <div class="stack-center inner-m-1 inner-p-1">
        <div class="label black xs"> Dog</div>
        <div class="label white xs"> Cat</div>
        <div class="label red xs"> Pamplemousse</div>
        <div class="label blue xs"> Pokemon</div>
        <div class="label green xs"> Wildling</div>
        <div class="label yellow xs"> Unknown</div>
    </div>
</section> 
```

## Links 

Links can either use their default styling or have their styling overriden by `color`, `label`, and `button` classes.

```html
<section class="spread inner-pinned-top"> 
    <div class="spread-left inner-m-1 inner-p-1">
        <a class="xs" href="google.com"> default link</a>
        <a class="black xs" href="google.com"> colored link</a>
        <a class="white xs text-right" href="google.com"> link right </a>
        <a class="red xs text-center" href="google.com"> link center </a>
    </div>
    <div class="stack inner-m-1 inner-p-1">
       <a class="black xs" href="google.com"> link</a>
        <a class="white xs text-right" href="google.com"> link</a>
        <a class="red xs text-center" href="google.com"> link</a>
    </div>
</section>
```

{{< docs/links-colors >}}