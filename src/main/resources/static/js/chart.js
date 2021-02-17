function getCountryFlag(seriesName)
{var img;
	if (seriesName.includes("Germany"))
	  img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/germany.png'/>";
	else
		if (seriesName.includes("USA"))
	    img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/united-states.png'/>";
		else
			if (seriesName.includes("France"))
		    img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/france.png'/>";
			else
				if (seriesName.includes("Uk"))
			    img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/united-kingdom.png'/>";
				else
					if (seriesName.includes("Italy"))
				    img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/italy.png'/>";
					else
						if (seriesName.includes("Spain"))
					    img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/spain.png'/>";
						else
						  if (seriesName.includes("FRA-GER"))
						  img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/fra-ger.png'/>";
						else
							if (seriesName.includes("ITA-GER"))
						    img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/ita-ger.png'/>";
							else
								if (seriesName.includes("SPN-GER"))
							    img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/spn-ger.png'/>";
								else
									if (seriesName.includes("UK-GER"))
								    img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/uk-ger.png'/>";
									else
										if (seriesName.includes("USA-GER"))
									    img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/usa-ger.png'/>";
										else
											if (seriesName.includes("USA-UK"))
										    img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/usa-uk.png'/>";
											else
												if (seriesName.includes("ITA-FRA"))
											    img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/ita-fra.png'/>";
												else
													if (seriesName.includes("ITA-SPN"))
												    img= "<img width='18' style='float: left; margin-right: .5rem;' src='/img/flag/ita-spn.png'/>";
	return img;
}

function getMinDate(arrayofdates)
{
  var minDate=new Date(Math.min.apply(null,arrayofdates));
  return minDate;
}

function getChartType(dbChartType)
{
  if(dbChartType!=null && dbChartType!="")
	{
	 if (dbChartType == "Area")
		{
		chartType = 'area';
		curve = 'straight'; 
	    return [chartType,curve];
	    }
	  else
	 if (dbChartType == "Bars")
		{
		chartType = 'column';
		curve = 'straight'; 
	    return [chartType,curve];
	    }
	  else if (dbChartType == "Line")
	   { 
	    chartType = 'line';
	    curve = 'straight'; 
	    return [chartType,curve];
	    }
	  else if(dbChartType == "Line Spline")
		 { 
	    chartType = 'line';
	    curve = 'smooth'; 
	    return [chartType,curve];
	    }
	}
	else
	{
	chartType = 'line';
	curve = 'straight';
	return [chartType,curve];
	}
}