import { datas } from "./objet.js";
let $element = document.querySelector(".map");
// let map = new Map(document.querySelector(".map"))
let width = $element.offsetWidth,
  height = $element.offsetHeight,
  active = d3.select(null);

let countries;
let scaleRatio = function() {
  return width <= height ? (width / height) * 90 : (width / height) * 70;
};

let tobind__svgin = document.querySelector(".chart__viz");

let cards__1 = document.querySelector(".country__infos");
let cards__0 = document.querySelector(".country__articles");
let cards__2 = document.querySelector(".country__dataviz");

const infos__raw = document.querySelector(".infos__raw"),
  country__title = infos__raw.querySelector("small"),
  country__description = infos__raw.querySelector("p"),
  last__articles__from = document.querySelector(".articles__raw > small");

let amountinterventions = []
for(const _country of datas.countries)
{
  amountinterventions.push(_country.interventions.length)
}

let dataset = [["Moyenne mondiale", 1, calculate(amountinterventions)]];

let projection = d3
  .geoMercator()
  .scale(scaleRatio())
  .translate([width / 2, height / 2]);

let color = d3
  .scaleThreshold()
  .domain([0, 1, 2, 4, 6, 8])
  .range([
    "rgb(247,251,255)",
    "rgb(222,235,247)",
    "rgb(198,219,239)",
    "rgb(158,202,225)",
    "rgb(107,174,214)",
    "rgb(66,146,198)"
  ]);

let tooltip = d3
  .select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);

let circles = [];
let circlesPosition = [];

let path = d3.geoPath().projection(projection);

let svg = d3
  .select($element)
  .append("svg")
  .attr("width", width)
  .attr("height", height);

let locations = svg.append("svg:g").attr("class", "locations");

svg
  .append("rect")
  .attr("class", "background")
  .attr("width", width)
  .attr("height", height)
  .on("click", reset);

let g = svg.append("g").style("stroke-width", "1.5px");

d3.queue()
  .defer(d3.json, "../front/assets/custom.geo.json")
  .defer(d3.csv, "../front/assets/world-country-names.csv")
  .await(ready);

function ready(error, world, names) {
  if (error) throw error;
  countries = topojson.feature(world, world.objects.countries).features;
  for (const _country of countries) {
    for (const _name of names) {
      if (_country.id == _name.id) {
        _country.tooltip = _name.name;
        _country.iso = _name.alpha3;
      }
    }
  }

  svg
    .selectAll("path")
    .data(countries)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("class", "feature")
    .attr("id", function(d) {
      return d.iso;
    })
    .style("fill", function(d) {
      const country = datas.countries.filter(
        country => country.countryISO == d.iso
      );
      if (country.length > 0) {
        if (country[0].interventions)
          return color(country[0].interventions.length);
        else return "rgb(247,251,255)";
      }
    })
    .on("click", clicked)
    .on("mouseover", function(d) {
      tooltip
        .transition()
        .duration(200)
        .style("opacity", 0.9);
      tooltip
        .html(d.tooltip)
        .style("left", d3.event.pageX + "px")
        .style("top", d3.event.pageY - 5 + "px");
    })
    .on("mouseout", function(d) {
      tooltip
        .transition()
        .duration(500)
        .style("opacity", 0);
    });

  for (const _institution of datas.institutions) {
    const position = [_institution.position.long, _institution.position.lat];
    const circle = svg
      .append("circle")
      .attr("transform", () => {
        return "translate(" + projection(position) + ")";
      })
      .attr("class", "institution")
      .style("r", function() {
        return width / 80 > 7 ? width / 80 : 7;
      })
      .attr("id", _institution.name)
      .on("click", function() {
        institutionInterventions(_institution.name);
      })
      .on("mouseover", function() {
        tooltip
          .transition()
          .duration(200)
          .style("opacity", 0.9);
        tooltip
          .html(_institution.name)
          .style("left", d3.event.pageX + "px")
          .style("top", d3.event.pageY - 30 + "px");
      })
      .on("mouseout", function(d) {
        tooltip
          .transition()
          .duration(500)
          .style("opacity", 0);
      });
    circles.push(circle);
    circlesPosition.push(position);
  }
}

