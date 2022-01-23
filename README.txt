## General info
This a chat app that is still a work in progress. Users can only create public rooms.
Try [Live Demo](https://nana-chat-app-e3a7d.web.app/).

## Features
* Add/Delete Room (only admin or room owner can delete the room)
* Update User Profile: Name, About, Profile Photo
* Upload photos and videos (cannot upload multiple files)
* Search rooms and messages
* Emojis

## Technologies
Project is created with:
* React
* React Context API
* React Router v5.2.0
* React Player v2.6.2
* React Toastify v6.0.8
* Emoji Mart v3.0.0"
* Material-Ui v4.11.0
* Firebase: Authentication, Cloud Firestore(db), Storage, Hosting

## Steps on how to clone
#### 1: Clone this repo using this command 
`git clone https://github.com/NaNa2005/NaNa-Chat-App-React`

#### 2: Enter 
`cd NaNa-Chat-App-React`

#### 3: Next
`npm install`

#### 4: Goto `src/components` & Find file named `firebase.js` => Input your config data.

#### 5: Type `npm start` in terminal and hit enter. 


## Set Up Hosting in Firebase

#### 1: Hit command `firebase init`

#### 2: Enter Yes

#### 3: Goto the 4th option says - "Configure and Deploy firebase Hosting sites", Use Arrow key to go down & Hit spacebar to select the option and then hit Enter key

#### 4: Enter `build` for directory && select `Yes` for for as a single-page app and `No` for Overwrite.

#### 5: After initialization Completed. Enter 
`npm run build`

#### 6: Now the last command
Enter `firebase deploy`

#### You're done now you can enjoy your web chatting app.