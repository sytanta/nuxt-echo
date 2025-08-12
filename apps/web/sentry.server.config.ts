import * as Sentry from "@sentry/nuxt";
 
Sentry.init({
  dsn: "https://3f1522a8e8b9e70b7114c312b1e46129@o4509828878303232.ingest.us.sentry.io/4509828962582528",

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,

  // Enable logs to be sent to Sentry
  enableLogs: true,
  
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
