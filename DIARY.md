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