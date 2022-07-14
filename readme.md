
![Logo](https://i.ibb.co/xLnYppM/Qr-music.png)


## Demo

Please scan the code to test the app. Link: https://fe-qr-music.vercel.app/


# QR music (Backend)

Some time ago I wanted a small app to store favourite music which I or my family
can play. Generated QR code can be printed and sticked to the wall. Once you scan the code
it brings you to my site where you can listen only one song that is loaded from backend.
The posibility to add music for others will be disabled, and now is enabled to check the app.

Backend is written in express js in typescript. There are two routes and and mysql DB.


## 🚀 About Me
I'm a vue js developer who wants to be full stack with express && nest.


## Usage/Example
Get all songs that were added to the database.
```javascript
/api/history
```
Add a song (need to be a youtube link)
 ```javascript
/api/add
```

