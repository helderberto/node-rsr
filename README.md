# RSR

This is simple Node HTTP resource.

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

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](https://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## License

[MIT License](./LICENSE) © Helder Burato
