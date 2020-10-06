import { generalRequest, getRequest } from '../../utilities';
import { url, port, signUpentryPoint, signInentryPoint } from './server';

const URL = `http://${url}:${port}`;

const resolvers = {
	Mutation: {
		signUp: (_, { account }) =>
			generalRequest(`${URL}/${signUpentryPoint}`, 'POST', account),
		signIn: (_, { account }) =>
			generalRequest(`${URL}/${signInentryPoint}`, 'POST', account)
	}
};

export default resolvers;
