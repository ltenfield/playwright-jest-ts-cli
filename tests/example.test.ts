// Needs to be higher than the default Playwright timeout
jest.setTimeout(10 * 60  * 1000) // 10 minutes

async function searchForAdjective(anAdjString: string): Promise<void> {
  await page.goto("https://google.com");
  // via the toEqualText method
  await page.fill('input[name="q"]',anAdjString);
  await page.press('input[name="q"]', 'Enter');

  await expect(page).toEqualText("div.vmod > div.vmod:first-child i > span",
    "adjective",
    { timeout: 2000});  
}

describe("Google.com searching", () => {
it("searching agile should be an adjective", async () => {
    await searchForAdjective('agile');
  })

  it("searching proficient should be an adjective", async () => {
    await searchForAdjective('proficient');
  })
})
