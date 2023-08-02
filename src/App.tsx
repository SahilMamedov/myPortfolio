import "./App.css";
import AppRoutes from "./Routes/routes";
import FollowPointer from "components/FollowPointer";
import Transition from "components/Transition";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
function App() {
  const { pathname } = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="h-full">
        <Transition />
        <FollowPointer />
        <AppRoutes />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
