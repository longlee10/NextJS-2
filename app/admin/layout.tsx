import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <aside>Admin SideBar</aside>
      <div className="bg-slate-200 p-5 mr-5">{children}</div>
    </div>
  );
};

export default AdminLayout;
