function rightClicked(currentPage, totalPage){
	
   if (currentPage < totalPage) 
      currentPage++;
      else if(currentPage == totalPage)
	   currentPage = 0;
						   
	return currentPage; 
}

function leftClicked(currentPage, totalPage){
	
    if (currentPage == 0 ) 
        currentPage = totalPage;
      else if(currentPage > 0)
	   currentPage--;
						   
	return currentPage; 
}

function fetchNumberOfTotalPages(url) {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: url,
      method: 'GET',
      success: function(response) {
        var totalPages = response - 1;
        resolve(totalPages);
      },
      error: function(xhr, status, error) {
        console.error('Error fetching data:', error);
        reject(error);
      }
    });
  });
}