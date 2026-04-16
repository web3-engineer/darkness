import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  // Opcional: Aqui depois podemos conectar o PrismaAdapter 
  // para salvar esses usuários no seu MongoDB automaticamente!
});

export { handler as GET, handler as POST };