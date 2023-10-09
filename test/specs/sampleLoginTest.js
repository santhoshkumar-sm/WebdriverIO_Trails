describe("Random Application", async () => {
  it("Login page test", async () => {
    await browser.url("https://www.google.com");
    let title = await browser.getTitle();
    console.log(title);
  });
});
