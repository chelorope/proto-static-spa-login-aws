import { CompleteConfigFromDisk } from "./functions/shared/shared";

const test: CompleteConfigFromDisk = {
  userPoolArn:
    "arn:aws:cognito-idp:us-east-1:983532122716:userpool/us-east-1_nuIlGxEzI",
  clientId: "ut6e2b0tfk94lrjbcnbd56iqc",
  clientSecret: "",
  oauthScopes: [
    "phone",
    "email",
    "profile",
    "openid",
    "aws.cognito.signin.user.admin",
  ],
  authDomain: "ciam-ui.kubestage.hearstapps.net",
  redirectPathSignIn: "/parseauth",
  redirectPathSignOut: "/",
  redirectPathAuthRefresh: "/refreshauth",
  cookieSettings: {
    idToken: "",
    accessToken: "",
    refreshToken: "",
    nonce: "",
  },
  mode: "spaMode",
  httpHeaders: {
    "Content-Security-Policy":
      "default-src 'none'; img-src 'self'; script-src 'self' https://code.jquery.com https://stackpath.bootstrapcdn.com; style-src 'self' 'unsafe-inline' https://stackpath.bootstrapcdn.com; object-src 'none'; connect-src 'self' https://*.amazonaws.com https://*.amazoncognito.com",
    "Strict-Transport-Security": "max-age=31536000; includeSubdomains; preload",
    "Referrer-Policy": "same-origin",
    "X-XSS-Protection": "1; mode=block",
    "X-Frame-Options": "DENY",
    "X-Content-Type-Options": "nosniff",
  },
  logLevel: "debug",
  nonceSigningSecret: "vhYc30qaUIs41vSH",
  cookieCompatibility: "amplify",
  additionalCookies: {},
};

export default test;
