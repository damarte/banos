// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCpxuor78ckWT6Hr79tVQVAUS_jUvp3wtU',
    authDomain: 'localhost:4200',
    databaseURL: 'https://banos-de-rio-tobia.firebaseio.com/',
    projectId: 'banos-de-rio-tobia',
    storageBucket: '',
    messagingSenderId: ''
  }
};
