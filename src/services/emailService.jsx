import emailjs from 'emailjs-com';

const sendActivationEmail = (user, email, activationToken) => {
  emailjs.send('service_9wdzqye', 'SAAT', {
    to_name: user,
    to_email: email,
    activation_link: `https://example.com/activate?token=${activationToken}`
  }, 'alnBYg9S1Fu95lqMp')
    .then((result) => {
      console.log('Email sent successfully:', result.text);
    }, (error) => {
      console.error('Error sending email:', error.text);
    });
};

export default sendActivationEmail;