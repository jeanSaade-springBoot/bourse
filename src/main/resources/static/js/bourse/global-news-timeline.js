 // ----- News mapped to bottom timeline (yAxis #2 in [0..1]) -----
  const TIMELINE_Y = 0.05; // how high the dots sit above the bottom
  const rawNews = [
    {
      x: new Date('2025-08-02').getTime(),
      title: 'News 1',
      content: 'the Eurozone BLUECHIP AtoAAA vs 10Y GERMANY CREDIT SPREAD has been increasing for 4 consecutive sessions, from 0.922% to 0.953% '
    },
    {
      x: new Date('2025-08-03').getTime(),
      title: 'News 2',
      content: 'the US JUNKBOND CtoCCC vs HIGHYIELD BtoBBB CREDIT SPREAD closed at 5-month Low  of 5.160%'
    },
    {
      x: new Date('2025-08-05').getTime(),
      title: 'News 3',
      content: 'TREND : the FRA-GER 2 yr Cross has been decreasing for 5 consecutive sessions, from  0.262% to 0.246%.'
    }
  ];
  const newsData = rawNews.map(n => ({ x: n.x, y: TIMELINE_Y, title: n.title, content: n.content }));

  // Optional: draw a thin baseline under the news dots
  const startX = priceData[0].x, endX = priceData[priceData.length - 1].x;
  const timelineBaseline = [
    { x: startX, y: TIMELINE_Y },
    { x: endX,   y: TIMELINE_Y }
  ];
  const newsSeries=  [
      { // thin baseline (optional), also on the timeline axis
        name: 'Timeline',
        type: 'line',
        data: timelineBaseline,
        yAxisIndex: 1
      },
      { // news dots on bottom axis
        name: 'News',
        type: 'scatter',
        data: newsData,
        yAxisIndex: 1
      }
    ];
    
