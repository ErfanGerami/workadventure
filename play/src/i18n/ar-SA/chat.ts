import type { DeepPartial } from "../DeepPartial";
import type { Translation } from "../i18n-types";

const chat: DeepPartial<Translation["chat"]> = {
    intro: "هنا سجل الدردشة الخاص بك:",
    adventurers: "المستخدمون",
    onlineUsers: "المستخدم المتصل",
    getCloserTitle: "اقترب من شخص ما",
    noRoomOpen: "افتح محادثة",
    noRoomOpenDescription: "لا يوجد شيء لعرضه حتى الآن. ابدأ دردشة أو اقترب من شخص ما لرؤية رسائلك تظهر هنا.",
    getCloserDesc:
        "عندما تقترب من شخص ما في الفضاء الافتراضي، يتم فتح فقاعة محادثة تلقائيًا، مما يتيح لك التحدث مباشرة كما لو كنت وجهًا لوجه.",
    noMessage: "لم يتم إرسال أي رسالة حتى الآن!",
    beFirst: "كن الأول وأرسل رسالة",
    enter: "أدخل رسالتك...",
    menu: {
        visitCard: "بطاقة الزيارة",
        addFriend: "إضافة صديق",
    },
    loader: "جار التحميل...",
    typing: "يكتب...",
    users: "المستخدمون",
    chat: "الدردشة",
    userList: {
        disconnected: "غير متصل بالعالم",
        isHere: "على هذه الخريطة",
        inAnotherMap: "في خريطة أخرى",
        in: "في ",
        teleport: "الانتقال الفوري",
        search: "ابحث فقط!",
        TalkTo: "تحدث إلى",
        teleporting: "جار الانتقال الفوري ...",
        businessCard: "بطاقة العمل",
        sendMessage: "إرسال رسالة",
    },
    accept: "قبول",
    decline: "رفض",
    join: "انضمام",
    connecting: "جار الاتصال بالخادم ...",
    waitingInit: "في انتظار تهيئة الخادم ...",
    waitingData: "في انتظار بيانات المستخدم ...",
    searchUser: "ابحث عن مستخدم، خريطة، إلخ ...",
    searchChat: "ابحث عن قناة، رسالة، إلخ ...",
    people: "الأشخاص",
    rooms: "الغرف",
    addNew: "إضافة جديد : ",
    invitations: "الدعوات",
    suggestedRooms: "الغرف المقترحة",
    availableRooms: "الغرف المتاحة",
    proximity: "دردشة القرب",
    role: {
        adminShort: "مشرف",
        admin: "المشرف",
        member: "عضو",
        visitor: "زائر",
    },
    status: {
        online: "متصل",
        away: "بعيد",
        unavailable: "غير متاح",
        back_in_a_moment: "سأعود بعد قليل",
        do_not_disturb: "لا تزعج",
        busy: "مشغول",
        meeting: "في اجتماع",
        megaphone: "يستخدم مكبر الصوت",
    },
    logIn: "تسجيل الدخول",
    signIn: "سجل أو قم بتسجيل الدخول للاستمتاع بجميع ميزات الدردشة!",
    invite: "دعوة",
    roomEmpty: "هذه الغرفة فارغة، قم بدعوة زميل أو صديق للانضمام إليك!",
    userOnline: "مستخدم متصل",
    usersOnline: "مستخدمون متصلون",
    open: "فتح",
    me: "أنا",
    you: "أنت",
    ban: {
        title: "حظر",
        content: "حظر المستخدم {userName} من العالم الحالي. يمكن إلغاء ذلك من الإدارة.",
        ban: "حظر هذا المستخدم",
    },
    loading: "جار التحميل",
    loadingUsers: "جار تحميل المستخدمين ...",
    load: "تحميل",
    rankUp: "ترقية",
    rankDown: "تخفيض",
    reinit: "إعادة التهيئة",
    enterText: "أدخل رسالة ...",
    timeLine: {
        title: "الخط الزمني الخاص بك",
        open: "افتح سجل الخط الزمني الخاص بك!",
        description: "سجل الرسائل والأحداث",
        incoming: "{userName} انضم إلى المناقشة",
        outcoming: "{userName} غادر المناقشة",
        youLeft: "لقد غادرت المناقشة",
    },
    form: {
        placeholder: "أدخل رسالتك...",
        typing: " يكتب...",
        application: {
            klaxoon: {
                title: "Klaxoon",
                description: "أرسل Klaxoon مضمنًا في الدردشة!",
            },
            youtube: {
                title: "YouTube",
                description: "أرسل فيديو YouTube مضمنًا في الدردشة!",
            },
            googleDocs: {
                title: "Google Docs",
                description: "أرسل مستندات Google مضمنة في الدردشة!",
            },
            googleSlides: {
                title: "Google Slides",
                description: "أرسل شرائح Google مضمنة في الدردشة!",
            },
            googleSheets: {
                title: "Google Sheets",
                description: "أرسل جداول بيانات Google مضمنة في الدردشة!",
            },
            eraser: {
                title: "Eraser",
                description: "أرسل Eraser مضمنًا في الدردشة!",
            },
            googleDrive: {
                title: "Google Drive",
                description: "أرسل ملفًا من Google Drive في الدردشة!",
            },
            excalidraw: {
                title: "Excalidraw",
                description: "أرسل لوحة بيضاء افتراضية بأسلوب مرسوم يدويًا. تعاونية ومشفرة من طرف إلى طرف.",
            },
            cards: {
                title: "البطاقات",
                description: "أرسل بطاقة في الدردشة!",
            },
            weblink: {
                error: "يرجى إدخال عنوان URL صالح",
            },
        },
    },
    notification: {
        discussion: "يريد مناقشة معك",
        message: "يرسل رسالة",
        forum: "في المنتدى",
    },
    see: "رؤية",
    show: "عرض",
    less: "أقل",
    more: "أكثر",
    sendBack: "إعادة الإرسال",
    delete: "حذف",
    messageDeleted: "تم حذف الرسالة",
    emoji: {
        icon: "رمز لفتح أو إغلاق نافذة اختيار الرموز التعبيرية",
        search: "ابحث عن الرموز التعبيرية...",
        categories: {
            recents: "الرموز التعبيرية الحديثة",
            smileys: "الوجوه التعبيرية والعاطفة",
            people: "الأشخاص والجسم",
            animals: "الحيوانات والطبيعة",
            food: "الطعام والشراب",
            activities: "الأنشطة",
            travel: "السفر والأماكن",
            objects: "الأشياء",
            symbols: "الرموز",
            flags: "الأعلام",
            custom: "مخصص",
        },
        notFound: "لم يتم العثور على رموز تعبيرية",
    },
    said: "قال :",
    reply: "رد",
    replyTo: "رد على",
    react: "تفاعل",
    copy: "نسخ",
    copied: "تم النسخ!",
    file: {
        fileContentNoEmbed: "المحتوى غير متاح للعرض. يرجى تنزيله",
        download: "تنزيل",
        openCoWebsite: "فتح في الموقع المشترك",
        copy: "نسخ الرابط",
        tooBig: "{fileName} كبير جدًا {maxFileSize}.",
        notLogged: "تحتاج إلى تسجيل الدخول لتحميل ملف.",
    },
    needRefresh: "انتهت صلاحية اتصالك، تحتاج إلى تحديث الصفحة لإعادة الاتصال بالدردشة.",
    refresh: "تحديث",
    upgrade: "ترقية",
    upgradeToSeeMore: "قم بالترقية لرؤية المزيد من الرسائل",
    disabled: "تم تعطيل هذه الميزة.",
    disabledByAdmin: "تم تعطيل هذه الميزة بواسطة المسؤول.",
    anAdmin: "مسؤول",
    messageDeletedByYou: "لقد حذفت هذه الرسالة",
    messageEdited: "تم التعديل",
    messageEditedError: "تعذر تعديل الرسالة. حاول مرة أخرى.",
    waiting: "في انتظار",
    nothingToDisplay: "لا يوجد شيء لعرضه",
    showMore: "عرض {number} المزيد",
    showLess: "عرض أقل",
    addRoomToFolderError: "لا يمكن إضافة الغرفة إلى المجلد",
    createRoom: {
        title: "إنشاء غرفة جديدة",
        name: "الاسم",
        visibility: {
            label: "الرؤية",
            private: "خاص",
            privateDescription: "سيتمكن الضيوف المدعوون فقط من العثور على الغرفة والانضمام إليها.",
            public: "عام",
            publicDescription: "يمكن لأي شخص العثور على الغرفة والانضمام إليها.",
            restricted: "عضو المجلد",
            restrictedDescription: "مرئي فقط لأعضاء المجلد",
        },
        e2eEncryption: {
            label: "تفعيل التشفير من طرف إلى طرف",
            description: "لن تتمكن من تعطيله لاحقًا.",
        },
        suggested: "الغرفة المقترحة",
        suggestedDescription: "سيتم اقتراح هذه الغرفة للمستخدمين الذين في نفس المساحة.",
        users: "المستخدمون",
        historyVisibility: {
            label: "من يمكنه قراءة السجل؟",
            world_readable: "أي شخص",
            joined: "الأعضاء فقط (منذ انضمامهم)",
            invited: "الأعضاء فقط (منذ دعوتهم)",
        },
        buttons: {
            edit: "تعديل",
            create: "إنشاء",
            cancel: "إلغاء",
        },
        error: "خطأ في إنشاء الغرفة",
        loadingCreation: "جار إنشاء الغرفة",
        creationSuccessNotification: "تم إنشاء الغرفة",
    },
    createFolder: {
        title: "إنشاء مجلد جديد",
        name: "الاسم",
        visibility: {
            label: "الرؤية",
            private: "خاص",
            privateDescription: "سيتمكن الضيوف المدعوون فقط من العثور على الغرفة والانضمام إليها.",
            public: "عام",
            publicDescription: "يمكن لأي شخص العثور على الغرفة والانضمام إليها.",
            restricted: "عضو المجلد",
            restrictedDescription: "مرئي فقط لأعضاء المجلد",
        },
        description: {
            label: "الوصف",
            placeholder: "الوصف",
        },
        e2eEncryption: {
            label: "تفعيل التشفير من طرف إلى طرف",
            description: "لن تتمكن من تعطيله لاحقًا.",
        },
        users: "المستخدمون",
        historyVisibility: {
            label: "من يمكنه قراءة السجل؟",
            world_readable: "أي شخص",
            joined: "الأعضاء فقط (منذ انضمامهم)",
            invited: "الأعضاء فقط (منذ دعوتهم)",
        },
        buttons: {
            create: "إنشاء",
            cancel: "إلغاء",
        },
        error: "خطأ في إنشاء الغرفة",
        loadingCreation: "جار إنشاء الغرفة",
        creationSuccessNotification: "تم إنشاء الغرفة",
    },
    manageRoomUsers: {
        roomOption: "المشاركون",
        error: "تعذر إرسال الدعوات",
        title: "إدارة المشاركين",
        invitations: "الدعوات",
        participants: "المشاركون",
        join: "انضم",
        invite: "مدعو",
        ban: "محظور",
        kick: "تم طرده",
        leave: "غادر",
        roomID: "معرف الغرفة : {roomId}",
        membership: "العضوية",
        permissionLevel: "الأدوار",
        actions: "الإجراءات",
        buttons: {
            sendInvitations: "إرسال الدعوات",
            cancel: "إلغاء",
            ban: "حظر",
            kick: "طرد",
            unban: "إلغاء الحظر",
            invite: "دعوة",
        },
        roles: {
            USER: "مستخدم",
            ADMIN: "مشرف",
            MODERATOR: "مشرف",
        },
        sendInvitationsSuccessNotification: "تم إرسال الدعوات بنجاح",
    },
    roomMenu: {
        leaveRoom: {
            label: "مغادرة الغرفة",
            notification: "لقد غادرت الغرفة",
        },
        muteRoom: "كتم الغرفة",
        unmuteRoom: "إلغاء كتم الغرفة",
    },
    folderMenu: {
        leaveFolder: {
            label: "مغادرة المجلد",
            notification: "لقد غادرت المجلد",
        },
    },
    e2ee: {
        configure: "تكوين",
        encryptionNotConfigured: "التشفير غير مهيأ",
        createRecoveryKey: {
            title: "إنشاء مفتاح استرداد الدردشة",
            description:
                "للاستخدام التشفير من طرف إلى طرف في الدردشة، تحتاج إلى إنشاء مفتاح استرداد. يرجى إدخال عبارة الاسترداد الخاصة بك أدناه، سيتم إنشاء مفتاح استرداد.",
            privateKeyDescription:
                "هذا هو مفتاح الاسترداد الخاص بك، احفظه في مكان ما لاسترداد المناقشات المشفرة بعد تسجيل الخروج.",
            error: "حدث خطأ أثناء generateRecoveryKeyFromPassphrase",
            buttons: {
                generate: "إنشاء",
                continue: "متابعة",
                cancel: "إلغاء",
            },
        },
        interactiveAuth: {
            title: "التشفير من طرف إلى طرف للدردشة",
            description:
                "لأسباب أمنية، يجب تحميل مفتاح إلى خادمنا للتحقق من هويتك. من خلال تأكيد هويتك، ستخزن المفتاح، مما يتيح لك قراءة الرسائل المشفرة من WA وعملاء آخرين.",
            instruction: "تأكد من إكمال اتصال SSO قبل النقر على زر الإنهاء.",
            buttons: {
                cancel: "إلغاء",
                continueSSO: "متابعة باستخدام SSO",
                finish: "إنهاء",
            },
        },
        accessSecretStorage: {
            title: "التحقق من جلسة الدردشة",
            description:
                "للتحقق من جلستك واسترداد الرسائل المشفرة، تحتاج إلى إدخال مفتاح الاسترداد أو عبارة الاسترداد الخاصة بك.",
            passphrase: "عبارة المرور",
            recoveryKey: "مفتاح الاسترداد",
            placeholder: "أدخل",
            buttons: {
                cancel: "إلغاء",
                usePassphrase: "استخدام عبارة الاسترداد بدلاً من ذلك",
                useRecoveryKey: "استخدام مفتاح الاسترداد بدلاً من ذلك",
                confirm: "تأكيد",
            },
        },
    },
    connectionError: "الدردشة غير متاحة",
    requiresLoginForChatModal: {
        title: "قم بتسجيل الدخول لفتح الدردشة!",
        content_1: "للاستمتاع الكامل بميزة الدردشة هذه، تحتاج إلى تسجيل الدخول إلى حسابك.",
        content_2: "يتيح لك تسجيل الدخول الوصول إلى جميع الخيارات ويسمح لك بالاستمرار دون انقطاع.",
        content_3: " يرجى تسجيل الدخول للمتابعة مع التجربة.",
    },
    verificationEmojiDialog: {
        confirmation: "تطابقوا",
        mismatch: "لا يتطابقون",
        title: "التحقق من الجهاز",
        titleVerifyThisDevice: "تحقق من جهازك",
        titleVerifyOtherDevice: "تحقق من جهاز آخر",
        description: "أكد أن الرموز التعبيرية أدناه معروضة على كلا الجهازين وبنفس الترتيب:",
        waitForOtherDevice: "في انتظار الجهاز الآخر ...",
        waitOtherDeviceConfirmation: "في انتظار تأكيد الجهاز الآخر ...",
        understood: "فهمت",
        error: "حدث خطأ أثناء عملية التحقق…",
    },
    chooseDeviceVerificationMethodModal: {
        title: "التحقق من الجهاز",
        description: "اختر طريقة التحقق",
        withOtherDevice: "التحقق باستخدام جهاز آخر",
        withPassphrase: "التحقق باستخدام عبارة المرور الأمنية",
    },
    askStartVerificationModal: {
        title: "التحقق مطلوب",
        accept: "تحقق من الجلسة",
        ignore: "تجاهل",
        from: "من",
    },
    requiresLoginForChat: "قم بتسجيل الدخول للوصول إلى رسائل الدردشة",
    emojis: {
        Dog: "كلب",
        Cat: "قط",
        Lion: "أسد",
        Horse: "حصان",
        Unicorn: "وحيد القرن",
        Pig: "خنزير",
        Elephant: "فيل",
        Rabbit: "أرنب",
        Panda: "باندا",
        Rooster: "ديك",
        Penguin: "بطريق",
        Turtle: "سلحفاة",
        Fish: "سمكة",
        Octopus: "أخطبوط",
        Butterfly: "فراشة",
        Flower: "زهرة",
        Tree: "شجرة",
        Cactus: "صبار",
        Mushroom: "فطر",
        Globe: "كرة أرضية",
        Moon: "قمر",
        Cloud: "سحابة",
        Fire: "نار",
        Banana: "موزة",
        Apple: "تفاحة",
        Strawberry: "فراولة",
        Corn: "ذرة",
        Pizza: "بيتزا",
        Cake: "كعكة",
        Heart: "قلب",
        Smiley: "وجه مبتسم",
        Robot: "روبوت",
        Hat: "قبعة",
        Glasses: "نظارات",
        Spanner: "مفتاح ربط",
        Santa: "سانتا",
        "Thumbs Up": "إبهام لأعلى",
        Umbrella: "مظلة",
        Hourglass: "ساعة رملية",
        Clock: "ساعة",
        Gift: "هدية",
        "Light Bulb": "مصباح كهربائي",
        Book: "كتاب",
        Pencil: "قلم رصاص",
        Paperclip: "مشبك ورق",
        Scissors: "مقص",
        Lock: "قفل",
        Key: "مفتاح",
        Hammer: "مطرقة",
        Telephone: "هاتف",
        Flag: "علم",
        Train: "قطار",
        Bicycle: "دراجة",
        Aeroplane: "طائرة",
        Rocket: "صاروخ",
        Trophy: "كأس",
        Ball: "كرة",
        Guitar: "قيثارة",
        Trumpet: "بوق",
        Bell: "جرس",
        Anchor: "مرساة",
        Headphones: "سماعات رأس",
        Folder: "مجلد",
        Pin: "دبوس",
        unknownLabel: "تسمية غير معروفة",
    },
    fileAttachment: {
        title: "إرفاق ملف",
        description: "تحميل ومشاركة ملف",
        featureComingSoon: "قريبًا!",
    },
    loginTokenError: "حدث خطأ. يرجى إعادة الاتصال", // An error occurred. Please try to reconnect
    reconnect: "إعادة الاتصال", // Reconnect
    failedToJoinRoom: "فشل في الانضمام إلى الغرفة", // Failed to join room
    failedToLeaveRoom: "فشل في مغادرة الغرفة", // Failed to leave room
    refreshChat: "تحديث الدردشة", // Refresh Chat
    dismiss: "رفض", // Dismiss
    whoops: "عذرًا! حدث خطأ ما", // Whoops! Something went wrong
    failedToOpenRoom: "فشل في فتح الغرفة: {roomId}", // Failed to open room: {roomId}
    refreshChatError: "فشل في تحديث الدردشة", // Failed to refresh chat
    discord: {
        chatBand: {
            configure: "تكوين", // Configure
            open: "فتح", // Open
            dismiss: "رفض", // Dismiss
            discordNotConfigured: "اتصل بـ Discord", // Connect to Discord
        },
    },
    remoteUserNotConnected: "المستخدم غير مصدق. لا يمكن إرسال الرسالة.", // User not authenticated. Cannot send message.
};

export default chat;
