import React from "react";
import { TabMenu } from "primereact/tabmenu";

export default function TabMenuDemo() {
  const items = [
    { label: "Home", icon: "pi pi-fw pi-home" },
    { label: "Necessary Files", icon: "pi pi-fw pi-cog" },
  ];

  return (
    <div>
      <div className="card">
        <TabMenu model={items} />
      </div>
    </div>
  );
}
