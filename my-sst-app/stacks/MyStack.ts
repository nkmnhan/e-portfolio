import { StackContext, NextjsSite } from "sst/constructs";

export function API({ stack }: StackContext) {
  // const api = new Api(stack, "api", {
  //   routes: {
  //     "GET /": "packages/functions/src/lambda.handler",
  //   },
  // });
  // stack.addOutputs({
  //   ApiEndpoint: api.url,
  // });
  const site = new NextjsSite(stack, "my-nextjs-site", {
    path: "my-nextjs-app/",
    runtime: "nodejs18.x",
    customDomain: {
      domainName: "nkmnhan.com",
      domainAlias: "www.nkmnhan.com",
      hostedZone: "nkmnhan.com"
    },
  });

  stack.addOutputs({
    URL: site.url || site.customDomainUrl || "Error"
  });
}