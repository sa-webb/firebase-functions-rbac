// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyA0UDgRdMom_8JckyORvgrLtidBC1MYeGY",
    authDomain: "typescript-toptal.firebaseapp.com",
    databaseURL: "https://typescript-toptal.firebaseio.com",
    projectId: "typescript-toptal",
    storageBucket: "typescript-toptal.appspot.com",
    messagingSenderId: "436391633395",
    appId: "1:436391633395:web:bbc3b163e163a9ef01b286"
  },
  userApi: 'http://localhost:5000/typescript-toptal/us-central1/api'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
