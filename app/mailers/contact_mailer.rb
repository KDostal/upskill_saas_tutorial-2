class ContactMailer < ActionMailer::Base
  default to: 'kdostal@centrum.cz'
  
  def contact_email(name, email, body)
    @name = name
    @email = email
    @body = body
    
    mail(from: email, subject: 'Contact Form Message')
  end
end