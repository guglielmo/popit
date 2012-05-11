/*  Configuration file
 *
 *
 *
 */

module.exports = {

    server: {
        port: 3000,
    },

    hosting_server: {
        host:       'popit.example.com',
        base_url:   'http://popit.example.com:3000',
        email_from: 'PopIt <popit@mysociety.org>', 
    },
    instance_server: {
        base_url_format: "http://%s.popit.example.com:3000",
        cookie_secret: 'something-really-secret',
    },
    email: {
        transport:         'SMTP',
        // See https://github.com/andris9/Nodemailer for config - empty fine for localhost:25
        transport_options: { },
    },
    
};
