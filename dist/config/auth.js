import { auth } from "express-openid-connect";
const config = {
    authRequired: false,
    auth0Logout: true,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    secret: process.env.AUTH_SECRET,
    routes: {
        login: "false"
    }
};
const authConfig = auth(config);
export { authConfig };
//# sourceMappingURL=auth.js.map