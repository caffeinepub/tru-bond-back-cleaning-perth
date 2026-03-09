import { Toaster } from "@/components/ui/sonner";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WhatsAppButton from "./components/WhatsAppButton";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import BathroomToiletPage from "./pages/services/BathroomToiletPage";
import BondCleaningPage from "./pages/services/BondCleaningPage";
import CarpetSteamPage from "./pages/services/CarpetSteamPage";
import OvenKitchenPage from "./pages/services/OvenKitchenPage";
import WallWashingPage from "./pages/services/WallWashingPage";
import WindowCleaningPage from "./pages/services/WindowCleaningPage";

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: RootLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});

const bondCleaningRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/bond-cleaning",
  component: BondCleaningPage,
});

const carpetSteamRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/carpet-steam-cleaning",
  component: CarpetSteamPage,
});

const ovenKitchenRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/oven-kitchen-cleaning",
  component: OvenKitchenPage,
});

const windowCleaningRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/window-cleaning",
  component: WindowCleaningPage,
});

const bathroomToiletRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/bathroom-toilet-cleaning",
  component: BathroomToiletPage,
});

const wallWashingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/wall-washing",
  component: WallWashingPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  servicesRoute,
  bondCleaningRoute,
  carpetSteamRoute,
  ovenKitchenRoute,
  windowCleaningRoute,
  bathroomToiletRoute,
  wallWashingRoute,
  aboutRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
