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

## License

[MIT License](./LICENSE) © Helder Burato