import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/partials/navbar";
import Footer from "../components/partials/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AnimatePresence } from "framer-motion";
import GotoTop from "../components/ui/go-to-top";
import { getRandomConcepts } from "../features/concept/conceptSlice";
import { setVoice } from "../features/voice/voiceSlice";
import { useTypedSelector } from "../hooks/useTypedSelector";

export default function Layout() {
  const location = useLocation();
  const dispatch = useDispatch();
  const voice = useTypedSelector((state) => state.voice.voice);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    dispatch(getRandomConcepts());
  }, [dispatch]);

  useEffect(() => {
    if (!voice) {
      const synth = window.speechSynthesis;
      const availableVoices = synth.getVoices();
      if (availableVoices.length > 0) {
        dispatch(setVoice(availableVoices[0].name));
      }
    }
  }, [dispatch, voice]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen mt-[80px] dark:bg-gray-950 dark:text-darkText p-4">
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </main>
      <GotoTop />
      {location.pathname !== "/interview" && <Footer />}
    </>
  );
}
