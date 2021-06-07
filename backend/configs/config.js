const ENV = require('./env');
module.exports = {
    
    server_url: ENV.appEndpoint,
    api_url: ENV.apiEndpoint,
    SMS_API_USERNAME: ENV.sms_api_username,
    SMS_API_SENDER: ENV.sms_api_sender,
    SMS_API_URL: ENV.sms_api_url,
    SMS_API_KEY: ENV.sms_api_key,
    auth_secret: ENV.SECRET_KEY,
   // tokenExpiryTime: '168 hours',
    expiresIn: 24  *  60  *  60,
   // expiresIn: 5,
   // secretKey: 'ifgmQikpa3Y906u9m8aV1qndV4sj8r4vG8p3kdu7IaRIdIidlf',
    'MOMENT_DATE_TIME_FORMAT': 'YYYY-MM-DD HH:mm:ss Z',
    DATE_FORMAT: 'DD/MM/YYYY',
    TIME_FORMAT: 'HH12:MIAM',
    statusCode: {
        'ok':200,
        'created':201,
        'accepted':202,
        'noContent':204,
        'found':302,
        'temporaryRedirect':307,
        'badRequest': 400,
        'unauthorized': 401,
        'paymentRequired': 402,
        'forbidden': 403,
        'notFound': 404,
        'notAcceptable': 406,
        'conflict': 409,
        'preconditionFailed': 412,
        'payloadTooLarge': 413,
        'unsupportedMediaType': 415,
        'internalServerError': 500,
        'notImplemented': 501,
        'badGateway': 502,
        'serviceUnavailable': 503,
        'gatewayTimeout': 504,
        'httpVersionNotSupported': 505,
        'networkAuthenticationRequired': 511
    },
    pattern: any = {
        'USERNAME': /[a-zA-Z0-9_]{3,15}$/ig,
        'NAME': /^[a-zA-Z . \-\']*$/,
        "CITY": /^[a-zA-Z . \-\']*$/,
        "EMAIL": /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "POSTAL_CODE": /(^\d{5}(-\d{4})?$)|(^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$)/, // /(^\d{5}$)|(^\d{5}-\d{4}$)/,
        "SUB_DOMAIN": /^[/a-z/A-Z][a-zA-Z0-9-]*[^/-/./0-9]$/,
        "PHONE_NO": /\(?\d{3}\)?-? *\d{3}-? *-?\d{4}/,
        "TASK_CODE": /^[0-9999]{1,4}$/,
        "SSN": /^((\d{3}-?\d{2}-?\d{4})|(X{3}-?X{2}-?X{4}))$/
    },
    email: {
        abuse_email: "no-reply@zappy.com",
        copyright: (new Date().getFullYear()) + " Copyright Zappy",
        logo_url: "/public/images/logo.png",
        base_url: ENV.apiEndpoint
    },
    roles: {
        "casual_user": 1, // Use services and Refer people
        "paypoint_agent": 2, //Sell via app, make profit, earn referral commission, earn upgrade commission.
        "custom_reseller": 3, //Sell via cloned app, make profit and has all features as in app except that he uses our own API.       
        "api_consumer": 4, //this user has their own platform with high traffic and wants to resell on their platform
        "super_admin": 5 //Super Administrator
    },
    role_type: {
        "SUPER_ADMIN": { id: 1, name: "super_admin", group: "super_admin" },
        "USER1": { id: 2, name: "casual_user", group: "user" },
        "USER2": { id: 3, name: "paypoint_agent", group: "user" },
        "USER3": { id: 4, name: "custom_reseller", group: "user" },
        "USER4": { id: 5, name: "api_consumer", group: "user" }
    },
    upload_dir: {
        "USER_PROFILE_PIC": '/public/uploads/',
        "BLOG_PIC": '/public/uploads/blogs/',
        "BLOG_CATEGORY_PIC": '/public/uploads/blogs/category/',
        "DEFAULT_MALE_PIC": '/public/images/male_avatar.png',
        "DEFAULT_FEMALE_PIC": '/public/images/female_avatar.png',
        "DEFAULT_MALE_WHITE_PIC": '/public/images/male_avatar_white.png',
        "DEFAULT_FEMALE_WHITE_PIC": '/public/images/female_avatar_white.png',
        "COMPANY_LOGO_DIR": '/public/uploads/logos/',
        "DEFAULT_COMPANY_LOGO": '/public/images/default_logo.png',
        "DOCUMENTS_DIR": '/uploads/'
    },
    files: {
        MAX_IMG_SIZE: 20 * 2000 * 2000
    },
    page: {
        limit: 10,
        orderBy: 'created',
        sortDirection: 'desc'
    },
    email_templates: {
        EMAIL_SUBJECT_ACCOUNT_ACTIVATION: {
            id: 1,
            template_name: 'security_code_tmpl'
        },
        EMAIL_SUBJECT_user_INVITE: {
            id: 2,
            template_name: 'ehs_user_invite_tmpl'
        },
        EMAIL_SUBJECT_REFERRAL: {
            id: 3,
            template_name: 'referral_tmpl'
        },
        EMAIL_SUBJECT_USER_MESSAGE: {
            id: 4,
            template_name: 'user_message_tmpl'
        },

        EMAIL_SUBJECT_RESET_PASSWORD_CONFIRMATION: {
            id: 5,
            template_name: 'reset_password_tmpl'
        },
        EMAIL_SUCCESSFUL_TRANSACTION: {
            id: 6,
            template_name: 'successful_transaction_tmpl',
            subject: 'Transaction Successful.'
        },       
        EMAIL_FAILED_TRANSACTION: {
            id: 7,
            template_name: 'failed_transaction_tmpl',
            subject: 'Transaction Failed.'
        },
        EMAIL_SUBJECT_ACCOUNT_ACTIVATION_PASSWORD: {
            id: 8,
            template_name: 'security_code_password_tmpl'
        },
        EMAIL_SUBJECT_ACCOUNT_ACTIVATION_CONFIRMATION: {
            id: 9
        },
        FORGOT_EMAIL_SENT: {
            id: 10,
            template_name: 'forgot_password_tmpl'
        },
        PATIENT_FORGOT_EMAIL_SENT: {
            id: 11,
            template_name: 'patient_forgot_password_tmpl'
        },
        SUPERADMIN_CREATE_CUSTOM_RESELLER: {
            id: 12,
            template_name: 'superadmin_create_custom_reseller'
        },
        EMAIL_SUBJECT_ALERT_NOTIFICATION: {
            id: 13
        },
        EMAIL_SUBJECT_MANUAL_SHIFT_NOTIFICATION: {
            id: 14
        },
        SUPER_EMAIL_SUBSCRIPTION_EXPIRY_ALERT: {
            id: 15,
            template_name: 'subscription_expiry_alert_email'
        },
        SUPER_EMAIL_SUBSCRIPTION_LIMIT_ALERT: {
            id: 16,
            template_name: 'subscription_limit_alert_email'
        },


    },
    scheduler: {
        "startOnlineHours": 08,
        "startOnlineMinutes": 00,
        "endOnlineHours": 17,
        "endOnlineMinutes": 59
    }
};