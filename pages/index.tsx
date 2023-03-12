import { Footer } from "@components/common/Footer";
import { Faq } from "@components/Faq";
import { HeroHeader } from "@components/HeroHeader";
import StoryCards from "@components/StoryCards";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "common", "footer"])),
    },
  };
}

const Home: NextPage = () => (
  <>
    <HeroHeader />
    <StoryCards />
    <Faq />
    <Footer />
  </>
);

export default Home;
