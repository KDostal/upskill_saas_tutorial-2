// Document ready
$(document).on('trubolinks:load', function(){
  var theForm = $('#pro_form');
  var submitBtn = $('#form-signup-btn');
  
  // Set stripe public key
  Stripe.setPublishableKey( $('meta[name="stripe-key"]').attr('content') )
  
  // WHen user clicks form submit button 
  submitBtn.click(function(event){
    // prevent default submission behaviour

    event.preventDefault();
    
    // Collect credit card fields
    var ccNum = $('#card_number').val(),
        cvcNum = $('#card_code').val(),
        expMonth = $('#card_month').val(),
        expYear = $('#card_year').val();
    
    // Send info to Stripe
    Stripe.createToken({
      number: ccNum,
      cvc: cvcNum,
      exp_month: expMonth,
      exp_year: expYear
    }, stripeResponseHandler);
  });
  

  
  // Stripe will return card token
  // Inject card token as hiddne field to our form
  // Submit form to our Rails app
})