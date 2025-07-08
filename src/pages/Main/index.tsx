import "./style.css";

export const Main = () => {
	return (
		<>
			<div className="main-title-box">
				<div className="overlay">
					<h1 className="main-title">Blackjack project</h1>
				</div>
			</div>

			<div className="container mt-3">
				<div className="row gap-3 mt-3">
					<div className="card col">
						<div className="card-body">
							<h4 className="card-title">Blackjack Game</h4>
							<p className="card-text">Play a simplified version of Blackjack and try your luck. Use your in-game money to bet and win more!</p>
						</div>
					</div>

					<div className="card col">
						<div className="card-body">
							<h4 className="card-title">Money Logic</h4>
							<p className="card-text">Earn and manage your virtual money. Spend it in games like Blackjack or save it for later!</p>
						</div>
					</div>

					<div className="card col">
						<div className="card-body">
							<h4 className="card-title">Math Game</h4>
							<p className="card-text">Solve math problems to earn money. The faster and more accurately you solve, the more you get!</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
