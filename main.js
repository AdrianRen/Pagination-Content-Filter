// Create the search nav by using jQuery
$(`<div class="page-header cf">
      <h2>Students</h2>
      <div class="student-search">
          <input id="search" name="search" placeholder="Search for students..." type="text" data-list=".student-list">
          <button>Search</button>
      </div>
  </div>`).insertBefore('.student-list');
// Create the pagination bar by jQuery
$('.page').append(
    `<div id="pagination"></div>`
);
// simplePagination jQuery Plugin implemented in this section.
$(function($) {
    let items = $('.student-item');
    let numItems = items.length;
    let perPage = 10;
    // Show 10 students initially when page loads
    items.slice(perPage).hide();

    // call the pagination function to the placeholder
    $('#pagination').pagination({
        // Total number of items that will be used to calculate the pages.
        items: numItems,
        // Number of items displayed on each page.
        itemsOnpage: perPage,
        pages: numItems / perPage,
        displayedPages: 5,
        cssStyle: 'light-theme',
        // Function to call when a page is clicked
        onPageClick: function(pageNumber) {
            //show and hide <li>..</li>s appropriately.
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;

            // First hide all page parts
            items.hide()
                // Then show those just for our page
                .slice(showFrom, showTo).show();
        }
    })
});

// hideSeek jQuery Plugin implemented in this section.
$('#search').hideseek({
    // No matches message
    nodata: 'Holy Smokes! No Result Found!'
});
