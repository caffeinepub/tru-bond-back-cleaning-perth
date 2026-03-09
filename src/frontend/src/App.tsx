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
import ArmadalePage from "./pages/suburbs/ArmadalePage";
import BaldivisPage from "./pages/suburbs/BaldivisPage";
import ClarksonPage from "./pages/suburbs/ClarksonPage";
import FremantlePage from "./pages/suburbs/FremantlePage";
import JoondalupPage from "./pages/suburbs/JoondalupPage";
import MandurahPage from "./pages/suburbs/MandurahPage";
import MidlandPage from "./pages/suburbs/MidlandPage";
import OsborneParkPage from "./pages/suburbs/OsborneParkPage";
import RockinghamPage from "./pages/suburbs/RockinghamPage";
import SubiacoPage from "./pages/suburbs/SubiacoPag";

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

const subiacoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/subiaco",
  component: SubiacoPage,
});

const fremantleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/fremantle",
  component: FremantlePage,
});

const joondalupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/joondalup",
  component: JoondalupPage,
});

const rockinghamRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/rockingham",
  component: RockinghamPage,
});

const mandurahRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/mandurah",
  component: MandurahPage,
});

const armadaleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/armadale",
  component: ArmadalePage,
});

const midlandRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/midland",
  component: MidlandPage,
});

const osborneParkRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/osborne-park",
  component: OsborneParkPage,
});

const baldivisRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/baldivis",
  component: BaldivisPage,
});

const clarksonRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/clarkson",
  component: ClarksonPage,
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
  subiacoRoute,
  fremantleRoute,
  joondalupRoute,
  rockinghamRoute,
  mandurahRoute,
  armadaleRoute,
  midlandRoute,
  osborneParkRoute,
  baldivisRoute,
  clarksonRoute,
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
