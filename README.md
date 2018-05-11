# 💫 RSR

This is simple Node HTTP resource.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Requirements

* [Node](https://nodejs.org/en/);
* [Sequelize](http://docs.sequelizejs.com/manual/installation/getting-started.html).

## Installation

You can get it on npm.
```
npm install node-rsr --save
```
Or if you`re not into package management, just [download a ZIP](https://github.com/helderburato/node-rsr/archive/master.zip) file.

## Usage

```
static save(data) {
  return Rsr.save(Model, {
    data: data,
    error: 'Custom error message (optional)',
    validate: 'Custom validate message (optional)'
  });
}

static update(params, data) {
  return Rsr.update(Model, {
    params: params,
    data: data,
    error: 'Custom error message (optional)',
    validate: 'Custom validate message (optional)'
  });
}

static delete(params) {
  return Rsr.delete(Model, {
    params: params,
    error: 'Custom error message (optional)',
    validate: 'Custom validate message (optional)'
  });
}

static findAll(params) {
  return Rsr.findAll(Model, {
    params: params,
    error: 'Custom error message (optional)'
  });
}

static findOne(params) {
  return Rsr.findOne(Model, {
    params: params,
    error: 'Custom error message (optional)'
  });
}
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

# Changelog

This project adheres to [Semantic Versioning](https://semver.org/).
Every release, along with the migration instructions, is documented on the Github [Releases](https://github.com/helderburato/node-rsr/releases) page.

# Author

[Helder Burato](https://twitter.com/helderburato)

## License

[MIT License](LICENSE) © Helder Burato
