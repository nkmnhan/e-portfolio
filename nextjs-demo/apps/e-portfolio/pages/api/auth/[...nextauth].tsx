import NextAuth from "next-auth"
import KeycloakProvider from "next-auth/providers/keycloak";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook"
export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        // KeycloakProvider({
        //     clientId: 'snowball-web-app',
        //     clientSecret: 'yEoCLyCu5AyyCIdr7kVQjleKqQDSjapW',
        //     issuer: 'http://localhost:8080/realms/e-portfolio',
        // }),
        GoogleProvider({
            clientId: '344067178544-8hr4hpdsn0rnu17rejcms5u4te3htkv6.apps.googleusercontent.com',
            clientSecret: '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'
        }),
        FacebookProvider({
            clientId: '1551326005367439',
            clientSecret: 'a78c4003233f93e5032f81ae0dbe2d94'
        }
        )
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