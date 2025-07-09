import { fastifyCors } from '@fastify/cors';
import { fastify } from 'fastify';
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod';
import { env } from './env.ts';

//criando a aplicação utilizando o fastify junto com o zod
const app = fastify().withTypeProvider<ZodTypeProvider>();

//definindo qual url vai consumir a api
app.register(fastifyCors, {
  origin: 'http://localhost:5173',
});

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

//porta para verificar se o server ta rodando
app.get('/health', () => {
  return 'OK';
});

app.listen({ port: env.PORT });
