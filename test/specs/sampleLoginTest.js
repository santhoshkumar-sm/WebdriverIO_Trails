describe("Random Application", async () => {
  it.skip("Login page test", async () => {
    await browser.url("https://www.google.com");
    let title = await browser.getTitle();
    console.log(title);
    await expect(browser).toHaveTitle("Google");
  });

  it("Text field validation", async function () {
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    (await $("input[name='username']")).setValue("Hello World");
    await browser.pause(5000);
    (await $("#username")).setValue("rahulshettyacademy");
    (await $("//input[@type='password']")).setValue("learning");
    await browser.pause(5000);

    (await $("#signInBtn")).click();
    await browser.pause(5000);
  });
});
