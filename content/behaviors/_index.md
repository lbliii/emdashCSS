---
title: Behaviors
---

## Global Behaviors 

### Outlined 

|Options|Description|
|-|-|
|`is-outlined`|`border: 1px solid currentColor;`|
|`is-outlined-black`|`border: 1px solid #000;`|
|`is-outlined-white`|`border: 1px solid #fff;`|


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
|`rounded-8`|`border-radius: 100%;`|


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
|`inner-rounded-8`|`> * { border-radius: 100%; }`|

### Stuck 

|Options|Description|
|-|-|
|`sticky`|` position: sticky; top:0;`|


### Z Index 

|Options|Description|
|-|-|
|`level-top`|`z-index: 9999`|
|`level-bottom`|`z-index: -9999`|


---

## Spread Behaviors

### Pin

|Options|Description|
|---|----|
|`inner-pinned-top`| `align-items: flex-start;`|
|`inner-pinned-bottom`| `align-items: flex-end;`|
|`inner-pinned-center`| `align-items: center;`|
|`inner-pinned-stretch`| `align-items: stretch;`|
|`inner-pinned-baseline`| `align-items: baseline;`|

---

## Stack Behaviors 

### Fit

|Options|Description|
|-|-|
|`is-fit`|`max-width: fit-content !important; flex: none !important;`|
|`is-fit-x`|`max-width: fit-content !important;`|
|`is-fit-y`|`flex: none !important;`|


#### Inner Fit 

|Options|Description|
|-|-|
|`inner-is-fit`|`> * { max-width: fit-content !important; flex: none !important; }`|
|`inner-is-fit-x`|`> * { max-width: fit-content !important; }`|
|`inner-is-fit-y`|`> * { flex: none !important; }`|