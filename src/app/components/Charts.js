import React from "react";
import { Card, CardTitle, CardBody } from "shards-react";
import { GoRepoForked } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { GrEdit } from "react-icons/gr";
import { Row, Col } from "shards-react";
import { Bar, Doughnut } from "react-chartjs-2";
import { countInstances } from "../utilities/utilityFunctions";

const Charts = ({ data }) => {
	const mostForked = data.user.repositories.nodes
		.map(({ name, forkCount }) => ({
			x: name,
			y: forkCount,
		}))
		.sort((a, b) => b.y - a.y);

	const mostStarred = data.user.repositories.nodes
		.map(({ name, stargazerCount }) => ({
			x: name,
			y: stargazerCount,
		}))
		.sort((a, b) => b.y - a.y);

	const {
		user: {
			repositories: { nodes: repositories },
		},
	} = data;

	const languagesArray = repositories
		.map(({ languages }) => languages)
		.map((language) =>
			language.edges.map((edge) => ({
				name: edge.node.name,
				size: edge.size,
			}))
		)
		.filter((repo) => repo.length > 0)
		.flat();

	let languagesTotal = {};
	languagesArray.forEach(({ name, size }) => {
		if (!languagesTotal[name]) languagesTotal[name] = 0;
		languagesTotal[name] = languagesTotal[name] + parseInt(size);
	});
	// console.log("languagesTotal:", languagesTotal);

	const languagesStructuredArray = Object.entries(languagesTotal)
		.map((item) => ({
			label: item[0],
			size: item[1],
		}))
		.sort((a, b) => b.size - a.size)
		.slice(0, 5);

	const totalSize = languagesStructuredArray
		.map(({ size }) => size)
		.reduce((acc, cur) => parseInt(acc) + parseInt(cur), [0]);

	const languagesData = {
		labels: languagesStructuredArray.map(({ label }) => label),
		data: languagesStructuredArray.map(({ size }) => (size / totalSize).toFixed(2)),
	};

	const primaryLanguage = data.user.repositories.nodes
		.filter((node) => node.primaryLanguage !== null)
		.map((node) => node.primaryLanguage.name);

	const topLanguages = countInstances(primaryLanguage);
	const mostUsedLanguage = Object.keys(topLanguages.sort((a, b) => b - a)[0])[0];

	return (
		<div className="charts">
			<Card className="charts__card">
				<CardBody>
					<CardTitle className="charts__title">
						<span className="charts__icon fork-icon">
							<GoRepoForked />
						</span>{" "}
						Most Forked
					</CardTitle>
					<BarChart yLabel="Forks" chartData={mostForked} />
				</CardBody>
			</Card>

			<Card className="charts__card">
				<CardBody>
					<CardTitle className="charts__title">
						<span className="charts__icon star-icon">
							<FaRegStar />
						</span>{" "}
						Most Starred
					</CardTitle>
					<BarChart yLabel="Stars" chartData={mostStarred} />
				</CardBody>
			</Card>

			<Card className="charts__card">
				<CardBody>
					<CardTitle className="charts__title">
						<span className="charts__icon language-icon">
							<MdLanguage />
						</span>{" "}
						Languages by File Size
					</CardTitle>
					<DoughnutChart yLabel="Languages" chartData={languagesData} />
				</CardBody>
			</Card>

			<Card className="charts__card">
				<CardBody>
					<CardTitle className="charts__title">
						<span className="charts__icon primary-language-icon">
							<GrEdit />
						</span>{" "}
						Top Language
					</CardTitle>
					<div className="most-used-language">
						<h5>{mostUsedLanguage}</h5>
					</div>
				</CardBody>
			</Card>
		</div>
	);
};

const DoughnutChart = ({ chartData }) => {
	const data = {
		labels: chartData.labels,
		datasets: [
			{
				data: chartData.data,
				backgroundColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
				],
				hoverBackgroundColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
				],
			},
		],
	};

	return (
		<div className="chart">
			<Doughnut data={data} />
		</div>
	);
};

const BarChart = ({ chartData, yLabel }) => {
	const data = {
		labels: chartData.map(({ x }) => x),
		datasets: [
			{
				label: yLabel,
				data: chartData.map(({ y }) => y),
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
				],
				borderWidth: 1,
			},
		],
	};

	const options = {
		title: {
			display: false,
		},
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
					},
				},
			],
			xAxes: [
				{
					ticks: {
						maxRotation: 90,
						minRotation: 90,
					},
				},
			],
		},
	};

	return (
		<div className="chart">
			<Bar data={data} options={options} />
		</div>
	);
};

export default Charts;
