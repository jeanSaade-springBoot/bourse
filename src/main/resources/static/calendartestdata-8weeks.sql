insert into bourse.calendar_dates(date, daydesc, isvacation, vacationdate, vacationdesc, weeknbr,id
)
select tab.*
from (select '01-01-2021' as dat
      ,'Wednesday'  as descdat
	  ,'false'      as isvacation
	  ,'2020-01-01' as vacationdate
	  ,''           as vacationdesc
	  ,'1'          as weeknbr
	  ,1            as id
 from dual union
select '02-01-2021', 'Wednesday', 'false', '2020-01-01', '', '1' ,2 from dual union
select '03-01-2021', 'Wednesday', 'false', '2020-01-01', '', '1' ,3 from dual union
select '04-01-2021', 'Wednesday', 'false', '2020-01-01', '', '2' ,4 from dual union
select '05-01-2021', 'Wednesday', 'false', '2020-01-01', '', '2' ,5 from dual union
select '06-01-2021', 'Wednesday', 'false', '2020-01-01', '', '2' ,6 from dual union
select '07-01-2021', 'Wednesday', 'false', '2020-01-01', '', '2' ,7 from dual union
select '08-01-2021', 'Wednesday', 'false', '2020-01-01', '', '2' ,8 from dual union
select '09-01-2021', 'Wednesday', 'false', '2020-01-01', '', '2' ,9 from dual union
select '10-01-2021', 'Wednesday', 'false', '2020-01-01', '', '2' ,10 from dual union
select '11-01-2021', 'Wednesday', 'false', '2020-01-01', '', '2' ,11 from dual union
select '12-01-2021', 'Wednesday', 'false', '2020-01-01', '', '3' ,12 from dual union
select '13-01-2021', 'Wednesday', 'false', '2020-01-01', '', '3' ,13 from dual union
select '14-01-2021', 'Wednesday', 'false', '2020-01-01', '', '3' ,14 from dual union
select '15-01-2021', 'Wednesday', 'false', '2020-01-01', '', '3' ,15 from dual union
select '16-01-2021', 'Wednesday', 'false', '2020-01-01', '', '3' ,16 from dual union
select '17-01-2021', 'Wednesday', 'false', '2020-01-01', '', '3' ,17 from dual union
select '18-01-2021', 'Wednesday', 'false', '2020-01-01', '', '3' ,18 from dual union
select '19-01-2021', 'Wednesday', 'false', '2020-01-01', '', '4' ,19 from dual union
select '20-01-2021', 'Wednesday', 'false', '2020-01-01', '', '4' ,20 from dual union
select '21-01-2021', 'Wednesday', 'false', '2020-01-01', '', '4' ,21 from dual union
select '22-01-2021', 'Wednesday', 'false', '2020-01-01', '', '4' ,22 from dual union
select '23-01-2021', 'Wednesday', 'false', '2020-01-01', '', '4' ,23 from dual union
select '24-01-2021', 'Wednesday', 'false', '2020-01-01', '', '4' ,24 from dual union
select '25-01-2021', 'Wednesday', 'false', '2020-01-01', '', '4' ,25 from dual union
select '26-01-2021', 'Wednesday', 'false', '2020-01-01', '', '4' ,26 from dual union
select '27-01-2021', 'Wednesday', 'false', '2020-01-01', '', '5' ,27 from dual union
select '28-01-2021', 'Wednesday', 'false', '2020-01-01', '', '5' ,28 from dual union
select '29-01-2021', 'Wednesday', 'false', '2020-01-01', '', '5' ,29 from dual union
select '30-01-2021', 'Wednesday', 'false', '2020-01-01', '', '5' ,30 from dual union
select '01-12-2020', 'Wednesday', 'false', '2020-01-01', '', '48',31 from dual union
select '02-12-2020', 'Wednesday', 'false', '2020-01-01', '', '48',32 from dual union
select '03-12-2020', 'Wednesday', 'false', '2020-01-01', '', '48',33 from dual union
select '04-12-2020', 'Wednesday', 'false', '2020-01-01', '', '49',34 from dual union
select '05-12-2020', 'Wednesday', 'false', '2020-01-01', '', '49',35 from dual union
select '06-12-2020', 'Wednesday', 'false', '2020-01-01', '', '49',36 from dual union
select '07-12-2020', 'Wednesday', 'false', '2020-01-01', '', '49',37 from dual union
select '08-12-2020', 'Wednesday', 'false', '2020-01-01', '', '49',38 from dual union
select '09-12-2020', 'Wednesday', 'false', '2020-01-01', '', '49',39 from dual union
select '10-12-2020', 'Wednesday', 'false', '2020-01-01', '', '49',40 from dual union
select '11-12-2020', 'Wednesday', 'false', '2020-01-01', '', '49',41 from dual union
select '12-12-2020', 'Wednesday', 'false', '2020-01-01', '', '50',42 from dual union
select '13-12-2020', 'Wednesday', 'false', '2020-01-01', '', '50',43 from dual union
select '14-12-2020', 'Wednesday', 'false', '2020-01-01', '', '50',44 from dual union
select '15-12-2020', 'Wednesday', 'false', '2020-01-01', '', '50',45 from dual union
select '16-12-2020', 'Wednesday', 'false', '2020-01-01', '', '50',46 from dual union
select '17-12-2020', 'Wednesday', 'false', '2020-01-01', '', '50',47 from dual union
select '18-12-2020', 'Wednesday', 'false', '2020-01-01', '', '50',48 from dual union
select '19-12-2020', 'Wednesday', 'false', '2020-01-01', '', '51',49 from dual union
select '20-12-2020', 'Wednesday', 'false', '2020-01-01', '', '51',50 from dual union
select '21-12-2020', 'Wednesday', 'false', '2020-01-01', '', '51',51 from dual union
select '22-12-2020', 'Wednesday', 'false', '2020-01-01', '', '51',52 from dual union
select '23-12-2020', 'Wednesday', 'false', '2020-01-01', '', '51',53 from dual union
select '24-12-2020', 'Wednesday', 'false', '2020-01-01', '', '51',54 from dual union
select '25-12-2020', 'Wednesday', 'false', '2020-01-01', '', '51',55 from dual union
select '26-12-2020', 'Wednesday', 'false', '2020-01-01', '', '51',56 from dual union
select '27-12-2020', 'Wednesday', 'false', '2020-01-01', '', '52',57 from dual union
select '28-12-2020', 'Wednesday', 'false', '2020-01-01', '', '52',58 from dual union
select '29-12-2020', 'Wednesday', 'false', '2020-01-01', '', '52',59 from dual union
select '30-12-2020', 'Wednesday', 'false', '2020-01-01', '', '52',60 from dual) tab;