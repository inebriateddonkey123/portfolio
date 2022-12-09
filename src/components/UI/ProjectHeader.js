import React from "react";

import VisitProject from "./VisitProject";

const ProjectHeader = ({ tools, projLink, deliverables, showAlert }) => {
	return (
		<div className="flex flex-col justify-center items-center w-full">
			<div className="flex flex-row justify-between items-start my-5 w-full">
				<div className="flex flex-col w-1/2 md:w-1/3">
					<p className="text-base md:text-xl font-bold">Tools</p>
					<p className="text-sm md:text-lg font-medium text-gray-500">{tools}</p>
				</div>
				<div className="hidden md:flex">
					<VisitProject projLink={projLink} showAlert={showAlert} />
				</div>
				<div className="flex flex-col w-1/2 md:w-1/3">
					<p className="text-base md:text-xl font-bold">Deliverables</p>
					<p className="text-sm md:text-lg font-medium text-gray-500">
						{deliverables}
					</p>
				</div>
			</div>
			<div className="flex md:hidden">
				<VisitProject projLink={projLink} showAlert={showAlert} />
			</div>
		</div>
	);
};

export default ProjectHeader;
