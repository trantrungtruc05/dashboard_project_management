import passport from "passport";
import passportJWT from "passport-jwt";
import "../config/env";

const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy = passportJWT.Strategy;

const strategy = new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.KEY_DECRYPT_TOKEN,
},
    // tslint:disable-next-line:variable-name only-arrow-functions
    function(jwt_payload, next) {
        // console.log('payload received', jwt_payload);

        if (jwt_payload.username === null) {
            next(null, false);
        } else {
            const user = { username: jwt_payload.username };
            next(null, user);
        }

    },
);

passport.use(strategy);
