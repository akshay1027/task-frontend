// import Head from "next/head";
import ContainerBlock from "../components/ContainerBlock";
import ClientFeedback from "../components/ClientFeedback"
import Hero from "../components/Hero";
import Category from "components/Category";
import RoomType from "components/RoomType";

export default function Home() {
  return (
    <div class="bg-[#f8f8f8]">
      <ContainerBlock>
        <Hero />
        <Category />
        <ClientFeedback />
        <RoomType />
      </ContainerBlock>
    </div>
  );
}
