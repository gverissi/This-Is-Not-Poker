# Buffy-Bluff
This is a demo app using javascript to make a none-poker game. It's also uses a web service done with php to send an email.

## JavaScript
All the business login is done using javascript classes. They are store in folder `assets/js/classes`.  
The entry point of the app is the `main.js` script in `assets/js`.

## HTML
The application has only 3 pages:  
- `index.html` witch is the main page  
- `rules.html` witch are not the rules, but a very cool video of Buffy speech  
- `reward.html` witch is used by the user to get a reward after giving his email.  

## Web Service
After the user has input his email, the app uses a [web service](https://github.com/gverissi/API-email) to send him back an email with instruction to get a gift.  

## Run the app locally
- clone the repo
- install dependencies using npm: `npm install`
- run a server using npm: `http-server`
- use your favorite browser and go to: `http://127.0.0.1:8080/`
- Finally enjoy

If the command line `http-server` is not recognise you must install http-server: `npm i -g http-server`


## Tests: Jasmine
- Download [jasmine-standalone](https://github.com/jasmine/jasmine/releases).
- Unzip it.
- Copy-paste the folder `lib` into `jasmine` folder (in your project).
- To run the tests open `SpecRunner.html` in your favorite browser.  
