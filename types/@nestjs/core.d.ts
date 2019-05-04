export const APP_FILTER: string;
export const APP_GUARD: string;
export const APP_INTERCEPTOR: string;
export const APP_PIPE: string;
export class AbstractHttpAdapter {
  constructor(instance: any);
  instance: any;
  get(args: any): any;
  getHttpServer(): any;
  getInstance(): any;
  head(args: any): any;
  listen(port: any, hostname: any, callback: any): any;
  options(args: any): any;
  patch(args: any): any;
  post(args: any): any;
  put(args: any): any;
  setHttpServer(httpServer: any): void;
  use(args: any): any;
}
export class BaseExceptionFilter {
  constructor(applicationRef: any);
  applicationRef: any;
  isExceptionObject(err: any): any;
}
export namespace BaseExceptionFilter {
  const logger: {
    callFunction: Function;
    context: string;
    debug: Function;
    error: Function;
    getInstance: Function;
    isTimestampEnabled: boolean;
    log: Function;
    verbose: Function;
    warn: Function;
  };
}
export class HttpAdapterHost {
}
export class MiddlewareBuilder {
  constructor(routesMapper: any);
  routesMapper: any;
  middlewareCollection: any;
  apply(middleware: any): any;
  build(): any;
}
export namespace MiddlewareBuilder {
  class ConfigProxy {
    constructor(builder: any, middleware: any);
    builder: any;
    middleware: any;
    excludedRoutes: any;
    exclude(routes: any): any;
    forRoutes(routes: any): any;
    getExcludedRoutes(): any;
    isRouteExcluded(routeInfo: any): any;
    mapRoutesToFlatList(forRoutes: any): any;
  }
}
export class ModuleRef {
  constructor(container: any);
  container: any;
  injector: any;
  containerScanner: any;
  find(typeOrToken: any): any;
  findInstanceByPrototypeOrToken(metatypeOrToken: any, contextModule: any): any;
  instantiateClass(type: any, module: any): any;
}
export class ModulesContainer {
  clear(): any;
  entries(): any;
  forEach(p0: any): any;
  get(p0: any): any;
  has(p0: any): any;
  keys(): any;
  set(p0: any, p1: any): any;
  values(): any;
}
export class NestApplication {
  constructor(container: any, httpAdapter: any, config: any, appOptions: any);
  httpAdapter: any;
  config: any;
  appOptions: any;
  logger: any;
  injector: any;
  middlewareModule: any;
  middlewareContainer: any;
  microservicesModule: any;
  socketModule: any;
  microservices: any;
  isInitialized: any;
  routesResolver: any;
  applyOptions(): any;
  callBootstrapHook(): void;
  callDestroyHook(): void;
  callInitHook(): void;
  callShutdownHook(signal: any): void;
  close(): void;
  connectMicroservice(options: any): any;
  createServer(): any;
  enableCors(options: any): any;
  enableShutdownHooks(signals: any): any;
  find(typeOrToken: any): any;
  findInstanceByPrototypeOrToken(metatypeOrToken: any, contextModule: any): any;
  get(typeOrToken: any, options: any): any;
  getHttpAdapter(): any;
  getHttpServer(): any;
  getMicroservices(): any;
  getUnderlyingHttpServer(): any;
  init(): any;
  listen(port: any, args: any): any;
  listenAsync(port: any, hostname: any): any;
  listenToPromise(microservice: any): any;
  listenToShutdownSignals(signals: any): void;
  registerHttpServer(): void;
  registerMiddleware(instance: any): void;
  registerModules(): void;
  registerParserMiddleware(): void;
  registerRouter(): void;
  registerRouterHooks(): void;
  registerWsModule(): void;
  select(module: any): any;
  selectContextModule(): void;
  setBaseViewsDir(path: any): any;
  setGlobalPrefix(prefix: any): any;
  setViewEngine(engineOrOptions: any): any;
  startAllMicroservices(callback: any): any;
  startAllMicroservicesAsync(): any;
  use(args: any): any;
  useGlobalFilters(filters: any): any;
  useGlobalGuards(guards: any): any;
  useGlobalInterceptors(interceptors: any): any;
  useGlobalPipes(pipes: any): any;
  useLogger(logger: any): void;
  useStaticAssets(pathOrOptions: any, options: any): any;
  useWebSocketAdapter(adapter: any): any;
}
export class NestApplicationContext {
  constructor(container: any, scope: any, contextModule: any);
  container: any;
  scope: any;
  contextModule: any;
  moduleTokenFactory: any;
  activeShutdownSignals: any;
  containerScanner: any;
  callBootstrapHook(): void;
  callDestroyHook(): void;
  callInitHook(): void;
  callShutdownHook(signal: any): void;
  close(): void;
  enableShutdownHooks(signals: any): any;
  find(typeOrToken: any): any;
  findInstanceByPrototypeOrToken(metatypeOrToken: any, contextModule: any): any;
  get(typeOrToken: any, options: any): any;
  init(): any;
  listenToShutdownSignals(signals: any): void;
  select(module: any): any;
  selectContextModule(): void;
  useLogger(logger: any): void;
}
export class NestContainer {
  constructor(_applicationConfig: any);
  globalModules: any;
  moduleCompiler: any;
  modules: any;
  dynamicModulesMetadata: any;
  internalProvidersStorage: any;
  addController(controller: any, token: any): void;
  addDynamicMetadata(token: any, dynamicModuleMetadata: any, scope: any): void;
  addDynamicModules(modules: any, scope: any): void;
  addExportedProvider(provider: any, token: any): void;
  addGlobalModule(module: any): void;
  addImport(relatedModule: any, token: any): void;
  addInjectable(injectable: any, token: any, host: any): void;
  addModule(metatype: any, scope: any): any;
  addProvider(provider: any, token: any): any;
  bindGlobalModuleToModule(target: any, globalModule: any): void;
  bindGlobalScope(): void;
  bindGlobalsToImports(module: any): void;
  clear(): void;
  createCoreModule(): any;
  getDynamicMetadataByToken(token: any, metadataKey: any): any;
  getHttpAdapterRef(): any;
  getInternalCoreModuleRef(): any;
  getModuleByKey(moduleKey: any): any;
  getModules(): any;
  isGlobalModule(metatype: any): any;
  registerCoreModuleRef(moduleRef: any): void;
  replace(toReplace: any, options: any): void;
  setHttpAdapter(httpAdapter: any): void;
}
export const NestFactory: {
  applyLogger: Function;
  create: Function;
  createAdapterProxy: Function;
  createApplicationContext: Function;
  createExceptionProxy: Function;
  createExceptionZone: Function;
  createHttpAdapter: Function;
  createMicroservice: Function;
  createNestInstance: Function;
  createProxy: Function;
  initialize: Function;
  isHttpServer: Function;
  logger: {
    callFunction: Function;
    context: string;
    debug: Function;
    error: Function;
    getInstance: Function;
    isTimestampEnabled: boolean;
    log: Function;
    verbose: Function;
    warn: Function;
  };
};
export const REQUEST: symbol;
export class Reflector {
  get(metadataKey: any, target: any): any;
  getAll(metadataKey: any, targets: any): any;
}
