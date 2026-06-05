const graphConfig = {
    // ======================================
    //  BOURSE GRAPH
    // ======================================
    twoSeries:{
		api: "/bourse/getgraphseriesdata",
        buildParams({
            checkedValues,
            fromdate,
            todate,
            Period,
            type,
            removeEmpty,
            functionId
        }) {
            // compare graph
                return {
                    fromdate,
                    todate,
                    period: "d",
                    type,
                    factor1:itemValue[checkedValues[0]].factor,
                    subGroupId1: itemValue[checkedValues[0]].subGroupId,
                    groupId1: itemValue[checkedValues[0]].GroupId,
                    factor2:itemValue[checkedValues[1]].factor,
                    subGroupId2: itemValue[checkedValues[1]].subGroupId,
                    groupId2: itemValue[checkedValues[1]].GroupId,
                    removeEmpty1: removeEmpty,
                    removeEmpty2: removeEmpty
                };
        
     }
    },
    metals: {
        api: "/metals/getgraphdatabytype",
        buildParams({
            checkedValues,
            fromdate,
            todate,
            Period,
            type,
            removeEmpty,
            functionId
        }) {
            // compare graph
            if (checkedItem == 2) {
                functionId = -1;
                return {
                    fromdate,
                    todate,
                    period: "d",
                    type,
                    subGroupId1: itemValue[checkedValues[0]].subGroupId,
                    groupId1: itemValue[checkedValues[0]].GroupId,
                    subGroupId2: itemValue[checkedValues[1]].subGroupId,
                    groupId2: itemValue[checkedValues[1]].GroupId,
                    removeEmpty1: removeEmpty,
                    removeEmpty2: removeEmpty
                };
            }
            // function graph
            if (functionId != -1) {
                return {
                    fromdate,
                    todate,
                    period: Period,
                    type,
                    subGroupId1: itemValue[checkedValues[0]].subGroupId,
                    groupId1: itemValue[checkedValues[0]].GroupId,
                    isFunctionGraph: true,
                    functionId: functionId + 1,
                    removeEmpty1: removeEmpty
                };
            }
            // single graph
            return {
                fromdate,
                todate,
                period: Period,
                type,
                subGroupId1: itemValue[checkedValues[0]].subGroupId,
                groupId1: itemValue[checkedValues[0]].GroupId,
                isFunctionGraph: false,
                functionId,
                removeEmpty1: removeEmpty
            };
        }
    },
        liquidity: {
        api: "/liquidity/getgraphdatabytype",
        buildParams({
            checkedValues,
            fromdate,
            todate,
            Period,
            type,
            removeEmpty,
            functionId
        }) {
            // compare graph
            if (checkedItem == 2) {
                functionId = -1;
                return {
                    fromdate,
                    todate,
                    period: "d",
                    type,
                    subGroupId1: itemValue[checkedValues[0]].subGroupId,
                    groupId1: itemValue[checkedValues[0]].GroupId,
                    subGroupId2: itemValue[checkedValues[1]].subGroupId,
                    groupId2: itemValue[checkedValues[1]].GroupId,
                    removeEmpty1: removeEmpty,
                    removeEmpty2: removeEmpty
                };
            }
            // function graph
            if (functionId != -1) {
                return {
                    fromdate,
                    todate,
                    period: Period,
                    type,
                    subGroupId1: itemValue[checkedValues[0]].subGroupId,
                    groupId1: itemValue[checkedValues[0]].GroupId,
                    isFunctionGraph: true,
                    functionId: functionId + 1,
                    removeEmpty1: removeEmpty
                };
            }
            // single graph
            return {
                fromdate,
                todate,
                period: Period,
                type,
                subGroupId1: itemValue[checkedValues[0]].subGroupId,
                groupId1: itemValue[checkedValues[0]].GroupId,
                isFunctionGraph: false,
                functionId,
                removeEmpty1: removeEmpty
            };
        }
    },
       ecbImpact: {
        api: "/bourse/getgraphseriesdata",
        buildParams({
            checkedValues,
            fromdate,
            todate,
            Period,
            type,
            removeEmpty,
            functionId
        }) {
           
            return {
                fromdate,
                todate,
                period: Period,
                factor1:itemValue[checkedValues[0]].factor,
                subGroupId1: itemValue[checkedValues[0]].subGroupId,
                groupId1: itemValue[checkedValues[0]].GroupId,
                factor2:itemValue[checkedValues[1]].factor,
                subGroupId2: itemValue[checkedValues[1]].subGroupId,
                groupId2: itemValue[checkedValues[1]].GroupId,
                removeEmpty1: removeEmpty,
                removeEmpty2: removeEmpty
            };
        }
    },
    macro:{
		api: "/macro/getgraphdata",
        buildParams({
            checkedValues,
            fromdate,
            todate,
            Period,
            type,
            removeEmpty,
            functionId
        }) {
           
            return {
                fromdate,
                todate,
                period: Period,
                type,
                factor1:itemValue[checkedValues[0]].factor,
                subGroupId1: itemValue[checkedValues[0]].subGroupId,
                groupId1: itemValue[checkedValues[0]].GroupId,
                factor2:itemValue[checkedValues[1]].factor,
                subGroupId2: itemValue[checkedValues[1]].subGroupId,
                groupId2: itemValue[checkedValues[1]].GroupId,
                removeEmpty1: removeEmpty,
                removeEmpty2: removeEmpty
            };
        }
	},
     rates: {
    	buildParams({
        checkedValues,
        fromdate,
        todate,
        Period,
        type,
        removeEmpty,
        functionId
    }) {
        // 4 items
        if (checkedItem == 4) {
            return {
                api: "/rates/getgraphdatabytypes",
                dataParam: [
                    createPair(checkedValues[0], checkedValues[1]),
                    createPair(checkedValues[2], checkedValues[3])
                ]
            };
        }
        // compare
        if (checkedItem == 2) {
            return {
                api: "/rates/getgraphdatabytype",
                dataParam: createPair(checkedValues[0], checkedValues[1])
            };
        }
        // single
        return {
            api: "/rates/getgraphdatabytype",
            dataParam: {
                fromdate,
                todate,
                period: Period,
                type,
                subGroupId1: itemValue[checkedValues[0]].subGroupId,
                groupId1: itemValue[checkedValues[0]].GroupId,
                factor1: itemValue[checkedValues[0]].factor,
                removeEmpty1: removeEmpty,
                isFunctionGraph: functionId != -1,
                functionId
            }
        };

        function createPair(first, second) {
            return {
                fromdate,
                todate,
                period: "d",
                type,
                subGroupId1: itemValue[first].subGroupId,
                groupId1: itemValue[first].GroupId,
                subGroupId2: itemValue[second].subGroupId,
                groupId2: itemValue[second].GroupId,
                factor1: itemValue[first].factor,
                factor2: itemValue[second].factor,
                removeEmpty1: removeEmpty,
                removeEmpty2: removeEmpty
            };
        }
    }
	},
	usjobs: {
        api: "/cryptos/getgraphdatabytype",
        buildParams({
            checkedValues,
            fromdate,
            todate,
            Period,
            type,
            removeEmpty,
            functionId
        }) {
            // compare graph
            if (checkedItem == 2) {
                functionId = -1;
                return {
                    fromdate,
                    todate,
                    period: "d",
                    type,
                    subGroupId1: itemValue[checkedValues[0]].subGroupId,
                    groupId1: itemValue[checkedValues[0]].GroupId,
                    subGroupId2: itemValue[checkedValues[1]].subGroupId,
                    groupId2: itemValue[checkedValues[1]].GroupId,
                    removeEmpty1: removeEmpty,
                    removeEmpty2: removeEmpty
                };
            }
            // function graph
            if (functionId != -1) {
                return {
                    fromdate,
                    todate,
                    period: Period,
                    type,
                    subGroupId1: itemValue[checkedValues[0]].subGroupId,
                    groupId1: itemValue[checkedValues[0]].GroupId,
                    isFunctionGraph: true,
                    functionId: functionId + 1,
                    removeEmpty1: removeEmpty
                };
            }
            // single graph
            return {
                fromdate,
                todate,
                period: Period,
                type,
                subGroupId1: itemValue[checkedValues[0]].subGroupId,
                groupId1: itemValue[checkedValues[0]].GroupId,
                isFunctionGraph: false,
                functionId,
                removeEmpty1: removeEmpty
            };
        }
    },
    sti: {
        api: "/sti/getgraphdatabytype",
        buildParams({
            checkedValues,
            fromdate,
            todate,
            Period,
            type,
            removeEmpty,
            functionId
        }) {
            // compare graph
            if (checkedItem == 2) {
                functionId = -1;
                return {
                    fromdate,
                    todate,
                    period: "d",
                    type,
                    subGroupId1: itemValue[checkedValues[0]].subGroupId,
                    groupId1: itemValue[checkedValues[0]].GroupId,
                    subGroupId2: itemValue[checkedValues[1]].subGroupId,
                    groupId2: itemValue[checkedValues[1]].GroupId,
                    removeEmpty1: removeEmpty,
                    removeEmpty2: removeEmpty
                };
            }
            // function graph
            if (functionId != -1) {
                return {
                    fromdate,
                    todate,
                    period: Period,
                    type,
                    subGroupId1: itemValue[checkedValues[0]].subGroupId,
                    groupId1: itemValue[checkedValues[0]].GroupId,
                    isFunctionGraph: true,
                    functionId: functionId + 1,
                    removeEmpty1: removeEmpty
                };
            }
            // single graph
            return {
                fromdate,
                todate,
                period: Period,
                type,
                subGroupId1: itemValue[checkedValues[0]].subGroupId,
                groupId1: itemValue[checkedValues[0]].GroupId,
                isFunctionGraph: false,
                functionId,
                removeEmpty1: removeEmpty
            };
        }
    },
    skews: {
        api: "/skews/getgraphdatabytype",
        buildParams({
            checkedValues,
            fromdate,
            todate,
            Period,
            type,
            removeEmpty,
            functionId
        }) {
            // compare graph
            if (checkedItem == 2) {
                functionId = -1;
                return {
                    fromdate,
                    todate,
                    period: "d",
                    type,
                    subGroupId1: itemValue[checkedValues[0]].subGroupId,
                    groupId1: itemValue[checkedValues[0]].GroupId,
                    subGroupId2: itemValue[checkedValues[1]].subGroupId,
                    groupId2: itemValue[checkedValues[1]].GroupId,
                    factor1: itemValue[checkedValues[0]].factor,
		 		    factor2: itemValue[checkedValues[1]].factor,
                    removeEmpty1: removeEmpty,
                    removeEmpty2: removeEmpty
                };
            }
            // function graph
            if (functionId != -1) {
                return {
                    fromdate,
                    todate,
                    period: Period,
                    type,
                    subGroupId1: itemValue[checkedValues[0]].subGroupId,
                    groupId1: itemValue[checkedValues[0]].GroupId,
                    isFunctionGraph: true,
                    functionId: functionId + 1,
                    removeEmpty1: removeEmpty
                };
            }
            // single graph
            return {
                fromdate,
                todate,
                period: Period,
                type,
                subGroupId1: itemValue[checkedValues[0]].subGroupId,
                groupId1: itemValue[checkedValues[0]].GroupId,
                isFunctionGraph: false,
                functionId,
                removeEmpty1: removeEmpty
            };
        }
    },
     cryptos: {
        api: "/cryptos/getgraphdatabytype",
        buildParams({
            checkedValues,
            fromdate,
            todate,
            Period,
            type,
            removeEmpty,
            functionId
        }) {
            // compare graph
            if (checkedItem == 2) {
                functionId = -1;
                return {
                    fromdate,
                    todate,
                    period: "d",
                    type,
                    subGroupId1: itemValue[checkedValues[0]].subGroupId,
                    groupId1: itemValue[checkedValues[0]].GroupId,
                    subGroupId2: itemValue[checkedValues[1]].subGroupId,
                    groupId2: itemValue[checkedValues[1]].GroupId,
                    removeEmpty1: removeEmpty,
                    removeEmpty2: removeEmpty
                };
            }
            // function graph
            if (functionId != -1) {
                return {
                    fromdate,
                    todate,
                    period: Period,
                    type,
                    subGroupId1: itemValue[checkedValues[0]].subGroupId,
                    groupId1: itemValue[checkedValues[0]].GroupId,
                    isFunctionGraph: true,
                    functionId: functionId + 1,
                    removeEmpty1: removeEmpty
                };
            }
            // single graph
            return {
                fromdate,
                todate,
                period: Period,
                type,
                subGroupId1: itemValue[checkedValues[0]].subGroupId,
                groupId1: itemValue[checkedValues[0]].GroupId,
                isFunctionGraph: false,
                functionId,
                removeEmpty1: removeEmpty
            };
        }
    },
    fxcds: {
        api: "/fxcds/getgraphdatabytype",
        buildParams({
            checkedValues,
            fromdate,
            todate,
            Period,
            type,
            removeEmpty,
            functionId
        }) {
            // compare graph
            if (checkedItem == 2) {
                functionId = -1;
                return {
                    fromdate,
                    todate,
                    period: "d",
                    type,
                    subGroupId1: itemValue[checkedValues[0]].subGroupId,
                    groupId1: itemValue[checkedValues[0]].GroupId,
                    subGroupId2: itemValue[checkedValues[1]].subGroupId,
                    groupId2: itemValue[checkedValues[1]].GroupId,
                    removeEmpty1: removeEmpty,
                    removeEmpty2: removeEmpty
                };
            }
            // function graph
            if (functionId != -1) {
                return {
                    fromdate,
                    todate,
                    period: Period,
                    type,
                    subGroupId1: itemValue[checkedValues[0]].subGroupId,
                    groupId1: itemValue[checkedValues[0]].GroupId,
                    isFunctionGraph: true,
                    functionId: functionId + 1,
                    removeEmpty1: removeEmpty
                };
            }
            // single graph
            return {
                fromdate,
                todate,
                period: Period,
                type,
                subGroupId1: itemValue[checkedValues[0]].subGroupId,
                groupId1: itemValue[checkedValues[0]].GroupId,
                isFunctionGraph: false,
                functionId,
                removeEmpty1: removeEmpty
            };
        }
    },
    volume: {
        api: graphName=="wmqyVolume"?'/volume/getgraphdatabytypesum':"/volume/getgraphdatabytype",
        buildParams({
            checkedValues,
            fromdate,
            todate,
            Period,
            type,
            removeEmpty,
            functionId
        }) {
            // compare graph
            if (graphName=="wmqyVolume") {
				if (checkedItem == 3) 
                return {
                    fromdate,
                    todate,
                    period: getChartPeriodVolume(),
                    type:'5',
                    subGroupId1: itemValue[checkedValues[0]].subGroupId,
                    groupId1: itemValue[checkedValues[0]].GroupId,
                    subGroupId2: itemValue[checkedValues[1]].subGroupId,
                    groupId2: itemValue[checkedValues[1]].GroupId,
                    subGroupId3: itemValue[checkedValues[2]].subGroupId,
                    groupId3: itemValue[checkedValues[2]].GroupId,
                };
                if (checkedItem == 2) 
                return {
                    fromdate,
                    todate,
                    period: getChartPeriodVolume(),
                    type:'5',
                    subGroupId1: itemValue[checkedValues[0]].subGroupId,
                    groupId1: itemValue[checkedValues[0]].GroupId,
                    subGroupId2: itemValue[checkedValues[1]].subGroupId,
                    groupId2: itemValue[checkedValues[1]].GroupId,
                    removeEmpty1:removeEmpty,
                    removeEmpty2:removeEmpty
                };
                
                return {
                    fromdate,
                    todate,
                    period: getChartPeriodVolume(),
                    type:'5',
                    subGroupId1: itemValue[checkedValues[0]].subGroupId,
                    groupId1: itemValue[checkedValues[0]].GroupId,
                    isFunctionGraph:false,
                    functionId:functionId,
                    removeEmpty1:removeEmpty
                };
            }
            if (checkedItem == 2) {
                functionId = -1;
                return {
                    fromdate,
                    todate,
                    period: "d",
                    type,
                    subGroupId1: itemValue[checkedValues[0]].subGroupId,
                    groupId1: itemValue[checkedValues[0]].GroupId,
                    subGroupId2: itemValue[checkedValues[1]].subGroupId,
                    groupId2: itemValue[checkedValues[1]].GroupId,
                    removeEmpty1: removeEmpty,
                    removeEmpty2: removeEmpty
                };
            }
            // function graph
            if (functionId != -1) {
                return {
                    fromdate,
                    todate,
                    period: Period,
                    type,
                    subGroupId1: itemValue[checkedValues[0]].subGroupId,
                    groupId1: itemValue[checkedValues[0]].GroupId,
                    isFunctionGraph: true,
                    functionId: functionId + 1,
                    removeEmpty1: removeEmpty
                };
            }
            // single graph
            return {
                fromdate,
                todate,
                period: Period,
                type,
                subGroupId1: itemValue[checkedValues[0]].subGroupId,
                groupId1: itemValue[checkedValues[0]].GroupId,
                isFunctionGraph: false,
                functionId,
                removeEmpty1: removeEmpty
            };
        }
    },
    // ======================================
    // SOVEREIGN GRAPH
    // ======================================
    bourse: {
        api: graphName=='any2'?
        "/bourse/getgraphdata":
        "/bourse/getgraphdatabytype",
        buildParams({
            checkedValues,
            fromdate,
            todate,
            Period,
            type,
            functionId
        }) {
            // function graph
            if (functionId != -1) {
                return {
                    fromdate,
                    todate,
                    period: Period,
                    type,
                    factor1: itemValueYields[checkedValues[0]].factor,
                    country1: itemValueYields[checkedValues[0]].country,
                    yieldCurveCross1: itemValueYields[checkedValues[0]].yieldCurveCross,
                    isFunctionGraph: true,
                    functionId: functionId + 1
                };
            }
            // compare graph
            if (checkedItem == 2) {
                return {
                    fromdate,
                    todate,
                    period: Period,
                    type,
                    factor1: itemValueYields[checkedValues[0]].factor,
                    country1: itemValueYields[checkedValues[0]].country,
                    yieldCurveCross1: itemValueYields[checkedValues[0]].yieldCurveCross,
                    factor2: itemValueYields[checkedValues[1]].factor,
                    country2: itemValueYields[checkedValues[1]].country,
                    yieldCurveCross2: itemValueYields[checkedValues[1]].yieldCurveCross
                };
            }
            if (checkedItem == 3) {
                return {
                    fromdate,
                    todate,
                    period: Period,
                    type,
                    factor1: itemValueYields[checkedValues[0]].factor,
                    country1: itemValueYields[checkedValues[0]].country,
                    yieldCurveCross1: itemValueYields[checkedValues[0]].yieldCurveCross,
                    factor2: itemValueYields[checkedValues[1]].factor,
                    country2: itemValueYields[checkedValues[1]].country,
                    yieldCurveCross2: itemValueYields[checkedValues[1]].yieldCurveCross,
                    factor3: itemValueYields[checkedValues[2]].factor,
                    country3: itemValueYields[checkedValues[2]].country,
                    yieldCurveCross3: itemValueYields[checkedValues[2]].yieldCurveCross
                };
            }
            if (checkedItem == 4) {
                return {
                    fromdate,
                    todate,
                    period: Period,
                    type,
                    factor1: itemValueYields[checkedValues[0]].factor,
                    country1: itemValueYields[checkedValues[0]].country,
                    yieldCurveCross1: itemValueYields[checkedValues[0]].yieldCurveCross,
                    factor2: itemValueYields[checkedValues[1]].factor,
                    country2: itemValueYields[checkedValues[1]].country,
                    yieldCurveCross2: itemValueYields[checkedValues[1]].yieldCurveCross,
                    factor3: itemValueYields[checkedValues[2]].factor,
                    country3: itemValueYields[checkedValues[2]].country,
                    yieldCurveCross3: itemValueYields[checkedValues[2]].yieldCurveCross,
                    factor4: itemValueYields[checkedValues[3]].factor,
                    country4: itemValueYields[checkedValues[3]].country,
                    yieldCurveCross4: itemValueYields[checkedValues[3]].yieldCurveCross
                };
            }
            // single graph
            return {
                fromdate,
                todate,
                period: Period,
                type,
                factor1: itemValueYields[checkedValues[0]].factor,
                country1: itemValueYields[checkedValues[0]].country,
                yieldCurveCross1: itemValueYields[checkedValues[0]].yieldCurveCross,
                isFunctionGraph: false,
                functionId
            };
        }
    },
    // ======================================
    // SPREAD GRAPH
    // ======================================
    spreadGraph: {
        api: "/bourse/getgraphdatalistconfig",
        buildParams({
            checkedValues,
            fromdate,
            todate
        }) {
            return {
                fromdate,
                todate,
                period: "d",
                factor1: itemValue[checkedValues[0]].factor,
                country1: itemValue[checkedValues[0]].country,
                yieldCurveCross1: itemValue[checkedValues[0]].yieldCurveCross,
                minusfactor: itemValue[checkedValues[1]].factor,
                minuscountry: itemValue[checkedValues[1]].country,
                groupId1: itemValue[checkedValues[0]].groupId,
                groupId2: itemValue[checkedValues[1]].groupId
            };
        }
    }
};
function updateChartConfigurationUnified(SelectedchartType, selectedChartColor, selectedChartTransparency, selectedChartMarker, selectedChartGrid, selectedChartLegend, selectedFontSize, updateSeriesFlag = false, newSeries = null) {
    if (!chart?.w?.config) return;
    // ==================================
    // UI STATE
    // ==================================
    activateChartTrasnparency(SelectedchartType);
    activateChartMarker(SelectedchartType);
    activateChartLegend(SelectedchartType);
    activateChartColor(SelectedchartType);
    const currentSeries = chart.w.config.series || [];
    if (!currentSeries.length) return;
    // ==================================
    // SAVE ORIGINAL SETTINGS ONCE
    // ==================================
    if (!window.originalChartSettings) {
        window.originalChartSettings = {
            colors: JSON.parse(JSON.stringify(chart.w.config.colors || [])),
            yaxis: JSON.parse(JSON.stringify(chart.w.config.yaxis || [])),
            seriesTypes: currentSeries.map(s => s.type)
        };
    }
    // ==================================
    // NORMALIZE COLOR
    // ==================================
    let activeColor = selectedChartColor;
    let transparency = Number(selectedChartTransparency);
    // ==================================
    // DEFAULT COLOR
    // ==================================
    if (!$("#chartColor .active").length && SelectedchartType!='line') {
        $("#chartColor button").first().addClass("active");
        activeColor = $("#chartColor button").first().attr("id") || "ffffff";
    }
    // ==================================
    // DEFAULT TRANSPARENCY
    // ==================================
    if (!$("#chartColorTransparency .active").length) {
        $("#chartColorTransparency button").removeClass("active");
        $("#chartColorTransparency button[id='75']").addClass("active");
        transparency = 0.75;
    }
    // fallback if color already active
    if (!activeColor) {
        activeColor = $("#chartColor .active").attr("id") || "ffffff";
    }
    // normalize #
    if (!activeColor.startsWith('#')) {
        activeColor = '#' + activeColor;
    }
    // normalize special color
    const finalColor = activeColor === '#44546a' ? '#2e75b6' : activeColor;
    // ==================================
    // SERIES
    // ONLY SERIES 0 CHANGES
    // ==================================
    const updatedSeries = currentSeries.map(
        (series, index) => {
            // FIRST SERIES ONLY
            if (index === 0) {
                return {
                    ...series,
                    type: SelectedchartType
                };
            }
            // PRESERVE SERIES EXACTLY
            return series;
        });
    // ==================================
    // CURRENT RENDERED COLORS
    // ==================================
    const renderedColors = chart.w.globals.colors || chart.w.config.colors || [];
    const renderedStrokeColors = chart.w.config.stroke?.colors || renderedColors;
    const renderedMarkerColors = chart.w.config.markers?.colors || renderedColors;
    const renderedMarkerStrokeColors = chart.w.config.markers?.strokeColors || renderedColors;
    // ==================================
    // COLORS
    // ==================================
    const currentColors = chart.w.config.colors || [];
    const updatedColors = [
        finalColor, ...currentColors.slice(1)
    ];
    // ==================================
    // STROKE
    // ==================================
    const updatedStroke = {
        curve: 'straight',
        width: currentSeries.map(
            (series, index) => {
                // first series only
                if (index === 0 && SelectedchartType === 'column') {
                    return 0;
                }
                // preserve rendered width
                return (chart.w.config.stroke?.width?.[
                    index
                ] || 2.25);
            }),
        colors: currentSeries.map(
            (series, index) => {
                // first series only
                if (index === 0) {
			    // area always white
			    if (SelectedchartType === 'area') {
			        return '#ffffff';
			    }
			    // line keeps white if selected
			    if (SelectedchartType === 'line' && finalColor.toLowerCase() === '#ffffff') {
			        return '#ffffff';
			    }
			    return finalColor;
			}
                // preserve rendered
                return (renderedStrokeColors[index] || renderedColors[index]);
            })
    };
    // ==================================
    // MARKERS
    // ==================================
    if (!$("#chartMarker .active").length) {
        $("#chartMarker button").removeClass("active");
        $("#chartMarker button[id='1']").addClass("active");
        selectedChartMarker = 1;
    }
    const updatedMarkers = {
        size: currentSeries.map(
        (series, index) => {
            // FIRST SERIES
            if (index === 0) {
                return (SelectedchartType === 'column') ? 0 : (Number.isFinite(Number(selectedChartMarker)) ? Number(selectedChartMarker) : Number($("#chartMarker .active").attr("id")) || 1);
            }
            // ==================================
            // OTHER SERIES
            // KEEP EXISTING VALUE
            // ==================================
            const existingMarker = Array.isArray(chart.w.config.markers?.size) ? chart.w.config.markers.size[index] : chart.w.config.markers?.size;
            // preserve exact value
            if (existingMarker === 0 || existingMarker === 1) {
                return existingMarker;
            }
            // fallback
            return (series.type === 'column') ? 0 : 1;
        }),
        colors: currentSeries.map(
            (series, index) => {
                if (index === 0) {
				    // area always white
				    if (SelectedchartType === 'area') {
				        return '#ffffff';
				    }
				    // line keeps white if selected
				    if (SelectedchartType === 'line' && finalColor.toLowerCase() === '#ffffff') {
				        return '#ffffff';
				    }
				    return finalColor;
				}
                return (renderedMarkerColors[index] || renderedColors[index]);
            }),
        strokeColors: currentSeries.map(
            (series, index) => {
                if (index === 0) {
				    // area always white
				    if (SelectedchartType === 'area') {
				        return '#ffffff';
				    }
				    // line keeps white if selected
				    if (SelectedchartType === 'line' && finalColor.toLowerCase() === '#ffffff') {
				        return '#ffffff';
				    }
				    return finalColor;
				}
                return (renderedMarkerStrokeColors[index] || renderedColors[index]);
            }),
        hover: {
            sizeOffset: 2
        }
    };
    // ==================================
    // YAXIS
    // PRESERVE CURRENT MIN/MAX
    // ==================================
    const updatedYaxis = JSON.parse(JSON.stringify(chart.w.config.yaxis));
    if (Array.isArray(updatedYaxis)) {
        updatedYaxis.forEach(
            (axis, index) => {
                // keep original formatter
                axis.labels = {
                    ...axis.labels,
                    formatter: chart.w.config.yaxis?.[
                        index
                    ]?.labels?.formatter,
                    style: {
                        ...axis.labels?.style,
                        fontSize: selectedFontSize
                    }
                };
            });
    } else {
        updatedYaxis.labels = {
            ...updatedYaxis.labels,
            formatter: chart.w.config.yaxis?.labels?.formatter,
            style: {
                ...updatedYaxis.labels?.style,
                fontSize: selectedFontSize
            }
        };
    }
    // ==================================
    // XAXIS FONT
    // ==================================
    const updatedXAxis = {
        ...chart.w.config.xaxis,
        labels: {
            ...chart.w.config.xaxis?.labels,
            style: {
                ...chart.w.config.xaxis?.labels?.style,
                fontSize: selectedFontSize
            }
        }
    };
    // ==================================
    // LEGEND
    // ==================================
    const updatedLegend = {
        ...chart.w.config.legend,
        show: selectedChartLegend === 'legendtrue',
        fontSize: selectedFontSize,
        labels: {
            ...chart.w.config.legend?.labels,
            colors: 'White',
            useSeriesColors: false
        },
        markers: {
            ...chart.w.config.legend?.markers,
            width: 12,
            height: 2
        },
        showForSingleSeries: true
    };
    // preserve existing fill
    const currentFill = chart.w.config.fill || {};
    // single series
    if (currentSeries.length === 1) {
        var updatedFill = {
            ...currentFill,
            type: SelectedchartType === 'area' ? 'solid' : currentFill.type,
            opacity: SelectedchartType === 'area' ? transparency : 1
        };
    }
    // multiple series
    else {
        var updatedFill = {
            ...currentFill,
            type: currentSeries.map(
                (_, index) => {
                    if (index === 0 && SelectedchartType === 'area') {
                        return 'solid';
                    }
                    return (Array.isArray(currentFill.type) ? currentFill.type[index] : (currentFill.type || 'solid'));
                }),
            opacity: currentSeries.map(
                (_, index) => {
                    // first series only
                    if (index === 0) {
                        return (SelectedchartType === 'area') ? transparency : 1;
                    }
                    // preserve others
                    return (Array.isArray(currentFill.opacity) ? currentFill.opacity[index] : 1);
                })
        };
    }
    // ==================================
    // GRID
    // ==================================
    const updatedGrid = {
        ...chart.w.config.grid,
        show: String(selectedChartGrid).includes('true')
    };
    // ==================================
    // SINGLE UPDATE
    // ==================================
    const updateOptions = {
        series: updatedSeries,
        colors: updatedColors,
        stroke: updatedStroke,
        markers: updatedMarkers,
        fill: updatedFill,
        xaxis: updatedXAxis,
        legend: updatedLegend,
        grid: updatedGrid,
        yaxis: updatedYaxis
    };
    // only for navigation refresh
    // NAVIGATION DATA UPDATE
    // ONLY UPDATE DATA
    // ==================================
  if (updateSeriesFlag && newSeries) {
    const preservedSeries = JSON.parse(JSON.stringify(updatedSeries));
    // ==================================
    // UPDATE DATA ONLY
    // ==================================
    newSeries.forEach((series, index) => {
        if (preservedSeries[index]) {
            preservedSeries[index].data = series.data;
            // force type for first series
            if (index === 0) {
                preservedSeries[index].type = SelectedchartType;
            }
        }
    });
    updateOptions.series = preservedSeries;
    // ==================================
    // YAXIS MIN/MAX
    // ==================================
    // SINGLE SERIES
    if (preservedSeries.length === 1) {
        const values = preservedSeries[0]?.data?.map(x => x.y).filter(x => x != null && !isNaN(x)) || [];
        const min = Math.min(...values);
        const max = Math.max(...values);
        const axis = calculatedMarginToMinMax(min, max, 5);
        if (Array.isArray(updatedYaxis)) {
            updatedYaxis[0].min = axis.min;
            updatedYaxis[0].max = axis.max;
        } else {
            updatedYaxis.min = axis.min;
            updatedYaxis.max = axis.max;
        }
    }
    // MULTIPLE SERIES
    else {
        const barFunctionId = [
            53, 54, 55, 56, 57, 58, 59, 60, 61, 62,
            63, 64, 65, 66, 67, 68, 69, 70, 71, 72,
            73, 74, 75
        ];
        // ==================================
        // DYNAMIC STROKE WIDTH
        // ==================================
        const strokeWidth = getDynamicWidth(preservedSeries[0]?.data?.filter(item => item?.y != null && item?.y !== '').length || 0);
        const strokeWidth1 = getDynamicWidth(preservedSeries[1]?.data?.filter(item => item?.y != null && item?.y !== '').length || 0);
        // Apply stroke width
        if (preservedSeries[0]) {
             graphName!="wmqyVolume" ? preservedSeries[0].strokeWidth = strokeWidth : null;
        }
        // Match original behavior
        if (preservedSeries[1] && [5, 6, 10, 11, 12, 13, 14, 15].includes(functionId)) {
           graphName!="wmqyVolume" ? preservedSeries[1].strokeWidth = strokeWidth1 : null;
        }
        // 
        // ==================================
        // SERIES VALUES
        // ==================================
		const seriesMinMax = preservedSeries.map(series => {
		    const values = series?.data?.map(x => x.y).filter(x => x != null && !isNaN(x)) || [];
		    return {
		        min: values.length ? Math.min(...values) : Infinity,
		        max: values.length ? Math.max(...values) : -Infinity
		    };
		});
		const globalMin = Math.min(...seriesMinMax.map(x => x.min));
		const globalMax = Math.max(...seriesMinMax.map(x => x.max));
		        
		// first y-axis series
		const min1 = seriesMinMax[0]?.min ?? Infinity;
		const max1 = seriesMinMax[0]?.max ?? -Infinity;
		
		// second y-axis series
		const min2 = seriesMinMax[1]?.min ?? Infinity;
		const max2 = seriesMinMax[1]?.max ?? -Infinity;
        // ==================================
        // SAME YAXIS
        // ==================================
        if (!Array.isArray(updatedYaxis) || updatedYaxis.length === 1) {
		    const axis = calculatedMarginToMinMax(globalMin, globalMax, 5);
		    if (Array.isArray(updatedYaxis)) {
		        updatedYaxis[0].min = axis.min;
		        updatedYaxis[0].max = axis.max;
		    } else {
		        updatedYaxis.min = axis.min;
		        updatedYaxis.max = axis.max;
		    }
		  }
        // ==================================
        // TWO YAXIS
        // ==================================
        else {
		    let axis1 = calculatedMarginToMinMax(min1, max1, 5);
		    let axis2 = calculatedMarginToMinMax(min2, max2, 5);
		    // ==================================
		    // ORIGINAL CONDITION
		    // functionId 7-9 + barFunctionId
		    // ==================================
		     if (typeof functionId !== 'undefined' && functionId != -1) {
		        // ==================================
		        // ORIGINAL CONDITION
		        // functionId 7-9 + barFunctionId
		        // ==================================
		        if (
		            (functionId >= 7 && functionId < 10) || barFunctionId.includes(functionId)) {
		            // Keep original behavior
		            axis2.min = min2;
		            axis2.max = max2;
		        }
		        // ==================================
		        // OLD ELSE BRANCH LOGIC
		        // Force 0 center (-X / +X)
		        // ==================================
		        else if (![1, 2, 16, 17, 18, 19].includes(functionId)) {
		           	const values = addMarginToMinMax(min2, max2, 5);
			        const selectedValue = Math.max(Math.abs(min2), Math.abs(max2));
			        axis2.min = -(selectedValue + values);
			        axis2.max = selectedValue + values;
		        }
		    }
		 
		    updatedYaxis[0].min = axis1.min;
		    updatedYaxis[0].max = axis1.max;
		    updatedYaxis[1].min = axis2.min;
		    updatedYaxis[1].max = axis2.max;
		}
    }
    updateOptions.yaxis = updatedYaxis;
}
    chart.updateOptions(updateOptions,
    true,
    true);
    document.dispatchEvent(updateEvent);
}

