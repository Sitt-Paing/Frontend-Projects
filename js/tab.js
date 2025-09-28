$('.tab_nav li:first-child').addClass('active');
$('.tab_content').hide();
$('.tab_content:first').show();

$('.tab_nav li').click(function () {
  $('.tab_nav li').removeClass('active');
  $(this).addClass('active');
  $('.tab_content').hide();

  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});

$('.news .tab_nav li:first-child').addClass('.news active');
$('.news .tab_content').hide();
$('.news .tab_content:first').show();

$('.news .tab_nav li').click(function () {
  $('.news .tab_nav li').removeClass('.news active');
  $(this).addClass('.news active');
  $('.news .tab_content').hide();

  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});