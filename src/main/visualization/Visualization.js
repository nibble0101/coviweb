import React, { useEffect, useContext } from "react";
import * as d3 from "d3";
import * as topojson from "topojson";
import Fade from "react-reveal/Fade";
import "./visualization.css";
import { context } from "../../store";

const graphParams = {
  width: 900,
  height: 400,
  padTop: 50,
  padBottom: 50,
  padLeft: 50,
  padRight: 50,
};
const { width, height, padTop, padBottom, padLeft, padRight } = graphParams;

function Visualization(props) {
  const { data, mapData } = useContext(context);
  useEffect(() => {
    if (!data || !mapData) {
      return;
    }
    const formatDate = d3.timeFormat("%B %d, %Y");
    const dateToday = new Date();
    const wrapper = d3.select("#visualization-wrapper");

    wrapper.append("div").attr("class", "tooltip");
    const svg = wrapper
      .append("svg")
      .attr("width", width + padLeft + padRight)
      .attr("height", height + padTop + padBottom);

    function mouseoverHandler() {
      d3.select(this).style("fill", "#303145");
      const name = d3.select(this).attr("name");
      const toolTip = d3.select(".tooltip");
      var data = d3.select(this).attr("data");
      data = JSON.parse(data);
      if (data === null) {
        toolTip.append("h2").text(name);
        toolTip.append("div").text("Date: " + formatDate(dateToday));
        toolTip.append("div").text("No data available");

        toolTip.style("opacity", "1");
        toolTip.style("top", d3.event.pageY + "px");
        toolTip.style("left", d3.event.pageX - 200 + "px");
      } else {
        toolTip.append("h2").text(name);
        toolTip.append("div").attr("class", "wrapper-1");
        d3.select(".wrapper-1")
          .append("span")
          .text("Date: ")
          .style("color", "#6ed6ef");
        d3.select(".wrapper-1").append("span").text(formatDate(dateToday));
        toolTip.append("div").attr("class", "wrapper-2");
        d3.select(".wrapper-2")
          .append("span")
          .text("Cases: ")
          .style("color", "#6ed6ef");
        d3.select(".wrapper-2")
          .append("span")
          .text(
            d3.format(",")(data.cases) + "  +" + d3.format(",")(data.todayCases)
          );
        toolTip.append("div").attr("class", "wrapper-3");
        d3.select(".wrapper-3")
          .append("span")
          .text("Deaths: ")
          .style("color", "#6ed6ef");
        d3.select(".wrapper-3")
          .append("span")
          .text(
            d3.format(",")(data.deaths) +
              "  +" +
              d3.format(",")(data.todayDeaths)
          );
        toolTip.append("div").attr("class", "wrapper-4");
        d3.select(".wrapper-4")
          .append("span")
          .text("Recoveries: ")
          .style("color", "#6ed6ef");
        d3.select(".wrapper-4")
          .append("span")
          .text(
            d3.format(",")(data.recovered) +
              "  +" +
              d3.format(",")(data.todayRecovered)
          );
        toolTip.style("opacity", "1");
        toolTip.style("top", d3.event.pageY + "px");
        toolTip.style("left", d3.event.pageX - 200 + "px");
      }
    }

    function mouseoutHandler() {
      const data = JSON.parse(d3.select(this).attr("data"));
      var color;
      if (!data) {
        color = "#947b3cb5";
      } else {
        color = colorScale(+data.cases);
      }
      d3.select(this).style("fill", color);
      const toolTip = d3.select(".tooltip");
      toolTip.style("opacity", "0");
      toolTip.select("h2").remove();
      toolTip.selectAll("div").remove();
    }

    const colorScale = d3.scaleSequential();
    const projection = d3.geoNaturalEarth1().scale(150);
    const pathGenerator = d3.geoPath().projection(projection);
    svg
      .append("path")
      .attr("class", "sphere")
      .attr("d", pathGenerator({ type: "Sphere" }));
    const countries = topojson.feature(mapData, mapData.objects.countries);
    let highestCases, lowestCases;
    data.forEach((country, index) => {
      if (!index) {
        highestCases = country.cases;
        lowestCases = country.cases;
      } else {
        highestCases =
          country.cases > highestCases ? country.cases : highestCases;
        lowestCases = country.cases < lowestCases ? country.cases : lowestCases;
      }
    });
    colorScale
      .domain([lowestCases, highestCases])
      .interpolator(d3.interpolatePiYG);
    svg
      .selectAll("path")
      .data(countries.features)
      .enter()
      .append("path")
      .attr("class", "country")
      .attr("d", (d) => pathGenerator(d))
      .attr("map-id", (d) => d.id)
      .attr("name", (d) => d.properties.name)
      .attr("data", (d, i) => {
        const mydata = data.find((c) => {
          return +d.id === +c.countryInfo._id;
        });
        if (mydata) {
          return JSON.stringify(mydata);
        }
        return undefined;
      })
      .style("transition", "fill 500ms linear")
      .attr("fill", function (d, i) {
        const data = d3.select(this).attr("data");
        if (!data) {
          return "#947b3cb5";
        }
        const cases = JSON.parse(data).cases;
        return colorScale(+cases);
      })
      .on("mouseover", mouseoverHandler)
      .on("mouseout", mouseoutHandler);
  }, [data, mapData]);
  return (
    <Fade>
      <h1 className="main-header">
        <span className="covid-text">Covid-19</span> World Statistics{" "}
      </h1>
      <div id="visualization-wrapper"></div>
    </Fade>
  );
}

export default Visualization;
