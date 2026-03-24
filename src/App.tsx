import { Counter } from './Lesson 1-2/Counter';
import {Hello} from './Lesson 1-2/Hello';
import { LevelUp } from './Lesson 1-2/LevelUp';
import { PlayerCard } from './Lesson 1-2/PlayerCard';
import { PlayerNameInput } from './Lesson 3/PlayerNameInput';
import { ScoreInput } from './Lesson 3/ScoreInput';
import { HealthBar } from './Lesson 4/HealthBar';

function App() {
    return (
            <div className="App">
                <h1>Welcome to React</h1>
                {/* <Counter />
                <Hello name="Marius" />
                <PlayerCard nickname="ShadowWolf" level={12} />
                <LevelUp /> */}
                <PlayerNameInput />
                <ScoreInput />
                <HealthBar />
            </div>
    );
}

export default App;