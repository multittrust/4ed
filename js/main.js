$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
      var file = 'sections/' + $(this).data('include') + '.html'
      $(this).load(file)
    })
  })