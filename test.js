

  test('C118: Verify login with valid username and password', async (done) => {
    await page.goto('https://overlord-staging.corp.rambleron.com/');
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
  })