import { CompleteConfigFromDisk } from "./functions/shared/shared";

const test: CompleteConfigFromDisk = {
  clientId: "ut6e2b0tfk94lrjbcnbd56iqc",
  clientSecret: "",
  oauthScopes: ["phone", "email", "profile", "openid"],
  tokenIssuer: "https://auth.mylo.id",
  tokenJwksUri: "https://auth.mylo.id/.well-known/jwks.json",
  authProviderUIDomain: "ciam-ui.kubestage.hearstapps.net",
  authProviderDomain: "https://auth.mylo.id",
  pathSignIn: process.env.SIGNIN_PATH || "",
  pathParseAuth: process.env.PARSEAUTH_PATH || "",
  pathRefresh: process.env.REFRESH_PATH || "",
  pathSignout: process.env.SIGNOUT_PATH || "",
  authProviderPathSignIn: "/login",
  authProviderPathToken: "/token",
  authProviderPathLogOut: "/logout",
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
