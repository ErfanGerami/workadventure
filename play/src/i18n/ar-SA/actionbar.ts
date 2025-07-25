import type { Translation } from "../i18n-types";
import type { DeepPartial } from "../DeepPartial";

const actionbar: DeepPartial<Translation["actionbar"]> = {
    understand: "فهمت!",
    edit: "تحرير",
    cancel: "إلغاء",
    close: "إغلاق",
    login: "تسجيل الدخول",
    map: "خريطة",
    profil: "تحرير اسمك",
    startScreenSharing: "بدء مشاركة الشاشة",
    stopScreenSharing: "إيقاف مشاركة الشاشة",
    screenSharingMode: "وضع مشاركة الشاشة",
    focusMode: "وضع التركيز",
    rightMode: "الوضع الصحيح",
    hideMode: "إخفاء الوضع",
    lightMode: "وضع الإضاءة",
    calendar: "التقويم",
    todoList: "قائمة المهام",
    woka: "تخصيص صورتك الرمزية",
    companion: "إضافة رفيق",
    test: "اختبر إعداداتي",
    editCamMic: "تحرير الكاميرا / الميكروفون",
    allSettings: "جميع الإعدادات",
    bo: "المكتب الخلفي",
    globalMessage: "إرسال رسالة عالمية",
    mapEditor: "محرر الخرائط",
    mapEditorMobileLocked: "محرر الخرائط مقفل في الوضع المحمول",
    mapEditorLocked: "محرر الخرائط مغلق 🔐",
    app: "التطبيقات الخارجية",
    camera: {
        disabled: "الكاميرا معطلة",
        activate: "قم بتنشيط الكاميرا",
    },
    microphone: {
        disabled: "الميكروفون معطل",
        activate: "قم بتنشيط الميكروفون",
    },
    status: {
        ONLINE: "متصل",
        AWAY: "بعيد",
        BACK_IN_A_MOMENT: "سأعود بعد قليل",
        DO_NOT_DISTURB: "لا تزعج",
        BUSY: "مشغول",
        OFFLINE: "غير متصل",
        SILENT: "صامت",
        JITSI: "في اجتماع",
        BBB: "في اجتماع",
        DENY_PROXIMITY_MEETING: "غير متوفر",
        SPEAKER: "في اجتماع",
    },
    subtitle: {
        camera: "الكاميرا",
        microphone: "الميكروفون",
        speaker: "مكبر الصوت",
    },
    help: {
        chat: {
            title: "إرسال رسالة نصية",
            desc: "شارك أفكارك أو ابدأ مناقشة مباشرة كتابةً. بسيط، واضح، فعال.",
        },
        users: {
            title: "عرض قائمة المستخدمين",
            desc: "شاهد من هناك، قم بالوصول إلى بطاقة أعمالهم، أرسل لهم رسالة، أو اقترب منهم بنقرة واحدة!",
        },
        emoji: {
            title: "عرض رمز تعبيري",
            desc: "عبّر عن شعورك بنقرة واحدة باستخدام ردود الفعل الرمزية. فقط اضغط وانطلق!",
        },
        audioManager: {
            title: "حجم الأصوات المحيطة",
            desc: "قم بضبط حجم الأصوات المحيطة بسهولة.",
        },
        audioManagerNotAllowed: {
            title: "الأصوات المحيطة محظورة",
            desc: "منع متصفحك تشغيل الأصوات المحيطة. انقر على الرمز لبدء تشغيل الأصوات.",
        },
        follow: {
            title: "طلب المتابعة",
            desc: "يمكنك طلب متابعة مستخدم، وإذا تم قبول هذا الطلب، سيتبعك ووكاه تلقائيًا، مما يضمن اتصالًا سلسًا.",
        },
        unfollow: {
            title: "إيقاف المتابعة",
            desc: "يمكنك اختيار إيقاف متابعة مستخدم في أي وقت. سيتوقف ووكاه عن متابعته، مما يمنحك حرية الحركة.",
        },
        lock: {
            title: "قفل المحادثة",
            desc: "بتفعيل هذه الميزة، تضمن عدم انضمام أي شخص إلى المناقشة. أنت سيد مساحتك، ويمكن فقط لأولئك الموجودين بالفعل التفاعل.",
        },
        mic: {
            title: "تمكين/تعطيل الميكروفون",
            desc: "قم بتشغيل أو إيقاف الميكروفون بسهولة.",
        },
        micDisabledByStatus: {
            title: "الميكروفون معطل",
            desc: 'الميكروفون معطل لأن حالتك هي "{status}".',
        },
        cam: {
            title: "تمكين/تعطيل الكاميرا",
            desc: "قم بتشغيل أو إيقاف الكاميرا بسهولة.",
        },
        camDisabledByStatus: {
            title: "الكاميرا معطلة",
            desc: 'الكاميرا معطلة لأن حالتك هي "{status}".',
        },
        share: {
            title: "مشاركة الشاشة",
            desc: "هل تريد مشاركة شاشتك مع مستخدمين آخرين؟ يمكنك ذلك! يمكنك عرض شاشتك للجميع في الدردشة، ويمكنك اختيار مشاركة الشاشة بالكامل أو نافذة معينة فقط.",
        },
        apps: {
            title: "التطبيقات الخارجية",
            desc: "لديك الحرية في التنقل بين التطبيقات الخارجية أثناء البقاء في تطبيقنا، لتجربة سلسة وغنية.",
        },
        roomList: {
            title: "قائمة الغرف",
            desc: "عرض قائمة الغرف المتاحة.",
        },
        calendar: {
            title: "التقويم",
            desc: "عرض التقويم الخاص بك.",
        },
        todolist: {
            title: "قائمة المهام",
            desc: "إدارة قائمة المهام الخاصة بك بسهولة.",
        },
    },
    listStatusTitle: {
        enable: "تغيير حالتك",
    },
    externalModule: {
        status: {
            onLine: "الحالة على ما يرام ✅",
            offLine: "الحالة غير متصلة ❌",
            warning: "الحالة تحذير ⚠️",
            sync: "الحالة متزامنة 🔄",
        },
    },
    featureNotAvailable: "الميزة غير متوفرة لغرفتك 😭",
};

export default actionbar;
