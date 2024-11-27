// Esto se guardo en un snippet con el comando: micro-envs

import 'dotenv/config';
import * as joi from 'joi';

//valida que el puerto sea un numero
interface EnvVars{
    PORT: number;
    STRIPE_SECRET: string;
    STRIPE_SUCCESS_URL: string;
    STRIPE_CANCEL_URL: string;
    STRIPE_ENDPOINTSECRET: string;
}

// El puerto tiene que ser obligatorio

const envSchema = joi.object({

    PORT: joi.number().required(),
    STRIPE_SECRET: joi.string().required(),
    STRIPE_SUCCESS_URL: joi.string().required(),
    STRIPE_CANCEL_URL: joi.string().required(),
    STRIPE_ENDPOINTSECRET: joi.string().required(),

})
.unknown(true);

// desestructura esas variables del .env
const { error, value } = envSchema.validate( process.env );

//creacion del mensaje de error
if(error){
    throw new Error(`Config validation error: ${error.message}`);
}

//cambia tipo de dato de any a number
const envVars: EnvVars = value;

export const envs ={
    port: envVars.PORT,
    stripeSecret: envVars.STRIPE_SECRET,
    stripeSuccessUrl: envVars.STRIPE_SUCCESS_URL,
    stripeCancelUrl: envVars.STRIPE_CANCEL_URL,
    stripeEndpointSecret: envVars.STRIPE_ENDPOINTSECRET,


}