
## Vue, Firebase, Firebase Auth, Boostrap and Vue Router

## Getting Started 

### Firebase SetUp

- Set up a new firebase project 
- Create a new firebase database and set the security rules to

```
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth.uid != null;
    }
  }
}
```

- The above security rules will ensure that only a logged in user can access your database, this is what we want in this case. 

## Project Set Up
- Clone this repository 
- Run `yarn install` or `npm install`
- Enable firebase email authentication 
- Rename `config/Example.Firebase.js` to  `config/Firebase.js` and update `const config` to match your project. 

## Running instruction 

As per any application created using the `Vue cli` running the application is straight forward:

### Compiles and hot-reloads for development
```
yarn/npm serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```
