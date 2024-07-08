import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ListBuilder from "@/components/Tables/ListBuilder";

export const metadata: Metadata = {
  title: "nt-admin post",
  description: "This is Next.js Posts page for nt-dashboard",
};

const Profile = () => {
  return (
    <DefaultLayout>
      <ListBuilder title = {"All pages"} heading= {["Title", "Aouthor", "Categories", "Tags", "Data"]} tableData={[{title: "What do you like most",
    author: "Maruf",
    categories: "Web development",
    tags: ["web,", "seo"],
    date: "7-8-2024",}]} />
    </DefaultLayout>
  );
};

export default Profile;
