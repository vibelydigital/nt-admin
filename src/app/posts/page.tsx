import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ListBuilder from "@/components/Tables/ListBuilder";

export const metadata: Metadata = {
  title: "Next.js Profile | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Profile page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};



const Profile = () => {

  return (
    <DefaultLayout>
      <ListBuilder />
    </DefaultLayout>
  );
};

export default Profile;
