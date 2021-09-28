# Okta Account Claiming / Linking

This application allows two disparate account, a pre-existing account on a Okta Hub IdP and one on an external IdP, to be linked through verifying account ownership on the Hub side. In addition, this can support either SAML or OIDC, and is completely dependentant on the federation between the two, configured through Okta.

Typical use-cases include:
- Just-in-Time creation is not allowed on the Hub
- The external IdP has matching attributes
- Factor verification is required to link the accounts
- Requires [SAML 2.0 Section 5.4.2](http://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0-cd-02.html#5.4.2.Federation%20Using%20Out-of-Band%20Account%20Linking|outline) functionality

While the application is simple to standup, this does require some configuration on the Spoke tenant and Hub tenants and is best to speak with your Okta representative.

#### High-Level Flow
![Generic SP Account Linking](https://user-images.githubusercontent.com/6020066/135152692-4291d3ac-cd3e-4787-bd3f-d7b95a5ba304.png)

#### Implementation Flow
![SEI - Demo Implementation](https://user-images.githubusercontent.com/6020066/135152594-296a575d-2cf7-4b94-af7d-59d13be0957e.png)

## Usage
This is built with the [Serverless Framework](https://www.serverless.com/), and will require the CLI tooling in order to perform the actions listed below.

### Deployment

In order to deploy the example, you need to run the following command:

```
$ serverless deploy
```

After running deploy, you should see output similar to:

### Remote Invocation

After successful deployment, you can invoke the deployed function by using the following command:

```bash
serverless invoke  --function createLink --path mocks/createLink.json
```

### Local Invocation

Update the mock stubs accordingly with your correct tokens, then you can locally test each lambda.

```bash
serverless invoke local --function createLink --path mocks/createLink.json
```

```bash
serverless invoke local --function linkRedirect --path mocks/redirect.json
```
