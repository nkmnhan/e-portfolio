### 6/Jan/2023
- Use Nx to create work space
``` 
npx create-nx-workspace@latest --style=integrated --preset=express
```
- Keywords: **secure node js api keycloak, Nodejs keycloak-js adapter**
https://www.keycloak.org/docs/latest/securing_apps/index.html#_nodejs_adapter

### 9/Jan/2023
- Reactjs Nx Docker
- **Note:** carefully read the project.json file to find the outputPath because this is the input for this docker statement
```yaml
COPY --from=builder /app/dist/apps/e-portfolio /usr/share/nginx/html
```
- Read carefully the comment in Dockerfile: e-portfolio\web-apps\apps\e-portfolio\Dockerfile
- /usr/share/nginx/html in Dockerfile and nginx.conf is the same
  - /usr/share/nginx/html in Dockerfile is input
  - /usr/share/nginx/html in nginx.conf is used as the data for nginx

### 18/Jan/2023
- Create Node.js adapter follow https://www.keycloak.org/docs/latest/securing_apps/#_nodejs_adapter
- Create client steps:
  - Create Realm
  - Create Client
    - Enable Client authentication and Keycloak will display new tab: Credentials. That contains client secret
    - Enable Authorization
  - Create client scope(important steps)
    - Create scope and name it 'audience'
    - Create **new** mapper, included **Client Audience(the new client that created in step 2)** and name it 'audience-mapper'. Use mapper type is Audience, add to ID token and access token.
- Create Realm roles
- Create user and set password
- Assign user to realm role

### 29/Jan/2023
- ***Research Reactjs and boilerplate template***
- Read [create-react-app](https://github.com/facebook/create-react-app)
- If your website is mostly static (for example, a portfolio or a blog), consider using Gatsby or Next.js. Unlike Create React App, Gatsby pre-renders the website into HTML at build time. Next.js supports both server rendering and pre-rendering.
- Read [@nrwl/next](https://nx.dev/packages/next)
- https://juristr.com/blog/2021/06/create-nextjs-webapp-nx/
- Decided to use [Material UI](https://mui.com/material-ui/customization/theming/)

### 31/Jan/2023
- Use next-auth to build authentication with Google, Keycloak providers

### 02/Feb/2023
- Research Nextjs and serverless
- Read [serverless-nextjs](https://www.serverless.com/examples/serverless-nextjs)
- Read [sst.dev](https://sst.dev/) and [stt-dev example](https://sst.dev/examples/how-to-create-a-nextjs-app-with-serverless.html)
- Read [event-driven-architecture](https://serverlessland.com/event-driven-architecture/visuals)

### 08/Feb/2023
- Research serverless
- Read [sst.dev](https://docs.sst.dev/)
- Read [how to create a nextjs app with serverless](https://sst.dev/examples/how-to-create-a-nextjs-app-with-serverless.html#add-the-api)

## 13/Feb/2023
```
npx create-sst@latest my-sst-app
npx create-next-app@latest
npm run build
npm run deploy
```