import './style.css'

export const Math = () => {
	return (
		<div className="container mt-3">
			<div className="mb-5">
				<h1 className="text-center">Math Game</h1>

				<p className="text-center">Test your math skills with our fun game!</p>
				<p className="text-center">One correct answer is 10 points/money!</p>
			</div>

      <div>
        {/* Math equation */}
				<div className="card col-lg-3 mx-auto mb-4">
					<div className="card-body">
						<h1 className="text-center">1+1</h1>
					</div>
        </div>
        
        {/* Answers */}
        <div className="row math-answers">
            <div className="col card">
              <div className="card-body">
                <h3 className="text-center">2</h3>
              </div>
          </div>
          
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h3 className="text-center">3</h3>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="text-center">4</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="text-center">4</h5>
              </div>
            </div>
          </div>
        </div>
			</div>
		</div>
	);
};
