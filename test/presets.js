const test = require('tape')
const setup = require('./lib/setup')
const utils = require('./lib/utils')

test('presets: create a point with a preset', function (t) {
  setup.resetTestDataDir()
  const app = setup.createApp()
  setup.waitForLoad(app, t)
    .then(() => utils.waitForMapEditor(app))
    .then(() => app.client.click('.zoom-to.notice.fillD'))
    .then(() => setup.wait())
    .then(() => setup.wait())
    .then(() => app.client.click('.add-point.add-button'))
    .then(() => setup.wait())
    .then(() => app.client.moveToObject('#root', 500, 500))
    .then(() => setup.wait())
    .then(() => setup.wait())
    .then(() => app.client.buttonDown())
    .then(() => app.client.buttonDown())
    .then(() => app.client.click('#map'))
    .then(() => setup.wait())
    .then(() => setup.wait())
    .then(() => app.client.click('.preset-list-item.preset-clay'))
    .then(() => setup.wait())
    .then(() => app.client.click('.button-wrap .save'))
    .then(() => setup.wait())
    .then(() => app.client.waitUntilTextExists('.sidebar-component .header.fillL', 'Save your Edits'))
    .then(() => app.client.setValue('#preset-input-comment', 'this is a comment'))
    .then(() => setup.wait())
    .then(() => app.client.click('.action.save-button'))
    .then(() => app.client.waitUntilTextExists('.sidebar-component .save-success .save-summary', 'Synchronize to a USB drive to share your edits with others.'))
    .then(() => setup.endTest(app, t),
      (err) => setup.endTest(app, t, err || 'error'))
})
