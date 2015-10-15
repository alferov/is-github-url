# is-github-url

>  Validate whether a passed string is a valid GitHub URL

Unlike [is-git-url](https://github.com/jonschlinkert/is-git-urlhttps://github.com/jonschlinkert/is-git-url), is-github-url is a domain-specific validator. It returns `true` if passed URL is a part of `github.com` domain only.

## Installation
```
$ npm install is-github-url --save
```

## Usage
```js
var isGithubUrl = require('is-github-url');

// Valid examples
isGithubUrl('https://github.com/facebook/react') // => true
isGithubUrl('git@github.com:facebook/react.git') // => true
isGithubUrl('github.com/facebook/react') // => true
isGithubUrl('https://github.com/facebook/react/releases/tag/v0.14.0') // => true
isGithubUrl('www.github.com/facebook/react') // => true

//Invalid examples
isGithubUrl('https://google.com') // => false
isGithubUrl('unknown://github.com') // => false
isGithubUrl('http://alferov.github.io/') // => false

// It's possible to make the previous example to pass the validator:
isGithubUrl('http://alferov.github.io/', { includeGhPages: true })
```

## API
### `isGithubUrl(url, [options])`
Validate whether a passed string is a valid GitHub URL

#### Params
- **String** `url`: A string to be validated
- **Object** `options`: An object containing the following fields:
  - `includeGhPages` (Boolean): Add github.io domain to the matching pattern
  - `requireProtocol` (Boolean): Returns true only if URL contains protocol

## License
MIT © [Philipp Alferov](https://github.com/alferov)
