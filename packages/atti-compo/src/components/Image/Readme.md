Image (we give the size in pixels into parameter):

```js
<Image
  alt="React/Redux"
  src="https://cdn-images-1.medium.com/max/1600/1*A9xdbbNo5q3Twf4l3yTBNA.png"
  height="100px"
  width="200px"
/>
```

Image (we give the width and the heigth of the theme which need to be considered into parameter) :

```js
<Image
  alt="React/Redux"
  src="https://cdn-images-1.medium.com/max/1600/1*A9xdbbNo5q3Twf4l3yTBNA.png"
  height="h15"
  width="w17"
/>
```

Image (we don't give any height/width, so the height/width of the theme will be used) :

```js
<Image
  alt="React/Redux"
  src="https://cdn-images-1.medium.com/max/1600/1*A9xdbbNo5q3Twf4l3yTBNA.png"
/>
```
