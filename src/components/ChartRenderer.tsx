"use client";

import { Chart } from "@/payload-types";
import { ChartConfig, ChartContainer, ChartTooltip } from "./chart";
import { TChartType } from "@/collections/Charts";
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts";
import { DataKey } from "recharts/types/util/types";

export const ChartRenderer = ({
	chart,
}: { chart: (number | null) | Chart | undefined }) => {
	if (!chart || typeof chart !== "object") {
		return null;
	}

	if (typeof chart.config !== "object" || chart.config === null) {
		return null;
	}

	const config = chart.config ? (chart.config as unknown as ChartConfig) : {};

	const hasKey = (key: any): boolean => {
		if (
			typeof chart.config === "object" &&
			chart.config !== null &&
			key in chart.config
		) {
			return true;
		}

		return false;
	};

	const renderChart = () => {
		const commonProps = {
			width: chart.dimensions?.width || 400,
			height: chart.dimensions?.height || 400,
			data: chart.data as unknown as any[], // TODO: replace any with extensive type narrowing
			margin: { top: 20, right: 30, bottom: 20, left: 10 },
		};

		switch (chart.chartType as TChartType) {
			case "line":
				const xAxisKey =
					typeof chart.config === "object" &&
					chart.config !== null &&
					"xAxisKey" in chart.config &&
					typeof chart.config.xAxisKey === "string"
						? (chart.config.xAxisKey satisfies DataKey<string>)
						: "x-axis-key";
				const xAxisLabel =
					typeof chart.config === "object" &&
					chart.config !== null &&
					"xAxisLabel" in chart.config &&
					typeof chart.config.xAxisLabel === "string"
						? chart.config.xAxisLabel
						: "X-Axis Label";

				const yAxisKey =
					typeof chart.config === "object" &&
					chart.config !== null &&
					"yAxisKey" in chart.config &&
					typeof chart.config.yAxisKey === "string"
						? (chart.config.yAxisKey satisfies DataKey<string>)
						: "y-axis-key";
				const yAxisLabel =
					typeof chart.config === "object" &&
					chart.config !== null &&
					"yAxisLabel" in chart.config &&
					typeof chart.config.yAxisLabel === "string"
						? chart.config.yAxisLabel
						: "Y-Axis Label";

				return (
					<LineChart
						data={commonProps.data ?? []}
						margin={commonProps.margin}
						accessibilityLayer={true}
						responsive={true}
					>
						{config?.gridLines ? <CartesianGrid vertical={false} /> : null}
						<XAxis
							dataKey={xAxisKey}
							label={{ value: xAxisLabel }}
							className="text-sm"
						/>
						<YAxis
							label={{
								value: yAxisLabel,
								angle: yAxisLabel.length > 9 ? -90 : 0,
								position: "insideLeft",
							}}
							className="font-semibold text-sm text-gray-900"
						/>

						{typeof chart.config === "object" &&
						chart.config !== null &&
						"showTooltip" in chart.config &&
						typeof chart.config.showTooltip === "boolean" &&
						chart.config.showToolTip !== false ? (
							<ChartTooltip />
						) : null}

						{typeof chart.config === "object" &&
							chart.config !== null &&
							"showLengend" in chart.config &&
							chart.config?.showLegend !== false && <Legend />}

						{/* render the lines for each key in the data*/}
						{typeof chart.config === "object" &&
							chart.config !== null &&
							"dataKeys" in chart.config &&
							Array.isArray(chart.config.dataKeys) &&
							chart.config.dataKeys.map((dataKey, index) => {
								if (typeof dataKey !== "object" || dataKey === null) {
									return null;
								}

								const color: string =
									dataKey.color && typeof dataKey.color === "string"
										? dataKey.color
										: "#000000";
								const name: string =
									dataKey.name && typeof dataKey.name === "string"
										? dataKey.name
										: "X-Axis Name";

								const lineKey: DataKey<string> =
									dataKey.key && typeof dataKey.key === "string"
										? (dataKey.key as DataKey<string>)
										: "";

								const chartKey = `line-${lineKey}=${index + 1}`;

								return (
									<Line
										key={chartKey}
										type="monotone"
										dataKey={lineKey}
										name={name}
										color={color}
										stroke={color}
										strokeWidth={1.5}
										dot={{ fill: color || "#000000", strokeWidth: 2, r: 4 }}
										activeDot={{ r: 6 }}
										connectNulls={false}
									/>
								);
							})}
					</LineChart>
				);

			default:
				return (
					<div>Unsupported {chart.chartType.toLocaleUpperCase()} chart</div>
				);
		}
	};

	return (
		<div className="my-5 p-4 bg-white mx-auto container max-w-4xl">
			<h3 className="text-lg font-semibold font-serif text-gray-800 mb-2 text-center lg:text-xl">
				{chart.title}
			</h3>

			<ChartContainer config={config} className="min-h-60 w-full max-w-5xl">
				{renderChart()}
			</ChartContainer>
		</div>
	);
};
