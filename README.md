
Setup:
- run: npm init playwright@latest
- create ignored by git login.config.ts file:
		export const LOGIN = "your login";
		export const PASS = "your password";
		export const URL = "environment";

Open Playwright tests
- npx playwright test or npx playwright test --ui