function clicked(d) {
  if (active.node() === this) return reset();
  active.classed("active", false);
  removeDateChart(false)
  changeCardData(d.iso, "country");
  d3.selectAll(".intervention").classed("intervention", false);
  d3.select(".institution.active")
    .classed("active", false)
    .style("r", function() {
      return width / 80 > 7 ? width / 80 : 7;
    });
  const countryIntervenant = datas.countries.filter(
    country => country.countryISO == d.iso
  );
  d3.selectAll(".feature").style("fill", function(d) {
    const country = datas.countries.filter(
      country => country.countryISO == d.iso
    );
    if (country.length > 0) {
      removeDateChart(false)
      if (country[0].interventions)
        return color(country[0].interventions.length);
      else return "rgb(247,251,255)";
    }
  });
  if (countryIntervenant[0]) {
    d3.selectAll(".feature").style("fill", function(d) {
      const country = datas.countries.filter(
        country => country.countryISO == d.iso
      );
      return d.iso == countryIntervenant[0].countryISO
        ? color(country[0].interventions.length)
        : "rgb(247,251,255)";
    });
    changeCardData(d.iso, "country");
    active = d3.select(this).classed("active", true);
    for (const _intervention of countryIntervenant[0].interventions) {
      for (const _country of countries) {
        if (_country.iso == _intervention.countryISO) {
          const intervention = d3.select("#" + _country.iso);
          intervention.classed("intervention", true);
        }
      }
    }
  }
}

const institutionInterventions = _circleId => {
  active.classed("active", false);
  active = d3.select(null);
  
  const circle = d3.select("#" + _circleId);
  circle.style("r", function() {
    return width / 80 > 7 ? width / 80 : 7;
  });
  if (circle.classed("active")) {
    circle.classed("active", false);
    removeDateChart(true)
    
    d3.selectAll(".intervention").classed("intervention", false);
    d3.selectAll(".feature").style("fill", function(countries) {
      const country = datas.countries.filter(
        country => country.countryISO == countries.iso
      );
      if (country.length > 0) {
        removeDateChart(false)
        
        if (country[0].interventions)
          return color(country[0].interventions.length);
        else return "rgb(247,251,255)";
      }
    });
    return;
  }
  circle.classed("active", true).style("r", function() {
    return width / 80 > 7 ? width / 50 : 15;
  });
  removeDateChart(false)
  const institutionData = datas.institutions.filter(
    institution => institution.name == _circleId
  );
  d3.selectAll(".intervention").classed("intervention", false);
  d3.selectAll(".feature").style("fill", "rgb(247,251,255)");
  for (const _intervention of institutionData[0].interventions) {
    d3.select("#" + _intervention.countryISO).classed("intervention", true);
  }
  changeCardData(_circleId, "institution");
};

function reset() {
  active.classed("active", false);
  active = d3.select(null);
  removeDateChart(true)
  d3.select(".institution.active")
    .classed("active", false)
    .style("r", function() {
      return width / 80 > 7 ? width / 80 : 7;
    });

  d3.selectAll(".feature").style("fill", function(d) {
    const country = datas.countries.filter(
      country => country.countryISO == d.iso
    );
    if (country.length > 0) {
      if (country[0].interventions)
        return color(country[0].interventions.length);
      else return "rgb(247,251,255)";
    }
  });
  d3.selectAll(".intervention").classed("intervention", false);
}

const resize = () => {
  width = $element.offsetWidth;
  height = $element.offsetHeight;

  projection
    .center([0, 0])
    .scale(scaleRatio())
    .translate([width / 2, height / 2]);

  d3.select("svg")
    .attr("width", width)
    .attr("height", height);

  d3.selectAll("path").attr("d", path);

  for (let i = 0; i < circles.length; i++) {
    circles[i]
      .attr("transform", () => {
        return "translate(" + projection(circlesPosition[i]) + ")";
      })
      .style("r", function() {
        return width / 80 > 7 ? width / 80 : 7;
      });
  }
};

window.addEventListener("resize", resize);

const getCountriesInfos = iso => {
  let countryInfos = {
    name: "",
    flag: "",
    description: "",
    interventions: [],
    type: "pays"
  };
  for (const _countries of datas.countries) {
    if (iso == _countries.countryISO) {
      countryInfos.name = _countries.name;
      countryInfos.flag = _countries.flag;
      countryInfos.description = _countries.description;
      countryInfos.interventions = _countries.interventions;
    }
  }
  return countryInfos;
};

