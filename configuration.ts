export default {
  userPoolArn:
    "arn:aws:cognito-idp:us-east-1:983532122716:userpool/us-east-1_nuIlGxEzI",
  clientId: "4jrgkmajnlhv42mprj3mq2197d",
  clientSecret: "",
  oauthScopes: [
    "phone",
    "email",
    "profile",
    "openid",
    "aws.cognito.signin.user.admin",
  ],
  cognitoAuthDomain:
    "auth-bbc5f480-010c-11eb-be6c-0e30af5d4b9f.auth.us-east-1.amazoncognito.com",
  redirectPathSignIn: "/parseauth",
  redirectPathSignOut: "/",
  redirectPathAuthRefresh: "/refreshauth",
  cookieSettings: {
    idToken: null,
    accessToken: null,
    refreshToken: null,
    nonce: null,
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