function applyChartSettings(type, clickedElement) {
  const settings = {
    chartType: $("#chartTypes .active")[0]?.id,
    chartColor: $("#chartColor .active")[0]?.id,
    transparency: $("#chartColorTransparency .active")[0]?.id,
    marker: $("#chartMarker .active")[0]?.id,
    grid: $("#gridOptions .active")[0]?.id,
    legend: $("#gridLegend .active")[0]?.id,
    fontSize: $("#fontOptions .active")[0]?.id
  };
  // overwrite ONLY clicked setting
  switch (type) {
    case 'type':
      settings.chartType = clickedElement.id;
      break;
    case 'color':
      settings.chartColor = clickedElement.id;
      break;
    case 'transparency':
      settings.transparency = clickedElement.id;
      break;
    case 'marker':
      settings.marker = clickedElement.id;
      break;
    case 'font':
      settings.fontSize = clickedElement.id;
      break;
    case 'grid':
      settings.grid = clickedElement.id;
      break;
    case 'legend':
      settings.legend = clickedElement.id;
      break;
  }
  
updateChartConfigurationUnified(
    settings.chartType,
    settings.chartType == 'line'
        ? '#ffffff'
        : '#' + settings.chartColor,
    settings.transparency != 1
        ? '0.' + settings.transparency
        : settings.transparency,
    settings.marker?.split("-")?.[1] || 1,
    settings.grid,
    settings.legend,
    settings.fontSize
);
  
  updateChartState();
  }


