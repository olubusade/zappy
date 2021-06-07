var config = {
    local: { 
       options: {
         from: 'no-reply@wicarehealth.com'
       },
       connectionURL: 'smtps://noreply.wicarehealth@gmail.com:Wicare123#@smtp.gmail.com',
       templatePath: __rootRequire('app/core/email/templates/')
     },
    development: {
      options: {
        from: 'wiCare-support@wiconsultants.com'
      },
      templatePath: __rootRequire('app/core/email/templates/')
    },
    development_aws: {
      options: {
        from: 'wiCare-support@wiconsultants.com'
      },
      connectionURL: 'smtps://noreply.wicarehealth@gmail.com:Wicare123#@smtp.gmail.com',
      templatePath: __rootRequire('app/core/email/templates/')
    },
    production: {
      options: {
        from: 'no-reply@wicarehealth.com'
      },
      connectionURL: 'smtps://noreply.wicarehealth@gmail.com:Wicare123#@smtp.gmail.com',
      //connectionURL: 'smtps://viralcontentsystem@gmail.com:viral@123@smtp.gmail.com',
      //connectionURL: 'smtps://info@wicareHealth.com:wiCareLekma10#@smtp.outlook.365.com',
      //connectionURL: 'smtps://info@wicareHealth.com:wiCareLekma10#@smtp.office365.com',
      templatePath: __rootRequire('app/core/email/templates/')
    },
    aws: {
      options: {
        from: 'no-reply@wicarehealth.com'
      },
      connectionURL: 'smtps://noreply.wicarehealth@gmail.com:Wicare123#@smtp.gmail.com',
      //connectionURL: 'smtps://info@wicareHealth.com:wiCareLekma10#@smtp.outlook.365.com',
      //connectionURL: 'smtps://info@wicareHealth.com:wiCareLekma10#@smtp.office365.com',
      templatePath: __rootRequire('app/core/email/templates/')
    }
  };
  
  
  module.exports = config; 
  