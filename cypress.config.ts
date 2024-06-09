import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://askomdch.com/',
    video: true,
    },
});
