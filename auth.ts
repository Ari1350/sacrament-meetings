// auth.ts
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  secret: "un-texto-secreto-muy-largo-y-seguro-wdd430-12345", 
  providers: [
    Credentials({
      async authorize(credentials) {
        // Credenciales fijas de prueba 
        const adminEmail = "bishopric@church.org";
        const adminPassword = "password123";

        if (
          credentials?.email === adminEmail &&
          credentials?.password === adminPassword
        ) {
          return { id: "1", name: "Bishopric User", email: adminEmail };
        }
        
        return null; // Credenciales incorrectas
      },
    }),
  ],
});
