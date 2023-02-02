import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github";
import KeycloakProvider from "next-auth/providers/keycloak";

export const authOptions= {
    // Configure one or more authentication providers
    providers: [
        KeycloakProvider({
            clientId: 'snowball-web-app',
            clientSecret: 'yEoCLyCu5AyyCIdr7kVQjleKqQDSjapW',
            issuer: 'http://localhost:8080/realms/e-portfolio',
          })
        // ...add more providers here
    ],
    callbacks: {
        async jwt({ token, account }) {
            // Persist the OAuth access_token to the token right after signin
            if (account) {
                token.accessToken = account.access_token
            }
            return token
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token from a provider.
            session.accessToken = token.accessToken
            return session
        }
    }
}


export default NextAuth(authOptions)