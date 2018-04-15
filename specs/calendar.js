module.exports = {
  'Calendar loads at least one meetup': browser => {
    browser
      .phoneSize()
      .url(browser.launchUrl)
      .waitForElementPresent('#calendar', 5000)
      .waitForElementVisible('.events-list', 5000)
      .assert.visible(
        '.events-list a[href^="https://www.meetup.com/"]'
      )
      .end()
  }
}
