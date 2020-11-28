import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_continentsLow from "@amcharts/amcharts4-geodata/continentsLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import multi_zone_bg from '../images/ha/multi_zone_bg.svg';
import multi_zone_circle from '../images/ha/multi_zone_circle.svg';
import multi_zone from '../images/ha/multi_zone.svg';
import single_zone_bg from '../images/ha/single_zone_bg.svg';
import single_zone_circle from '../images/ha/single_zone_circle.svg';
import single_zone from '../images/ha/single_zone.svg';

import { DATA } from '../constants/mockMap'; 

am4core.useTheme(am4themes_animated);

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        }
    }

    componentDidMount() {   
        const self = this; 
        // Create map instance
        let chart = am4core.create("chartdiv", am4maps.MapChart);

        // Set map definition
        chart.geodata = am4geodata_continentsLow;

        // Set projection
        chart.projection = new am4maps.projections.Miller();

        // Create map polygon series
        let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

        // Exclude Antartica
        polygonSeries.exclude = ["antarctica"];

        // Make map load polygon (like country names) data from GeoJSON
        polygonSeries.useGeodata = true;

        var pattern = new am4core.CirclePattern();
        pattern.width = 5;
        pattern.height = 5;
        //pattern.fill = am4core.color("#FFFFFF");
        pattern.backgroundOpacity = 0;
        pattern.stroke = am4core.color("#FFDD40");
        pattern.strokeWidth = 0;
        pattern.fill = am4core.color("#D8E7F3");
        pattern.radius = 2;

        polygonSeries.data = [{
            "id": "europe",
            "name": "Europe",
            "fill": pattern
        }, {
            "id": "northAmerica",
            "name": "North America",
            "fill": pattern
        }, {
            "id": "southAmerica",
            "name": "South America",
            "fill": pattern
        }, {
            "id": "africa",
            "name": "Africa",
            "fill": pattern
        }, {
            "id": "asia",
            "name": "Asia",
            "fill": pattern
        }, {
            "id": "oceania",
            "name": "Australia and Oceania",
            "fill": pattern
        }];

        // Configure series
        let polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.propertyFields.fill = "fill";
        polygonTemplate.fill = am4core.color("#FFFFFF");

        // Display markers
        let data = [];
        DATA.forEach((item) => {
            data.push({
                flag: item.type === "multi_zone" ? multi_zone_circle : single_zone_circle,
                ...item
            });
        });

        var imageSeries = chart.series.push(new am4maps.MapImageSeries());
        var imageSeriesTemplate = imageSeries.mapImages.template;

        imageSeriesTemplate.events.on("hit", function(ev) {
            // zoom to an object
            ev.target.series.chart.zoomToMapObject(ev.target);

            self.props.onChange(ev.target.dataItem.dataContext);
        });

        var marker = imageSeriesTemplate.createChild(am4core.Image);
        marker.cursorOverStyle = am4core.MouseCursorStyle.pointer;
        marker.width = 25;
        marker.height = 25;
        marker.nonScaling = true;
        marker.tooltipText = "{location}";
        marker.fill = am4core.color("#FFFFFF");
        marker.horizontalCenter = "middle";
        marker.verticalCenter = "middle";
        marker.propertyFields.href = "flag";
        imageSeriesTemplate.propertyFields.latitude = "latitude";
        imageSeriesTemplate.propertyFields.longitude = "longitude";
        imageSeries.data = data;
    
        // ... chart code goes here ...
    
        this.chart = chart;

        this.setState({ loaded: true });
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    shouldComponentUpdate(nextProps, newtState) {
        return !this.state.loaded;
    }

    render() {
        return (
            <div id="chartdiv"></div>
        );
    }
}

export default Map;