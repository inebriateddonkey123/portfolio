import React from "react";

const VisitProject = ({ projLink, showAlert }) => {
	const style =
		"rounded-lg text-xl border-4 text-lime-500 border-lime-500 px-4 lg:px-6 py-3 lg:py-4 hover:bg-lime-500 hover:text-white text-center";

	return (
		<div className="flex">
			{!projLink ? (
				<button onClick={showAlert} className={style}>
					View Project
				</button>
			) : (
				<a href={projLink} target="_blank" className={style}>
					View Project
				</a>
			)}
		</div>
	);
};

export default VisitProject;
