let baseApiUrl = 'http://192.168.8.100:3050';

export const appConfig = {
    mobile: '',
    apiURL: baseApiUrl,
    withoutLoginUrls: ['/'],
    baseApiUrl: baseApiUrl,
    perPageDefault: 12,
    perPageArray: [12, 24, 36, 48, 60],
    perPageTblArray: [10, 20, 30, 40, 50, 100],
    perPageTblDefault: 10,
    date_format: 'DD-MM-YYYY',
    google_doc_path: window.location.protocol + "//docs.google.com/viewer?url=",
    yearRange: 100,
    paystackPublicKey: 'pk_test_bda795695c65c62c6d922532a66d2c324ab16a3e',
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
    pattern: {
        'USERNAME': /[a-zA-Z0-9_]{3,15}$/ig,
        'NAME': /^[a-zA-Z . \-\']*$/,
        "CITY": /^[a-zA-Z . \-\']*$/,
       // "EMAIL": /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "EMAIL":/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        "POSTAL_CODE": /(^\d{5}(-\d{4})?$)|(^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$)/, // /(^\d{5}$)|(^\d{5}-\d{4}$)/,
        "SUB_DOMAIN": /^[/a-z/A-Z][a-zA-Z0-9-]*[^/-/./0-9]$/,
        "PHONE_NO": /\(?\d{3}\)?-? *\d{3}-? *-?\d{4}/,
        "TASK_CODE": /^[0-9999]{1,4}$/,
        "SSN": /^((\d{3}-?\d{2}-?\d{4})|(X{3}-?X{2}-?X{4}))$/,
        "TRANSACTION_PIN": /d{4}$/,
        "PASSWORD": /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$/
    },
    email: {
        abuse_email: "no-reply@zappy.com",
        copyright: (new Date().getFullYear()) + " Copyright Zappy",
        logo_url: "/public/images/logo.png"
    },
    roles: {
        "casual_user": 1, // Use services and Refer people
        "paypoint_agent": 2, //Sell via app, make profit, earn referral commission, earn upgrade commission.
        "custom_reseller": 3, //Sell via cloned app, make profit and has all features as in app except that he uses our own API.       
        "api_consumer": 4, //this user has their own platform with high traffic and wants to resell on their platform
        "super_admin": 5 //Super Administrator
    },
    role_type: {
        "casual_user": { id: '1', meta: "casual_user", name: "Casual User" },
        "paypoint_agent": { id: '2', meta: "paypoint_agent", name: "Paypoint Agent" },
        "custom_reseller": { id: '3', meta: "custom_reseller", name: "Custom Seller" },
        "api_consumer": { id: '4', meta: "api_consumer", name: "API Consumer" },
        "super_admin": { id: '5', meta: "super_admin", name: "Super Admin" }
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
    
}