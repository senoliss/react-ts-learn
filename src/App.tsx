import { GameProvider } from "./Lesson 6/GameContext";
import { GamePanel } from './Lesson 5/GamePanel';
import { GameLayout } from "./UI/Layout/GameLayout";


export function App() {
    return (
        <GameProvider>
            {/* <GamePanel /> */}
            <GameLayout />
        </GameProvider>
    );
}


export default App;