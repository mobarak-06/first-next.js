import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <div className="grid grid-cols-12">
      {/* side nav */}
      <div className="col-span-3">
         <ul>
            <li>user list</li>
            <li>user list</li>
            <li>user list</li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="col-span-9">{children}</div>
    </div>
  );
}