async function fetchGraphData(graphService, removeEmpty) {
    const config = graphConfig[(graphName==""&& checkedItem==2)?'twoSeries':graphService];
    if (!config) {
        console.error("Unknown graph service:", graphService);
        return null;
    }
    const fromdate = formatDate(monthDate);
    const todate = formatDate(date);
    const Period = getChartPeriod();
    const type = getSelectedType();
   let checkedValues = [];

	if (graphService === 'ecbImpact') {
	
	    checkedValues = [
	        ...checkedItemidLeft.filter(x => x != null),
	        ...checkedItemidRight.filter(x => x != null)
	    ];
	
	} else {
	
	    checkedValues =
	        checkedItemid.filter(x => x != null);
	}
    if (isNaN(functionId)) {
        functionId = -1;
    }
    const dataParam = config.buildParams({
        checkedValues,
        fromdate,
        todate,
        Period,
        type,
        removeEmpty,
        functionId
    });
    try {
        const response = await $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: config.api,
            data: JSON.stringify(dataParam),
            dataType: "json",
            timeout: 600000
        });
        return {
            response,
            checkedValues,
            Period,
            type,
            fromdate,
            todate
        };
    } catch (error) {
        console.error("ERROR:", error);
        return null;
    }
}

async function refreshGraphNavigation() {
    $('#overlayChart').show();
    try {
	
        const result = await fetchGraphData(graphService, removeEmpty);
        if (!result) {
            return;
        }
        // ==================================
		// UPDATE DATE DISPLAY
		// ==================================
	    const fromdate = formatDate(monthDate);
        const todate = formatDate(date);
		$("#dateFrom-mainChart").val(fromdate);
		$("#dateTo-mainChart").val(todate);
        // build ONLY data
        const newSeries = await buildSeries(result.response, result.Period);
        // ==================================
        // GET CURRENT ACTIVE UI VALUES
        // ==================================
         const settings = {
			chartType: $("#chartTypes .active")[0]?.id,
			chartColor: $("#chartColor .active")[0]?.id,
			transparency: $("#chartColorTransparency .active")[0]?.id,
			marker: $("#chartMarker .active")[0]?.id,
			grid: $("#gridOptions .active")[0]?.id,
			legend: $("#gridLegend .active")[0]?.id,
			fontSize: $("#fontOptions .active")[0]?.id
		  };
        // ==================================
        // KEEP CURRENT CONFIG
        // ==================================
		
		updateChartConfigurationUnified(
			settings.chartType,
			settings.chartType == 'line' 
				? '#ffffff'
				: '#' + settings.chartColor,
			settings.transparency != 1
				? '0.' + settings.transparency
				: settings.transparency,
			settings.marker?.split("-")?.[1] || 1,
			settings.grid,
			settings.legend,
			settings.fontSize,
			true,
			newSeries
		);
    } catch (error) {
        console.error('Navigation refresh error:', error);
    } finally {
        $('#overlayChart').hide();
    }
}
async function buildSeries(response, Period) {
    let series = [];
    // ==================================
    // COMPARE GRAPH (dynamic)
    // ==================================
    if (checkedItem >= 3) {
        try {
            const processedResponses = await Promise.all(response.map(async (item) => {
                const result = await processDataAndAddNewEndDateForExtraSpaceInGraph(item.graphResponseDTOLst, 10, false);
                return result.response;
            }));
            series = response.map((item, index) => ({
                name: item.config?.displayDescription ?? '',
                type: 'column',
                data: processedResponses[index]
            }));
        } catch (error) {
            console.error('Error processing data:', error);
        }
    }
    // ==================================
    // DOUBLE GRAPH
    // ==================================
    else if (checkedItem == 2) {
        let chartType1 = getChartType(response[0].config.chartType)[0];
        let chartType2 = getChartType(response[1].config.chartType)[0];
        chartType1 = chartType1 === 'area' ? 'line' : chartType1;
        chartType2 = chartType2 === 'area' ? 'line' : chartType2;
        if (graphName == "ecbImpactLiquidity") {
            response[1].graphResponseDTOLst = updateSeriesValue(response[0].graphResponseDTOLst, response[1].graphResponseDTOLst);
        }
        let data0 = response[0].graphResponseDTOLst;
        try {
            const result = await processDataAndAddNewEndDateForExtraSpaceInGraph(data0, 10, false);
            data0 = result.response;
        } catch (error) {
            console.error('Error processing data:', error);
        }
        series = [{
            name: response[0].config?.displayDescription ?? '',
            type: Period === 'd' ? chartType1 : 'column',
            data: data0
        }, {
            name: response[1].config?.displayDescription ?? '',
            type: Period === 'd' ? chartType2 : 'column',
            data: response[1].graphResponseDTOLst
        }];
    }
    // ==================================
    // FUNCTION GRAPH
    // ==================================
    else if (functionId != -1) {
        let chartType1 = getChartType(response[0].config.chartType)[0];
        let chartType2 = getChartType(response[1].config.chartType)[0];
        chartType1 = chartType1 === 'area' ? 'line' : chartType1;
        chartType2 = chartType2 === 'area' ? 'line' : chartType2;
        let data0 = response[0].graphResponseDTOLst;
        try {
            const result = await processDataAndAddNewEndDateForExtraSpaceInGraph(data0, 10, false);
            data0 = result.response;
        } catch (error) {
            console.error('Error processing data:', error);
        }
        series = [{
            name: response[0].config?.displayDescription ?? '',
            type: Period === 'd' ? chartType1 : 'column',
            data: data0
        }, {
            name: response[1].config?.displayDescription ?? '',
            type: Period === 'd' ? chartType2 : 'column',
            data: response[1].graphResponseDTOLst
        }];
    }
    // ==================================
    // SINGLE GRAPH
    // ==================================
    else {
        let data0 = response[0].graphResponseDTOLst;
        try {
            const result = await processDataAndAddNewEndDateForExtraSpaceInGraph(data0, 10, false);
            data0 = result.response;
        } catch (error) {
            console.error('Error processing data:', error);
        }
        series = [{
            name: response[0].config?.displayDescription ?? '',
            data: data0
        }];
    }
    return series;
}