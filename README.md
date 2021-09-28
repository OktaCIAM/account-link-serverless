# Okta Account Claiming / Linking

This is an example application of how to perform account claiming with Okta.

This requires a Spoke tenant and a Org2Org pre-configured.

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
