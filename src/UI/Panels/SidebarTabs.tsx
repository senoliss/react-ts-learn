import { useState } from "react";
import { InventoryPanel } from "./InventoryPanel";
import { SpellPanel } from "./SpellPanel";

export function SidebarTabs() {
    const [tab, setTab] = useState<"inventory" | "spells">("inventory");

    return (
        <div>
            <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                <button onClick={() => setTab("inventory")}>
                    Inventory
                </button>

                <button onClick={() => setTab("spells")}>
                    Spells
                </button>
            </div>

            {/* Tab content */}
            {tab === "inventory" && <InventoryPanel />}
            {tab === "spells" && <SpellPanel />}
        </div>
    );
}