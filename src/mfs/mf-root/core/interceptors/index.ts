import errorInterceptor from '@components/core/interceptors/error.interceptor';
import tokenInterceptor from './token.interceptor';

export const interceptors: any[] = [
  errorInterceptor,
  tokenInterceptor
];
