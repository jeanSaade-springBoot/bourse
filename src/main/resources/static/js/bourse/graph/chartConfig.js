const graphConfig = {
    // ======================================
    //  BOURSE GRAPH
    // ======================================
    twoSeries: {
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
                factor1: itemValue[checkedValues[0]].factor,
                subGroupId1: itemValue[checkedValues[0]].subGroupId,
                groupId1: itemValue[checkedValues[0]].GroupId,
                factor2: itemValue[checkedValues[1]].factor,
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
                factor1: itemValue[checkedValues[0]].factor,
                subGroupId1: itemValue[checkedValues[0]].subGroupId,
                groupId1: itemValue[checkedValues[0]].GroupId,
                factor2: itemValue[checkedValues[1]].factor,
                subGroupId2: itemValue[checkedValues[1]].subGroupId,
                groupId2: itemValue[checkedValues[1]].GroupId,
                removeEmpty1: removeEmpty,
                removeEmpty2: removeEmpty
            };
        }
    },
    macro: {
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
                factor1: itemValue[checkedValues[0]].factor,
                subGroupId1: itemValue[checkedValues[0]].subGroupId,
                groupId1: itemValue[checkedValues[0]].GroupId,
                factor2: itemValue[checkedValues[1]].factor,
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
                    factor1: itemValue[checkedValues[0]].factor,
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
                factor1: itemValue[checkedValues[0]].factor,
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
        api: graphName == "wmqyVolume" ? '/volume/getgraphdatabytypesum' : "/volume/getgraphdatabytype",
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
            if (graphName == "wmqyVolume") {
                if (checkedItem == 3) return {
                    fromdate,
                    todate,
                    period: getChartPeriodVolume(),
                    type: '5',
                    subGroupId1: itemValue[checkedValues[0]].subGroupId,
                    groupId1: itemValue[checkedValues[0]].GroupId,
                    subGroupId2: itemValue[checkedValues[1]].subGroupId,
                    groupId2: itemValue[checkedValues[1]].GroupId,
                    subGroupId3: itemValue[checkedValues[2]].subGroupId,
                    groupId3: itemValue[checkedValues[2]].GroupId,
                };
                if (checkedItem == 2) return {
                    fromdate,
                    todate,
                    period: getChartPeriodVolume(),
                    type: '5',
                    subGroupId1: itemValue[checkedValues[0]].subGroupId,
                    groupId1: itemValue[checkedValues[0]].GroupId,
                    subGroupId2: itemValue[checkedValues[1]].subGroupId,
                    groupId2: itemValue[checkedValues[1]].GroupId,
                    removeEmpty1: removeEmpty,
                    removeEmpty2: removeEmpty
                };
                return {
                    fromdate,
                    todate,
                    period: getChartPeriodVolume(),
                    type: '5',
                    subGroupId1: itemValue[checkedValues[0]].subGroupId,
                    groupId1: itemValue[checkedValues[0]].GroupId,
                    isFunctionGraph: false,
                    functionId: functionId,
                    removeEmpty1: removeEmpty
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
        api: graphName == 'any2' ? "/bourse/getgraphdata" : "/bourse/getgraphdatabytype",
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
    // Keep the shared 1 Scale / 2 Scales UI synchronized on every chart update.
    syncUnifiedScaleManagementVisibility();
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
    if (!$("#chartColor .active").length && SelectedchartType != 'line') {
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
    let updatedYaxis = JSON.parse(JSON.stringify(chart.w.config.yaxis));
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
                /*
                 * Keep the existing data-refresh behavior exactly as before.
                 */
                preservedSeries[index].data = series.data;
                // force type for first series
                if (index === 0) {
                    preservedSeries[index].type = SelectedchartType;
                }
                /*
                 * FUNCTION COLUMN WIDTH FIX ONLY
                 *
                 * buildSeries() already recalculates strokeWidth from the number
                 * of real function observations in the newly fetched range.
                 *
                 * Previously that refreshed width was not copied into the
                 * rendered second/function series, so Weekly Increment Change
                 * columns could remain too thin after navigation.
                 *
                 * Do not change alignment, dates, values, type, or any function
                 * calculation here. Only update the dynamic column width.
                 */
                if (index === 1 && series.strokeWidth !== null && series.strokeWidth !== undefined) {
                    preservedSeries[index].strokeWidth = series.strokeWidth;
                }
            }
        });
        updateOptions.series = preservedSeries;
        // ==================================
        // YAXIS MIN/MAX
        // ==================================
        // SINGLE SERIES
        if (preservedSeries.length === 1) {
            /*
             * US BANKS RESERVE NAVIGATION FIX
             *
             * Include AMPLE and ABUNDANT in the refreshed single-series
             * Y-axis range whenever US Banks Reserve is selected.
             * The annotation switches still control visibility only.
             */
            let values = preservedSeries[0]?.data?.map(x => x.y).filter(x => x != null && x !== "" && !isNaN(x)).map(Number) || [];
            const activeCheckedItems = Array.isArray(checkedItemid) ? checkedItemid.filter(x => x != null) : [];
            if (activeCheckedItems[0] && typeof isUsBanksReserveSelected === "function" && isUsBanksReserveSelected([activeCheckedItems[0]]) && typeof getUsBanksReserveThresholdValues === "function") {
                values = values.concat(getUsBanksReserveThresholdValues());
            }
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
            // FIX: Recalculate width for every series after navigation.
            // Previously series 2 was updated only for selected function IDs, so a column could
            // keep a large width calculated for the shorter initial range and overlap on long ranges.
            if (preservedSeries[0] && graphName != "wmqyVolume") {
                preservedSeries[0].strokeWidth = strokeWidth;
            }
            if (preservedSeries[1] && graphName != "wmqyVolume") {
                preservedSeries[1].strokeWidth = strokeWidth1;
            }
            if (graphName == "ecbImpactLiquidity") {
                preservedSeries[1].strokeWidth = getDynamicWidth(preservedSeries[1]?.data?.filter(item => item?.y != null && item?.y !== '').length || 0) / 3;
            }
            // 
            // ==================================
            // SERIES VALUES
            // ==================================
            const activeCheckedItems = Array.isArray(checkedItemid) ? checkedItemid.filter(x => x != null) : [];
            const seriesMinMax = preservedSeries.map((series, index) => {
                let values = series?.data?.map(x => x.y).filter(x => x != null && x !== "" && !isNaN(x)).map(Number) || [];
                /*
                 * Include ABUNDANT / AMPLE in the Y-axis range only
                 * for the series representing US Banks Reserve.
                 */
                if (activeCheckedItems[index] && typeof isUsBanksReserveSelected === "function" && isUsBanksReserveSelected(
                        [activeCheckedItems[index]]) && typeof getUsBanksReserveThresholdValues === "function") {
                    values = values.concat(getUsBanksReserveThresholdValues());
                }
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
            // 1 SCALE / 2 SCALES
            // ==================================
            //
            // When exactly two items are selected, use the same global
            // isOneScale state already used by Any2.
            //
            if (preservedSeries.length === 2 && checkedItem == 2) {
                const useOneScale = isUnifiedOneScaleMode();
                const currentYAxisArray = Array.isArray(chart.w.config.yaxis) ? chart.w.config.yaxis : [chart.w.config.yaxis];
                const formatter1 = currentYAxisArray[0]?.labels?.formatter;
                const formatter2 = currentYAxisArray[1]?.labels?.formatter || formatter1;
                if (useOneScale) {
                    const axis = calculatedMarginToMinMax(globalMin, globalMax, 5);
                    /*
                     * ONE SCALE:
                     * Both selected series share one Y-axis.
                     */
                    updatedYaxis = [{
                        ...(currentYAxisArray[0] || {}),
                        opposite: false,
                        min: axis.min,
                        max: axis.max,
                        labels: {
                            ...(currentYAxisArray[0]?.labels || {}),
                            formatter: formatter1,
                            style: {
                                ...(currentYAxisArray[0]?.labels?.style || {}),
                                fontSize: selectedFontSize
                            }
                        }
                    }];
                } else {
                    let axis1 = calculatedMarginToMinMax(min1, max1, 5);
                    let axis2 = calculatedMarginToMinMax(min2, max2, 5);
                    /*
                     * Preserve existing function-specific rules.
                     */
                    if (typeof functionId !== 'undefined' && functionId != -1) {
                        if (
                            (functionId >= 7 && functionId < 9) || barFunctionId.includes(functionId)) {
                            axis2.min = min2;
                            axis2.max = max2;
                        } else if (![1, 2, 16, 17, 18, 19].includes(functionId)) {
                            const values = addMarginToMinMax(min2, max2, 5);
                            const selectedValue = Math.max(Math.abs(min2), Math.abs(max2));
                            axis2.min = -(selectedValue + values);
                            axis2.max = selectedValue + values;
                        }
                    }
                    /*
                     * TWO SCALES:
                     * First series  -> left Y-axis
                     * Second series -> right Y-axis
                     */
                    updatedYaxis = [{
                        ...(currentYAxisArray[0] || {}),
                        opposite: false,
                        min: axis1.min,
                        max: axis1.max,
                        labels: {
                            ...(currentYAxisArray[0]?.labels || {}),
                            formatter: formatter1,
                            style: {
                                ...(currentYAxisArray[0]?.labels?.style || {}),
                                fontSize: selectedFontSize
                            }
                        }
                    }, {
                        ...(currentYAxisArray[1] || currentYAxisArray[0] || {}),
                        opposite: true,
                        min: axis2.min,
                        max: axis2.max,
                        labels: {
                            ...(currentYAxisArray[1]?.labels || currentYAxisArray[0]?.labels || {}),
                            formatter: formatter2,
                            style: {
                                ...(currentYAxisArray[1]?.labels?.style || currentYAxisArray[0]?.labels?.style || {}),
                                fontSize: selectedFontSize,
                                fontWeight: 600
                            }
                        }
                    }];
                }
            } else {
                /*
                 * ORIGINAL behavior for all charts that are not an
                 * exactly-two-item comparison.
                 */
                if (!Array.isArray(updatedYaxis) || updatedYaxis.length === 1) {
                    const axis = calculatedMarginToMinMax(globalMin, globalMax, 5);
                    if (Array.isArray(updatedYaxis)) {
                        updatedYaxis[0].min = axis.min;
                        updatedYaxis[0].max = axis.max;
                    } else {
                        updatedYaxis.min = axis.min;
                        updatedYaxis.max = axis.max;
                    }
                } else {
                    let axis1 = calculatedMarginToMinMax(min1, max1, 5);
                    let axis2 = calculatedMarginToMinMax(min2, max2, 5);
                    if (typeof functionId !== 'undefined' && functionId != -1) {
                        if (
                            (functionId >= 7 && functionId < 9) || barFunctionId.includes(functionId)) {
                            axis2.min = min2;
                            axis2.max = max2;
                        } else if (![1, 2, 16, 17, 18, 19].includes(functionId)) {
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
        }
        updateOptions.yaxis = updatedYaxis;
    }
    /*
     * Return the ApexCharts update promise.
     *
     * Existing callers can ignore the return value as before.
     * Navigation can await it so annotations are re-applied only
     * after the refreshed series and Y-axis are fully rendered.
     */
    const chartUpdatePromise = chart.updateOptions(updateOptions, true, true);
    document.dispatchEvent(updateEvent);
    return chartUpdatePromise;
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
    updateChartConfigurationUnified(settings.chartType, settings.chartType == 'line' ? '#ffffff' : '#' + settings.chartColor, settings.transparency != 1 ? '0.' + settings.transparency : settings.transparency, settings.marker?.split("-")?.[1] || 1, settings.grid, settings.legend, settings.fontSize);
    updateChartState();
}
async function fetchGraphData(graphService, removeEmpty) {
    const config = graphConfig[(graphName == "" && checkedItem == 2) ? 'twoSeries' : graphService];
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
        checkedValues = [...checkedItemidLeft.filter(x => x != null), ...checkedItemidRight.filter(x => x != null)];
    } else {
        checkedValues = checkedItemid.filter(x => x != null);
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
/*
 * ============================================================
 * GLOBAL 1 SCALE / 2 SCALES SUPPORT
 * ============================================================
 *
 * Any2 already uses the global isOneScale state and the shared
 * #scaleManagement control.
 *
 * These helpers extend the same behavior to every chart that has
 * exactly two selected items while preserving all unrelated chart
 * functionality.
 */
function isUnifiedOneScaleMode() {
    /*
     * The visible active scale button is the source of truth whenever the
     * new global scale control exists on the page. This prevents an older
     * isOneScale default from overriding the HTML selection during initial
     * page load.
     */
    const $activeButton = $("#scaleManagement .seg-btn.active");
    if ($activeButton.length) {
        return String($activeButton.data("value") || "").toLowerCase() === "1scale";
    }
    /*
     * Fallback for pages that do not render the new segmented scale control.
     */
    return (typeof isOneScale === "undefined") ? true : !!isOneScale;
}
/*
 * Change only the Y-axis when the user switches 1-SCALE / 2-SCALES.
 *
 * IMPORTANT:
 * The currently rendered series already contain the artificial future-date
 * padding used to create the empty space on the right side of the chart.
 * A scale toggle must not fetch/rebuild/replace those series, otherwise that
 * visual padding can be lost. Therefore this function reads the existing
 * rendered series and updates ONLY the Y-axis configuration.
 */
function applyUnifiedScaleOnly() {
    if (!chart?.w?.config || checkedItem != 2) {
        return Promise.resolve();
    }
    const currentSeries = chart.w.config.series || [];
    if (currentSeries.length !== 2) {
        return Promise.resolve();
    }
    const activeCheckedItems = Array.isArray(checkedItemid) ? checkedItemid.filter(x => x != null) : [];
    const seriesMinMax = currentSeries.map(function(series, index) {
        let values = (series?.data || []).map(function(point) {
            if (point && typeof point === 'object' && !Array.isArray(point)) {
                return point.y;
            }
            return null;
        }).filter(function(value) {
            return value !== null && value !== undefined && value !== '' && !isNaN(value);
        }).map(Number);
        /* Preserve the existing US Banks Reserve threshold range rule. */
        if (activeCheckedItems[index] && typeof isUsBanksReserveSelected === "function" && isUsBanksReserveSelected([activeCheckedItems[index]]) && typeof getUsBanksReserveThresholdValues === "function") {
            values = values.concat(getUsBanksReserveThresholdValues());
        }
        return {
            min: values.length ? Math.min.apply(null, values) : Infinity,
            max: values.length ? Math.max.apply(null, values) : -Infinity
        };
    });
    const min1 = seriesMinMax[0].min;
    const max1 = seriesMinMax[0].max;
    const min2 = seriesMinMax[1].min;
    const max2 = seriesMinMax[1].max;
    if (![min1, max1, min2, max2].every(Number.isFinite)) {
        return Promise.resolve();
    }
    const globalMin = Math.min(min1, min2);
    const globalMax = Math.max(max1, max2);
    const currentYAxisArray = Array.isArray(chart.w.config.yaxis) ? chart.w.config.yaxis : [chart.w.config.yaxis];
    const formatter1 = currentYAxisArray[0]?.labels?.formatter;
    const formatter2 = currentYAxisArray[1]?.labels?.formatter || formatter1;
    const selectedFontSize = $("#fontOptions .active")[0]?.id || fontsize || '12px';
    let updatedYaxis;
    if (isUnifiedOneScaleMode()) {
        const axis = calculatedMarginToMinMax(globalMin, globalMax, 5);
        updatedYaxis = [{
            ...(currentYAxisArray[0] || {}),
            opposite: false,
            min: axis.min,
            max: axis.max,
            labels: {
                ...(currentYAxisArray[0]?.labels || {}),
                formatter: formatter1,
                style: {
                    ...(currentYAxisArray[0]?.labels?.style || {}),
                    fontSize: selectedFontSize
                }
            }
        }];
    } else {
        let axis1 = calculatedMarginToMinMax(min1, max1, 5);
        let axis2 = calculatedMarginToMinMax(min2, max2, 5);
        /* Preserve existing function-specific second-axis rules. */
        const barFunctionId = [
            53, 54, 55, 56, 57, 58, 59, 60, 61, 62,
            63, 64, 65, 66, 67, 68, 69, 70, 71, 72,
            73, 74, 75
        ];
        if (typeof functionId !== 'undefined' && functionId != -1) {
            if ((functionId >= 7 && functionId < 9) || barFunctionId.includes(functionId)) {
                axis2.min = min2;
                axis2.max = max2;
            } else if (![1, 2, 16, 17, 18, 19].includes(functionId)) {
                const margin = addMarginToMinMax(min2, max2, 5);
                const selectedValue = Math.max(Math.abs(min2), Math.abs(max2));
                axis2.min = -(selectedValue + margin);
                axis2.max = selectedValue + margin;
            }
        }
        updatedYaxis = [{
            ...(currentYAxisArray[0] || {}),
            opposite: false,
            min: axis1.min,
            max: axis1.max,
            labels: {
                ...(currentYAxisArray[0]?.labels || {}),
                formatter: formatter1,
                style: {
                    ...(currentYAxisArray[0]?.labels?.style || {}),
                    fontSize: selectedFontSize
                }
            }
        }, {
            ...(currentYAxisArray[1] || currentYAxisArray[0] || {}),
            opposite: true,
            min: axis2.min,
            max: axis2.max,
            labels: {
                ...(currentYAxisArray[1]?.labels || currentYAxisArray[0]?.labels || {}),
                formatter: formatter2,
                style: {
                    ...(currentYAxisArray[1]?.labels?.style || currentYAxisArray[0]?.labels?.style || {}),
                    fontSize: selectedFontSize,
                    fontWeight: 600
                }
            }
        }];
    }
    /*
     * Deliberately update ONLY yaxis.
     * Do not pass series or xaxis here: they contain the existing right-side
     * future-date padding and must remain exactly as rendered.
     */
    return chart.updateOptions({
        yaxis: updatedYaxis
    });
}

function setUnifiedOneScaleMode(useOneScale) {
    /*
     * Reuse the existing global isOneScale flag when the page already
     * defines it (for example Any2). If it does not exist yet, create
     * the same global state so all other chart pages can use the shared
     * 1 Scale / 2 Scales implementation too.
     */
    try {
        isOneScale = !!useOneScale;
    } catch (error) {
        window.isOneScale = !!useOneScale;
    }
}

function syncUnifiedScaleButtons() {
    const $scaleManagement = $("#scaleManagement");
    if ($scaleManagement.length === 0) {
        return;
    }
    const selectedValue = isUnifiedOneScaleMode() ? "1scale" : "2scale";
    $scaleManagement.find(".seg-btn").removeClass("active").attr("aria-pressed", "false");
    $scaleManagement.find(`.seg-btn[data-value="${selectedValue}"]`).addClass("active").attr("aria-pressed", "true");
}

function syncUnifiedScaleManagementVisibility() {
    const $scaleManagement = $("#scaleManagement");
    if ($scaleManagement.length === 0) {
        return;
    }
    if (checkedItem == 2) {
        $scaleManagement.removeClass("d-none").addClass("d-flex");
        syncUnifiedScaleButtons();
    } else {
        $scaleManagement.removeClass("d-flex").addClass("d-none");
    }
}
/*
 * globalChartScaleOption() is defined in the shared chartOptions.js so the
 * same scale control works on pages that do not load chartConfig.js.
 */
function bindUnifiedScaleManagement() {
    /*
     * Delegated fallback for pages that use data-value buttons without an
     * inline onclick. If the page explicitly calls globalChartScaleOption()
     * in onclick, do not process the same click a second time here.
     */
    $(document).off("click.unifiedScaleManagement", "#scaleManagement .seg-btn").on("click.unifiedScaleManagement", "#scaleManagement .seg-btn", function(event) {
        event.preventDefault();
        const inlineHandler = String($(this).attr("onclick") || "");
        if (inlineHandler.indexOf("globalChartScaleOption") !== -1) {
            return;
        }
        const selectedScale = String($(this).data("value") || "").toLowerCase();
        globalChartScaleOption(selectedScale);
    });
}
$(function() {
    bindUnifiedScaleManagement();
    syncUnifiedScaleManagementVisibility();
});
/*
 * ============================================================
 * ECB LIQUIDITY + ECB BALANCE SHEET NAVIGATION HELPERS
 * ============================================================
 *
 * These helpers are intentionally scoped to the mixed-frequency
 * ECB comparison used during Previous / Forward navigation.
 * All unrelated chart behavior continues to use the existing
 * shared functions unchanged.
 */
function getEcbLiquidityComparisonIdsForNavigation() {
    return ["#jqxCheckBoxExcess1", "#jqxCheckBoxExcess2", "#jqxCheckBoxExcess3", "#jqxCheckBoxExcess4", "#jqxCheckBoxExcess1Excess2Excess3Excess4"];
}

function isEcbLiquidityBalanceSheetNavigationComparison(checkedValues) {
    if (!Array.isArray(checkedValues)) {
        return false;
    }
    const ecbLiquidityIds = getEcbLiquidityComparisonIdsForNavigation();
    const hasEcbBalanceSheet = checkedValues.includes("#jqxCheckBoxEcb_balance_sheet");
    const hasEcbLiquidity = checkedValues.some(function(id) {
        return ecbLiquidityIds.includes(id);
    });
    return hasEcbBalanceSheet && hasEcbLiquidity;
}

function parseNavigationChartDateToTimestamp(value) {
    if (typeof value === "number") {
        return value;
    }
    if (!value) {
        return value;
    }
    const parts = String(value).split("-");
    if (parts.length !== 3) {
        const fallback = new Date(value);
        return isNaN(fallback.getTime()) ? value : fallback.getTime();
    }
    const months = {
        Jan: 0,
        Feb: 1,
        Mar: 2,
        Apr: 3,
        May: 4,
        Jun: 5,
        Jul: 6,
        Aug: 7,
        Sep: 8,
        Oct: 9,
        Nov: 10,
        Dec: 11
    };
    const day = parseInt(parts[0], 10);
    const month = months[parts[1]];
    const shortYear = parseInt(parts[2], 10);
    if (isNaN(day) || month === undefined || isNaN(shortYear)) {
        return value;
    }
    return Date.UTC(2000 + shortYear, month, day);
}

function convertNavigationSeriesDatesToTimestamp(data) {
    if (!Array.isArray(data)) {
        return data;
    }
    return data.map(function(item) {
        return {
            ...item,
            x: parseNavigationChartDateToTimestamp(item.x)
        };
    });
}

function isWeekendNavigationChartDate(value) {
    const timestamp = parseNavigationChartDateToTimestamp(value);
    if (typeof timestamp !== "number" || Number.isNaN(timestamp)) {
        return false;
    }
    const dayOfWeek = new Date(timestamp).getUTCDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
}
/*
 * Preserve the normal right-side spacing, but for this ECB mixed
 * comparison add business days only so Saturday/Sunday are not
 * introduced as artificial empty observations.
 */
function processNavigationBusinessDaysForExtraSpace(data, percentageMargin = 10, isCandlestick = false) {
    return new Promise((resolve, reject) => {
        try {
            if (!Array.isArray(data) || data.length === 0) {
                return resolve({
                    response: data
                });
            }
            const result = [...data];
            const extraCount = Math.round(result.length * (percentageMargin / 100));
            if (extraCount <= 0) {
                return resolve({
                    response: result
                });
            }
            const last = result[result.length - 1];
            if (!last || last.x === null || last.x === undefined || last.x === "") {
                return resolve({
                    response: result
                });
            }
            const lastTimestamp = parseNavigationChartDateToTimestamp(last.x);
            if (typeof lastTimestamp !== "number" || Number.isNaN(lastTimestamp)) {
                return resolve({
                    response: result
                });
            }
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            let added = 0;
            let dayOffset = 1;
            while (added < extraCount) {
                const futureDate = new Date(lastTimestamp);
                futureDate.setUTCDate(futureDate.getUTCDate() + dayOffset);
                dayOffset++;
                const dayOfWeek = futureDate.getUTCDay();
                if (dayOfWeek === 0 || dayOfWeek === 6) {
                    continue;
                }
                const day = String(futureDate.getUTCDate()).padStart(2, "0");
                const month = months[futureDate.getUTCMonth()];
                const year = String(futureDate.getUTCFullYear()).slice(-2);
                result.push({
                    x: `${day}-${month}-${year}`,
                    y: isCandlestick ? [] : null
                });
                added++;
            }
            resolve({
                response: result
            });
        } catch (error) {
            reject(error);
        }
    });
}
async function refreshGraphNavigation() {
    $('#overlayChart').show();
    /*
     * Same behavior as Any2:
     * show the scale selector only when exactly two items exist.
     */
    syncUnifiedScaleManagementVisibility();
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
        /*
         * Build only the refreshed data.
         *
         * Passing checkedValues lets buildSeries() identify the
         * ECB Liquidity + ECB Balance Sheet comparison without
         * changing any other navigation behavior.
         */
        /*
         * Ensure US Banks Reserve thresholds are available before
         * navigation recalculates the Y-axis range.
         */
        if (typeof loadUsBanksReserveThresholds === "function") {
            await loadUsBanksReserveThresholds(result.checkedValues);
        }
        const newSeries = await buildSeries(result.response, result.Period, result.checkedValues);
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
        /*
         * Wait until ApexCharts has finished replacing the refreshed
         * series and Y-axis. This avoids an annotation update being
         * overwritten by the main chart refresh.
         */
        await updateChartConfigurationUnified(settings.chartType, settings.chartType == 'line' ? '#ffffff' : '#' + settings.chartColor, settings.transparency != 1 ? '0.' + settings.transparency : settings.transparency, settings.marker?.split("-")?.[1] || 1, settings.grid, settings.legend, settings.fontSize, true, newSeries);
        /*
         * US BANKS RESERVE NAVIGATION FIX
         *
         * Re-apply AMPLE / ABUNDANT only after the refreshed chart
         * has completed rendering.
         */
        if (typeof isUsBanksReserveSelected === "function" && isUsBanksReserveSelected(result.checkedValues) && typeof applyUsBanksReserveThresholdAnnotations === "function") {
            applyUsBanksReserveThresholdAnnotations();
        }
    } catch (error) {
        console.error('Navigation refresh error:', error);
    } finally {
        $('#overlayChart').hide();
    }
}
async function buildSeries(response, Period, checkedValues = null) {
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
        let data1 = response[0].graphResponseDTOLst;
        let data2 = response[1].graphResponseDTOLst;
        /*
         * Use explicitly supplied navigation values when available.
         * The fallback keeps compatibility with any existing direct
         * call to buildSeries(response, Period).
         */
        const navigationCheckedValues = Array.isArray(checkedValues) ? checkedValues : (Array.isArray(checkedItemid) ? checkedItemid.filter(x => x != null) : []);
        const isEcbMixedFrequencyComparison = isEcbLiquidityBalanceSheetNavigationComparison(navigationCheckedValues);
        /*
         * =====================================================
         * ECB LIQUIDITY + ECB BALANCE SHEET ONLY
         * =====================================================
         *
         * This branch mirrors the initial mixed-frequency chart
         * treatment when the user navigates Previous / Forward.
         *
         * It does NOT alter the generic double-chart path below.
         */
        if (isEcbMixedFrequencyComparison) {
            try {
                // 1. Align the original daily + weekly dates.
                const aligned = alignMergeDataSets(data1, data2);
                data1 = aligned.data1;
                data2 = aligned.data2;
                /*
                 * Identify the selected series by checkbox ID so
                 * the code remains correct even if the user checks
                 * ECB Balance Sheet first.
                 */
                const ecbLiquidityIds = getEcbLiquidityComparisonIdsForNavigation();
                const balanceSheetIndex = navigationCheckedValues.indexOf("#jqxCheckBoxEcb_balance_sheet");
                const liquidityIndex = navigationCheckedValues.findIndex(function(id) {
                    return ecbLiquidityIds.includes(id);
                });
                let mixedData = [
                    data1,
                    data2
                ];
                /*
                 * 2. Remove only weekend NULL placeholders from
                 *    the DAILY ECB Liquidity series.
                 *
                 * Genuine weekday null observations remain intact.
                 */
                if (liquidityIndex >= 0 && Array.isArray(mixedData[liquidityIndex])) {
                    mixedData[liquidityIndex] = mixedData[liquidityIndex].filter(function(item) {
                        const isNullValue = item.y === null || item.y === undefined || item.y === "";
                        return !(isNullValue && isWeekendNavigationChartDate(item.x));
                    });
                }
                /*
                 * 3. Remove generated null placeholders from the
                 *    sparse WEEKLY ECB Balance Sheet series.
                 *
                 * This lets ApexCharts connect the genuine weekly
                 * observations as a continuous line.
                 */
                if (balanceSheetIndex >= 0 && Array.isArray(mixedData[balanceSheetIndex])) {
                    mixedData[balanceSheetIndex] = mixedData[balanceSheetIndex].filter(function(item) {
                        return (item.y !== null && item.y !== undefined && item.y !== "");
                    });
                }
                /*
                 * 4. Preserve right-side spacing on the daily ECB
                 *    Liquidity series, but add BUSINESS DAYS only.
                 *
                 * Do not run alignMergeDataSets() again after this:
                 * doing so would recreate null placeholders in the
                 * weekly Balance Sheet line.
                 */
                if (liquidityIndex >= 0 && Array.isArray(mixedData[liquidityIndex])) {
                    const padded = await processNavigationBusinessDaysForExtraSpace(mixedData[liquidityIndex], 10, false);
                    mixedData[liquidityIndex] = padded.response;
                }
                /*
                 * 5. Force true datetime positioning for both
                 *    series so the weekly Balance Sheet points stay
                 *    on their real calendar dates.
                 */
                mixedData = mixedData.map(function(data) {
                    return convertNavigationSeriesDatesToTimestamp(data);
                });
                /*
                 * Keep the original response/selection order.
                 * This preserves colors, legends, tooltips and
                 * existing series-specific chart settings.
                 */
                data1 = mixedData[0];
                data2 = mixedData[1];
            } catch (error) {
                console.error('Error processing ECB Liquidity / Balance Sheet navigation data:', error);
            }
        }
        /*
         * =====================================================
         * ORIGINAL DOUBLE-GRAPH BEHAVIOR
         * =====================================================
         *
         * Every non-ECB mixed-frequency comparison continues to
         * use the exact existing navigation logic.
         */
        else {
            try {
                const aligned = alignMergeDataSets(data1, data2);
                data1 = aligned.data1;
                data2 = aligned.data2;
                const result = await processDataAndAddNewEndDateForExtraSpaceInGraph(data1, 10, false);
                data1 = result.response;
                const paddedAligned = alignMergeDataSets(data1, data2);
                data1 = paddedAligned.data1;
                data2 = paddedAligned.data2;
            } catch (error) {
                console.error('Error aligning comparison chart data:', error);
            }
        }
        series = [{
            name: response[0].config?.displayDescription ?? '',
            type: Period === 'd' ? chartType1 : 'column',
            data: data1
        }, {
            name: response[1].config?.displayDescription ?? '',
            type: Period === 'd' ? chartType2 : 'column',
            data: data2
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
            let {
                data1: alignedData1,
                data2: alignedData2
            } = alignMergeDataSets(response[0].graphResponseDTOLst, response[1].graphResponseDTOLst);
            /*
             * Preserve the existing function-graph behavior.
             */
            response[1].graphResponseDTOLst = alignedData2;
        } catch (error) {
            console.error('Error processing data:', error);
        }
        const strokeWidth = getDynamicWidth(response[0].graphResponseDTOLst?.filter(item => item?.y != null && item?.y !== '').length || 0);
        const strokeWidth1 = getDynamicWidth(response[1].graphResponseDTOLst?.filter(item => item?.y != null && item?.y !== '').length || 0);
        series = [{
            name: response[0].config?.displayDescription ?? '',
            type: Period === 'd' ? chartType1 : 'column',
            data: data0,
            strokeWidth: strokeWidth
        }, {
            name: response[1].config?.displayDescription ?? '',
            type: Period === 'd' ? chartType2 : 'column',
            data: response[1].graphResponseDTOLst,
            strokeWidth: strokeWidth1
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