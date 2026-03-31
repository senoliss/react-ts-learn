import styles from "./GameLayout.module.css";
import { PlayerHUD } from "../Panels/PlayerHUD";
import { ActionBar } from "../Panels/ActionBar";
import { EnemyPanel } from "../Panels/EnemyPanel copy";
import { useGame } from "../../Lesson 6/GameContext";
import { HomePanel } from "../Panels/HomePanel";
import { SidebarTabs } from "../Panels/SidebarTabs";
import { LeftNavbar } from "../Panels/LeftNavbar";
import { HomeView } from "../Panels/HomeViewPanel";
import type { PlayerData } from "../../Lesson 7/GameLogic/types";
import { RightSidebar } from "../Panels/RightSidebar";
import { CombatView } from "../Panels/CombatView";

export function GameLayout() {
    const { gameMode } = useGame();
    return (

        // Need to implement here some kind of layout with css grid or flexbox to arrange the panels in a nice way.
        // <>
        //     <HomePanel />
        // </>
        
        
        // <div className={styles.layout}>

        //     {/* LEFT NAVIGATION */}
        //     <div className={styles.leftNav}>
        //         <LeftNavbar />
        //     </div>

        //     {/* MAIN CONTENT AREA */}
        //     <div className={styles.body}>

        //         {/* CENTER CONTENT */}
        //         <div className={styles.center}>
        //             {gameMode === "home" && <HomePanel />}
        //             {gameMode === "combat" && <EnemyPanel />}
        //         </div>


        //     </div>
        //         {/* RIGHT SIDEBAR */}
        //         <aside className={styles.sidebar}>
        //             <RightSidebar />
        //         </aside>

        // </div>

        <div className="size-full flex bg-slate-950">

            {/* LEFT NAVIGATION */}
            <LeftNavbar />

            {/* MAIN CONTENT AREA */}

            {/* CENTER CONTENT */}
            {gameMode === "home" && <HomePanel />}
            {gameMode === "combat" && <CombatView />}
            {/* {gameMode === "combat" && <EnemyPanel />} */}

            {/* RIGHT SIDEBAR */}
            <RightSidebar />

        </div>

    );
}