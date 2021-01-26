# Test Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.1.

## 1. Clone and Install dependences
Clone thhis repository and run `npm install` for install dependences.


## 2. API URL update
Modify `apiUrl` in `environmet.ts` file for the locale or the `environmet.prod.ts` file for a production environment, as follows:
```javascript
  export const environment = {
    // ...
    apiUrl: 'http://your-api-url'
  };
```

## 3. Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
## Build (optional)

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

