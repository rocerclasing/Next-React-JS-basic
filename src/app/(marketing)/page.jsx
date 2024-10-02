import Title from "@/components/PagesComponents/TitlePage";
import Link from "next/link";

const Home = () => {
  return (
    <>   
      <Title title="Home" />  
      <Link href="/blog">Blog</Link>

    </>
  );
}

export default Home;
