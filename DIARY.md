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