import DashNav from "@/components/DashNav";

export const metadata = {
  title: {
    default: "Dashboard",
    template: "%s - Dashboard",
  },
};

export default function DashboardLayout({ children }) {
  return (
    <main>
      <DashNav />
      {children}
    </main>
  );
}
