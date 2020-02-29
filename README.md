# ts-express-boilerplate

![logo](logo-url)

Context
-------

The description of what the application do

Documentation
-------

*Production:* [https://api.yourdomain.io/docs/](https://api.dev.local/docs/)

*Staging:* [http://api-staging.yourdomain.io/docs/](https://api-sandbox.dev.local/docs/)

*Local:* [http://localhost:3000/docs/](http://localhost:3000/docs/)


Install
-------

**[Node Version Manager](https://github.com/nvm-sh/nvm) is recommend to manage Node.js versions**

**It always recommended to use latest LTS version of Node.js.**

To download, compile, and install the latest LTS release of Node.js with NVM, do this:
```shell script
nvm install --lts
```

Then in any new shell just use the installed version:
```shell script
nvm use --lts
```

And install project dependencies:
```shell script
npm install
```

Run
---

Execute:

```shell script
npm run build
npm start
```

Run development
---

Execute:

```shell script
npm run dev
```

Unit Tests
----------

Execute:
```shell script
npm test
```

Coverage
----------

Execute:

```shell script
npm run test:cov
```

Release
-------
This project uses [Semantic Versioning](http://semver.org/)

To make a release use the following command:
```shell script
npm version [ MAJOR | MINOR | PATCH ]
```

Tags:
1. **MAJOR** version when you make incompatible API changes,
2. **MINOR** version when you add functionality in a backwards compatible manner, and
3. **PATCH** version when you make backwards compatible bug fixes.

After running the command, you can simply push the tags to github with the command `git push && git push --tags`
