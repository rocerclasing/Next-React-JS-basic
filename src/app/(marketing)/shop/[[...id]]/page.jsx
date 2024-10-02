export const metadata = {
  title: "Perfil",
  description: "perfil - Generated by create next app",
};

import Title from "@/components/PagesComponents/TitlePage";

const Id = ({ params }) => {
  console.log(params);

  return (
    <>
      <Title title="Id" />
      <p className="text-center">{params.id}</p> {/* Use lowercase 'id' */}
    </>
  );
};

export default Id;