const getInstitutionsInfos = name => {
  let countryInfos = {
    name: "",
    logo: "",
    description: "",
    interventions: [],
    type: "institutions"
  };
  for (const _institutions of datas.institutions) {
    if (name == _institutions.name) {
      countryInfos.name = _institutions.name;
      countryInfos.logo = _institutions.logo;
      countryInfos.description = _institutions.description;
      countryInfos.interventions = _institutions.interventions;
    }
  }
  return countryInfos;
};


function changeCardData(_name, _type) {
  if (_type == "institution") {
    country__description.innerHTML = getInstitutionsInfos(_name).description;
    country__title.innerHTML = getInstitutionsInfos(_name).name;
    country__title.classList.add("institution");
    last__articles__from.innerHTML = `${
      getInstitutionsInfos(_name).name
    }, où agit cette institution actuellement ?`;

    const result = datas.institutions.filter(inst => inst.name == _name);
    const test = [result[0].name,2, result[0].interventions.length]
    dataset.push(test);
  }
  else if (_type == "country") {
    country__description.innerHTML = getCountriesInfos(_name).description;
    country__title.innerHTML = getCountriesInfos(_name).name;
    country__title.classList.add("country");
    last__articles__from.innerHTML = `${
      getCountriesInfos(_name).name
    }, où intervient ce pays aujourd'hui ?`;

    const result = datas.countries.filter(
      country => country.countryISO == _name
    );
    dataset.push([result[0].name, 2, result[0].interventions.length]);
  }
  if(!cards__0.classList.contains('transition__card'))
  {
    cards__0.classList.toggle("transition__card");
    cards__1.classList.toggle("transition__card");
    cards__2.classList.toggle("transition__card");
  }
 


  let margin = { top: 20, right: 20, bottom: 30, left: 40 },
    w = tobind__svgin.offsetWidth,
    h = tobind__svgin.offsetHeight;

  let xScale = d3
      .scaleBand()
      .rangeRound([0, w])
      .padding(0.1)
      .domain(
        dataset.map(function(d) {
          return d[0];
        })
      ),
    yScale = d3
      .scaleLinear()
      .rangeRound([h, 0])
      .domain([
        0,
        d3.max(dataset, function(d) {
          return d[2];
        })
      ]);

  let svg_ = d3
    .select(tobind__svgin)
    .append("svg")
    .attr("width", w + margin.left + margin.right)
    .attr("height", h + margin.top + margin.bottom);

  let g_ = svg_
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // axis-x
  g_.append("g")
    .attr("class", "axis axis--x")
    .attr("transform", "translate(0," + h + ")")
    .call(d3.axisBottom(xScale));

  // axis-y
  g_.append("g")
    .attr("class", "axis axis--y")
    .call(d3.axisLeft(yScale));

  let bar = g_
    .selectAll("rect")
    .data(dataset)
    .enter()
    .append("g");

  // bar chart
  bar
    .append("rect")
    .attr("x", function(d) {
      return xScale(d[0]);
    })
    .attr("y", function(d) {
      return yScale(d[2]);
    })
    .attr("width", xScale.bandwidth())
    .attr("height", function(d) {
      return h - yScale(d[2]);
    })
    .attr("class", function(d) {
      let s = "bar ";
      if (d[1] == 1) {
        return s + "bar1";
      } else if (d[1] == 2) {
        return s + "bar2";
      }
    });

  // labels on the bar chart
  bar
    .append("text")
    .attr("dy", "1.1em")
    .attr("x", function(d) {
      return xScale(d[0]) + xScale.bandwidth() / 2;
    })
    .attr("y", function(d) {
      return yScale(d[2]);
    })
    .attr("text-anchor", "middle")
    .attr("font-family", "Noto Sans")
    .attr("font-size", "11px")
    .attr("fill", "#545358")
    .text(function(d) {
      return d[2];
    });
}

function removeDateChart(_toRemove) {
  tobind__svgin.innerHTML= ""
  dataset.splice(1,1)
  if(_toRemove)
  {
    cards__0.classList.remove("transition__card");
    cards__1.classList.remove("transition__card");
    cards__2.classList.remove("transition__card");
  }
}

function calculate(array) {
  var sum = 0;
  var count = array.length;
  for (var i = 0; i < count; i++) {
    sum = sum + array[i];
  }
  return Math.round(sum / count);
}