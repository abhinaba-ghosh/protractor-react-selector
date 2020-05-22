### Changelog

# 2.2.3

- Fix for the issue "resq not found"
- Fix promise in **_waitForReact_**

# 2.2.1

**_waitForReact_** support added. This should be added at the beforeAll hook in the code with reactRootElement information. This will reduce the load in the **_By_** locator every time firing a promise to check the ReactRoot is available or not.

## Breaking changes

- You should be using waitForReact in the beforeEach hook or BeforeAll hook.
- You should not be passing root Element information from element(by.react) locator

# 2.2.0

element(by.ReactSelector) is changed to element(by.react)
