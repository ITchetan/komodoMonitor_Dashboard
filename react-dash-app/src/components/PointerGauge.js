import React, {Component} from 'react';
import { select, selectAll } from 'd3-selection';
import { arc } from 'd3-shape';
import { transition, ease } from 'd3-transition';


class PointerGauge extends Component {
  constructor(props) {
    super(props)
    this.drawGauge = this.drawGauge.bind(this)
  }

  componentDidMount() {
    this.drawGauge(this.props.name, this.props.value, this.props.gaugeLowerBound, this.props.gaugeUpperBound, this.props.gaugeMaxValue, this.props.firstArc, this.props.secondArc, this.props.thirdArc)
  }

  componentDidUpdate() {
    this.drawGauge(this.props.name, this.props.value, this.props.gaugeLowerBound, this.props.gaugeUpperBound, this.props.gaugeMaxValue, this.props.firstArc, this.props.secondArc, this.props.thirdArc)
  }

  drawGauge(name, value, gaugeLowerBound, gaugeUpperBound, gaugeMaxValue, firstArc, secondArc, thirdArc) {

    const node = this.node

    // Set up variables
    let percentValue = value / gaugeMaxValue;

    let arcFirst = gaugeLowerBound / gaugeMaxValue
    let arcSecond = (gaugeUpperBound - gaugeLowerBound) / gaugeMaxValue
    let arcThird = (gaugeMaxValue - gaugeUpperBound) / gaugeMaxValue

    let needleClient, barWidth, chart, chartInset, degToRad, repaintGauge, height, margin, numSections, padRad, percToDeg, percToRad, percent, radius, sectionIndx, svg, totalPercent, width, sectionPerc, arc1, arc2, arc3, perc, arcStartRad, arcEndRad;

    percent = percentValue;

    numSections = 1;
    sectionPerc = 1 / numSections / 2;
    padRad = 0.025;
    chartInset = 30;

    totalPercent = .75;

    margin = {
      top: 20,
      right: 20,
      bottom: 30,
      left: 20
    };

    width = 400;
    height = width;
    radius = Math.min(width, height) / 2;
    barWidth = 40 * width / 300;

    // Utility methods
    percToDeg = function(perc) {
      return perc * 360;
    };

    percToRad = function(perc) {
      return degToRad(percToDeg(perc));
    };

    degToRad = function(deg) {
      return deg * Math.PI / 180;
    };

    // Selects SVG, appends group, and assigns it to chart variable

    chart = select(node)
      .append('g')
      .attr('transform', "translate(" + ((width + margin.left) / 2) + ", " + ((height + margin.top) / 2) + ")");

    // Appends arc to group
    chart.append('path').attr('class', "arc " + firstArc);
    chart.append('path').attr('class', "arc " + secondArc);
    chart.append('path').attr('class', "arc " + thirdArc);

    arc3 = arc().outerRadius(radius - chartInset).innerRadius(radius - chartInset - barWidth)
    arc2 = arc().outerRadius(radius - chartInset).innerRadius(radius - chartInset - barWidth)
    arc1 = arc().outerRadius(radius - chartInset).innerRadius(radius - chartInset - barWidth)

    // Set arc start and end points
    repaintGauge = function ()
    {
      perc = 0.5;
      var next_start = totalPercent;
      arcStartRad = percToRad(next_start);
      arcEndRad = arcStartRad + percToRad(perc * arcFirst);
      next_start += perc * arcFirst;


      arc1.startAngle(arcStartRad).endAngle(arcEndRad);

      arcStartRad = percToRad(next_start);
      arcEndRad = arcStartRad + percToRad(perc * arcSecond);
      next_start += perc * arcSecond;

      arc2.startAngle(arcStartRad + padRad).endAngle(arcEndRad);

      arcStartRad = percToRad(next_start);
      arcEndRad = arcStartRad + percToRad(perc * arcThird);

      arc3.startAngle(arcStartRad + padRad).endAngle(arcEndRad);

      chart.select("." + firstArc).attr('d', arc1);
      chart.select("." + secondArc).attr('d', arc2);
      chart.select("." + thirdArc).attr('d', arc3);
      }

      // Add labels
      var dataset = [{metric:name, value: value}]

      var texts = selectAll("text")
                  .data(dataset)
                  .enter();

      texts.append("text")
           .text(function(){
                return dataset[0].value;
           })
           .attr('id', "Value")
           .attr('transform', "translate(" + ((width + margin.left) / 2.15) + ", " + ((height + margin.top) / 1.5) + ")")
           .attr("font-size",25)
           .style("fill", "#000000");

      texts.append("text")
         .text(function(){
             return 0;
         })
         .attr('id', 'scale0')
         .attr('transform', "translate(" + ((width + margin.left) / 15 ) + ", " + ((height + margin.top) / 2) + ")")
         .attr("font-size", 15)
         .style("fill", "#000000");

      texts.append("text")
         .text(function(){
             return gaugeMaxValue/2;
         })
         .attr('id', 'scale10')
         .attr('transform', "translate(" + ((width + margin.left) / 2.15 ) + ", " + ((height + margin.top) / 10) + ")")
         .attr("font-size", 15)
         .style("fill", "#000000");


      texts.append("text")
         .text(function(){
             return gaugeMaxValue;
         })
         .attr('id', 'scale20')
         .attr('transform', "translate(" + ((width + margin.left) / 1.1 ) + ", " + ((height + margin.top) / 2) + ")")
         .attr("font-size", 15)
         .style("fill", "#000000");

        var Needle = (function() {

          //Helper function that returns the `d` value for moving the needle
          var recalcPointerPos = function(perc) {
            var centerX, centerY, leftX, leftY, rightX, rightY, thetaRad, topX, topY;
            thetaRad = percToRad(perc / 2);
            centerX = 0;
            centerY = 0;
            topX = centerX - this.len * Math.cos(thetaRad);
            topY = centerY - this.len * Math.sin(thetaRad);
            leftX = centerX - this.radius * Math.cos(thetaRad - Math.PI / 2);
            leftY = centerY - this.radius * Math.sin(thetaRad - Math.PI / 2);
            rightX = centerX - this.radius * Math.cos(thetaRad + Math.PI / 2);
            rightY = centerY - this.radius * Math.sin(thetaRad + Math.PI / 2);

            return "M " + leftX + " " + leftY + " L " + topX + " " + topY + " L " + rightX + " " + rightY;
            };

            function Needle(node) {
              this.node = node;
              this.len = width / 3;
              this.radius = this.len / 8;
            }

            Needle.prototype.render = function() {
              this.node.append('circle').attr('class', 'needle-center').attr('cx', 0).attr('cy', 0).attr('r', this.radius);

              return this.node.append('path').attr('class', 'needle').attr('id', 'client-needle').attr('d', recalcPointerPos.call(this, 0));
              };

            Needle.prototype.moveTo = function(perc) {
              var self,
                  oldValue = this.perc || 0;

              this.perc = perc;
              self = this;

              // Reset pointer position
              transition().delay(100).duration(200).select('.needle').tween('reset-progress', function() {
                return function(percentOfPercent) {
                  var progress = (1 - percentOfPercent) * oldValue;

                  repaintGauge(progress);
                  return select(this).attr('d', recalcPointerPos.call(self, progress));
                };
              });

              transition().delay(300).duration(1500).select('.needle').tween('progress', function() {
                return function(percentOfPercent) {
                  var progress = percentOfPercent * perc;

                  repaintGauge(progress);
                  return select(this).attr('d', recalcPointerPos.call(self, progress));
                };
              });

            };

            return Needle;

            })();

            let needle = new Needle(chart);
            needle.render();
            needle.moveTo(percent);
  }




  render() {
    return (
      <svg ref={node => this.node = node} viewBox="0 0 400 240">
      </svg>
    )
  }
}

export default PointerGauge;
