describe("Random Application", async () => {
  xit("Login page test", async () => {
    await browser.url("https://www.google.com");
    let title = await browser.getTitle();
    console.log(title);
    await expect(browser).toHaveTitle("Google");
  });

  xit("Text field validation", async function () {
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    (await $("input[name='username']")).setValue("Hello World");
    (await $("#username")).setValue("rahulshettyacademy");
    (await $("//input[@type='password']")).setValue("learningg");

    (await $("#signInBtn")).click();
    let incorrectText = await $(".alert-danger").getText();
    // console.log(incorrectText);
    await browser.waitUntil(
      async () => await $("#signInBtn").getAttribute("value"),
      { timeout: 5000, timeoutMsg: "Element not found" }
    );
    // console.log(await $(".alert-danger").getText());
  });

  it("Successful login test", async () => {
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    await $("#username").setValue("rahulshettyacademy");
    await $("//input[@type='password']").setValue("learning");
    await $("#signInBtn").click();
    await $(".btn-primary").waitForExist();
    await expect(browser).toHaveUrlContaining("shop");
    await expect(browser).toHaveTitle("ProtoCommerce");
  });
});
