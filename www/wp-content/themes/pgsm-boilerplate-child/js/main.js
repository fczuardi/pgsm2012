jQuery(document).ready(function($) {
  //modify navigation menu classes
  $('#access .menu li:has(.children)').addClass('parent')
  $('.current_page_parent').addClass('opened')
  $('.current_page_item.parent').addClass('opened')

  //apply collapsible behavior for colapsible post list elements
  $('.collapsible').bind('click', function(event){
    if (! $(event.target).hasClass('colapse-toggle')){ return; }
    event.preventDefault();
    if ($(event.currentTarget).hasClass('closed')){
      $('.collapsible').each(function(i, e){
        if (e === event.currentTarget){
          $(e).removeClass('closed');
        }else {
          $(e).addClass('closed');
        }
      });
    } else{
      $('.collapsible').each(function(i, e){
          $(e).addClass('closed');
      });
    }
  });

  //open a colapsible element if it's id is on the url hash
  var anchor_element = $(window.location.hash);
  if (anchor_element.length > 0){
    anchor_element.removeClass('closed')
  }
});