describe('Login', () => {
  beforeEach(async () => {
    // jest.setTimeout(10000)
    // const browser = await puppeteer.launch({headless: true})
    // const page = await browser.newPage()
    await page.goto('https://overlord-staging.corp.rambleron.com/');
  })

  // afterEach(async () => {
  //   await page.close()
  // })

  test('Should login to Overlord', async (done) => {
    await page.screenshot({path: 'poopie.png'})
    await page.waitForSelector('#email')
    await page.waitForSelector('#password')
    await page.type('#email', 'factorysupervisor@test.com')
    await page.type('#password', 'test1234')
    await page.screenshot({path: 'poopie2.png'})
    await page.click('.btn-primary')
    await page.waitForNavigation()
    await page.screenshot({path: 'poopie3.png'})
    await expect(page).toMatch('Welcome to OVERLORD')
    done()
  }, 30000)
});