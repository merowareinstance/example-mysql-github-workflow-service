const NodeEnvironment = require('jest-environment-node');
const { db } = require('../../src/modules');

class DbNodeEnvironment extends NodeEnvironment {
  constructor(config, context) {
    super(config, context);
    this.testPath = context.testPath;
  }

  async setup() {
    await super.setup();
    await db.init();
    this.global.db = db;
  }

  async teardown() {
    await db.shutdown();
    delete this.global.db;
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = DbNodeEnvironment;