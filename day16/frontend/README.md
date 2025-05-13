#Day 16

## Integrating tailwind css in vite app

` npm install tailwindcss @tailwindcss/vite` : Install tailwindcss in vite app inside the app folder

````
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
``` : Configue `vite.config.js` and import tailwindcss funtion


`@import "tailwindcss";` : import tailwindcss in `index.css` file inside the app folder


Note: In .jsx file we can specify inline css using `className=""` attribute whereas in .html we can add inline css using `class=""` attribute


## Tips and Tricks for UI in tailwind CSS

[flowbite.com, tailkit.com, tailwindflex.com] : extension that can be used to create components easily just by copy and paste

There are certain differences in tailwind css syntax in .jsx and html files, if you have copied html code and want to change it into .jsx then we can use `html to jsx` plugin which automatically convert .html code into .jsx code tailwind css
````

[ui.shadcn.com]: one of the most popular prebuilt component which can be integrated in app easily. 


## Integrating bootstrap CSS in vite app using cdn 


add  following cdn link in index.html
```
<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/5.3.2/css/bootstrap.min.css"
  integrity="sha384-GLhlTQ8iRABQYhWfXcQH87EoGdH6j2L04K17Qixxpa5zLx1W5TDBm7t0j1JbntcG"
  crossorigin="anonymous"
/>
```