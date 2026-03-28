import { useState } from "react";
import { InventoryPanel } from "./InventoryPanel";
import { SpellPanel } from "./SpellPanel";
import { QuestPanel } from "./QuestPanel";
import { SkillPanel } from "./SkillPanel";
import { Tooltip } from "react-tooltip";

export function SidebarTabs() {
    const [tab, setTab] = useState<"inventory" | "spells" | "skills" | "quests">("inventory");

    return (
        <div>
            <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                <button onClick={() => setTab("inventory")}>
                    Inventory
                </button>

                <button onClick={() => setTab("spells")}>
                    Spellbook
                </button>

                <button onClick={() => setTab("skills")}>
                    Skills
                </button>

                <button onClick={() => setTab("quests")}>
                    Quests
                </button>
            </div>

            {/* Tab content */}
            {tab === "inventory" && <> <InventoryPanel /> <Tooltip id="item-tooltip" /> </>}
            {tab === "spells" && <> <SpellPanel /> <Tooltip id="spell-tooltip" /> </>}
            {tab === "skills" && <SkillPanel />}
            {tab === "quests" && <QuestPanel />}
        </div>
    );
}