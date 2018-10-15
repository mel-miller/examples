
//computes combined field results on charter node edit page
//disable (make read-only) fields to be used to hold calculations, color the input box, and replace instuctions
//this is all done via jQuery so that it will degrade gracefully without js
$('#edit-field-total-risk-und-0-value').prop('readonly', true).css('background', '#eee');
$('.form-item-field-total-risk-und-0-value .description').replaceWith('<div class="description">Will be calculated automatically.</div>');

//reusable function to calculate risk values
var riskCalc = function() {
  var sum = 0;
  // we use jQuery each() to loop through all the textbox with 'risk-item' class
  // and compute the sum for each loop

  //first change any '_none' values to 0 before calculation
  $('.risk-item').each(function() {
    if ($(this).text() == "_none") {
      $(this).text("0");
    }
  });

  $('.risk-item').each(function() {
    sum += parseFloat($(this).text());
  });

  // print the computed value in disabled text field
  $('#edit-field-total-risk-und-0-value').val(sum);
}

//create placeholder div for tally
$('.group-risk-index h3 span').html('Risk Index <div class="risk-index-tally"></div>');

//get values from risk index select fields
$('.group-risk-index .form-select').each(function() {

//get initial value on edit form when page is loaded
var risk_value = $('<p class="risk-item">' + $('option:selected', this).val() + '</p>');

//output values
risk_value.appendTo('.risk-index-tally')

//calculate total of risk values
riskCalc();

//then hide the individual values -- eventually build a way to pass these values directly
$('.risk-item').css('display', 'none');


//update value on change of any select items
$(this).change(function() {
  risk_value.text($('option:selected', this).val());
  // recalculate on each change
  riskCalc();
});
