# Node web application


```
$ git clone https://github.com/MartySmores/Ux.git
```
To push amendments to the code base please use a secure key and set the remote url of the repository as follows :

```
git remote set-url origin ssh://git@github.com/MartySmores/Ux.git
```

## Installation

Install all dependencies using npm.

```
$ npm install
```
## Development
You can define a port with `$ gulp --port 3333`. This can be modified in the gulp.js file.

```
$ npm start
```


## Production
Prior to deployment the content of the site need to be deployed to a production server. In this can all the production code appears in the dist folder.

```
$ gulp build --type production
```

## Testing
Added some basic scripts to check file and data integrity. A comprehensive series of testing routines can be ran to verify the integrity of the codebase.

```
$ npm test

```
