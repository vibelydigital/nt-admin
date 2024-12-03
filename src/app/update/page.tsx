
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "nt-theme update",
  description:
    "This is Next.js update page for nt-dashboard",
};

const TablesPage = () => {
  return (
    <DefaultLayout>
      update page.
    </DefaultLayout>
  );
};

export default TablesPage;
