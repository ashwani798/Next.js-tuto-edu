// import LearnUseImage from "@/components/LearmUseImage";
// import LearnClientComponent from "@/components/LearnClientComponent";
// import LearnCSSModule from "@/components/LearnCSSModule";
import LearnDataFeatching from "@/components/LearnDataFeatching";
// import LearnLink from "@/components/LearnLink";
// import LearnServerCompnent from "@/components/LearnServerCompnent";
// import LearnUseGlobalCSS from "@/components/LearnUseGlobalCSS";
// import LearnUseRouter from "@/components/LearnUseRouter";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      {/* <LearnLink /> */}
      {/* <LearnUseRouter /> */}
      {/* <LearnServerCompnent /> */}
      {/* <LearnClientComponent /> */}
      {/* <LearnUseGlobalCSS /> */}
      {/* <LearnCSSModule /> */}
      {/* <LearnUseImage /> */}
      <LearnDataFeatching />
      </main>
      
    </div>
  );
}
