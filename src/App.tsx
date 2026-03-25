import { Counter } from './Lesson 1-2/Counter';
import {Hello} from './Lesson 1-2/Hello';
import { LevelUp } from './Lesson 1-2/LevelUp';
import { PlayerCard } from './Lesson 1-2/PlayerCard';
import { PlayerNameInput } from './Lesson 3/PlayerNameInput';
import { Score } from './Lesson 4/Score';
import { HealthBar } from './Lesson 4/HealthBar';
import { ManaBar } from './Lesson 4/ManaBar';
import { XPBar } from './Lesson 4/XPBar';
import { GamePanel } from './GamePanel';

function App() {
    return (
            <div className="App">
                <h1>Welcome to Game</h1>
                {/* <Counter />
                <Hello name="Marius" />
                <PlayerCard nickname="ShadowWolf" level={12} />
                <LevelUp /> */}
                <GamePanel />
                <PlayerNameInput />
                <XPBar />
                <Score />
                <HealthBar /> 
                <ManaBar />
            </div>
    );
}

export default App;