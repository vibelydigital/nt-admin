import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableBuilder from "@/components/Tables/TableBuilder";

export const metadata: Metadata = {
  title: "nt-admin post",
  description: "This is Next.js Posts page for nt-dashboard",
};

const Profile = () => {
  return (
    <DefaultLayout>
      <>Hello post</>
      <TableBuilder
        title={"All posts"}
        heading={["Title", "Aouthor", "Categories", "Tags", "Data"]}
        tableData={[
          {
            title: "What do you like most",
            author: "Maruf",
            categories: "Web development",
            tags: ["web,", "seo"],
            date: "7-8-2024",
          },
          {
            title: "Sadiq bhai colen jai",
            author: "Sadik",
            categories: "Web development",
            tags: ["web,", "seo"],
            date: "7-8-2024",
          },
          {
            title: "Shudhu shudhu mair dey",
            author: "Sadiq",
            categories: "Web development",
            tags: ["web,", "seo"],
            date: "7-8-2024",
          },
        ]}
      />
    </DefaultLayout>
  );
};

export default Profile;
