import { createRoute, createRouter } from '@tanstack/react-router';
import { createRootRoute } from '@tanstack/react-router';

import App from '../App';
import { CountryInfo, Home } from '../pages';

const rootRoute = createRootRoute({
  component: App,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

export const countryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/$countryCode',
  component: CountryInfo,
});

const routeTree = rootRoute.addChildren([indexRoute, countryRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default router;
