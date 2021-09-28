# Okta Account Claiming / Linking

This application allows two disparate account, an pre-existing account on a Okta Hub IdP and one on an external IdP, to be linked through verifying account ownership on the Hub side.

This use-case is primarily useful in various situations:
- Just-in-Time creation is not allowed on the Hub
- The external IdP has matching attributes
- Factor verification is required to link the accounts

While the application is simple to standup, this does require some configuration on the Spoke tenant and Hub tenants.

## Usage

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
