# Day 15

## Tailwind

It is a CSS framework a utility-first CSS framework that provides a wide range of pre-defined classes for styling web elements directly in the HTML.

In simpler words tailwind CSS framework have predefined classes which are called utility in tailwind that are used to implement css in HTML.

Just like jsx files tailwind css also requires transpilers that conver the tailwind css into core css that is understood by the browser.

Background: bg-colorname-[50-900] : bg-red-800
padding: p-1 : padding 4px
padding-left-right-bottom-top: [pt, pr, pl, pd]-value if want in px then pt-[4px]

## Responsiveness

if device is small then we use `sm` and if medium deivce then `md` and if large device then `lg`.

if we want to add styles basis on the device then we can do this by following.
`sm:bg-red-500 md:bg-yellow-500 lg:bg-pink-500`

## pseudo class

if we want pseudo class in tailwind we can do it
`hover:bg-blue-50`

## Flex

```
<div class="flex justify-end space-x-2">
  <div class="boxho">Box1</div>
  <div class="boxho">Box1</div>
  <div class="boxho">Box1</div>
  <div class="boxho">Box1</div>
</div>

```

CSS

```
@import "tailwindcss";

@theme {
  /* ... */
}
@layer components {
  .boxho {
    @apply h-20 w-20 bg-yellow-500;
  }
}

```
