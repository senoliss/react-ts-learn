type PlayerProps = {
    nickname: string;
    level: number;
};

export function PlayerCard({ nickname, level }: PlayerProps) {
    return (
        <div className="player-card">
            <h3>{nickname}</h3>
            <p>Level: {level}</p>
        </div>
    );
}