import { GameProvider } from "./Lesson 6/GameContext";
import { GamePanel } from './Lesson 5/GamePanel';


export function App() {
    return (
        <GameProvider>
            <GamePanel />
        </GameProvider>
    );
}


export default App;