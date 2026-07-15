import Logo from './roya_logo.png'
import royaLogo from '../assets/roya_logo.png'
import {
  LuHouse,
  LuKeyRound,
  LuChartNoAxesCombined,
  LuBuilding2,
} from "react-icons/lu";
export let assets = {
    royaLogo
}

export const navLinks = [
  { label: "الرئيسية", href: "#hero" },
  { label: "الخدمات", href: "#service" },
  { label: "الاراء", href: "#customers" },
  { label: "تواصل ", href: "#contact" },
];

export const services = [
 {
    "title": "بيع العقارات",
    "description": "منازل وعقارات مختارة بعناية تناسب أسلوب حياتك، مع خدمة استشارية رافقة من العرض إلى التسليم.",
    "Icon": LuHouse
  },
  {
    "title": "تأجير العقارات",
    "description": "إيجارات قصيرة وطويلة الأمد في أرقى الأحياء، مفروشة بعناية وجاهزة للسكن الفوري.",
    "Icon": LuKeyRound
  },
  {
    "title": "الاستشارات الاستثمارية",
    "description": "استراتيجيات مبنية على البيانات لبناء محفظة عقارية مستدامة بعوائد طويلة الأمد.",
    "Icon": LuChartNoAxesCombined
  },
  {
    "title": "إدارة العقارات",
    "description": "خدمة إدارة متكاملة تحافظ على قيمة عقارك وتساعد المستأجرين وتمنح المالك راحة البال.",
    "Icon": LuBuilding2
  }
];

export let testimonial = [
  {
    "name": "أحمد ",
    "review": " من افضل الشركات الي تعاملت معاهم , ساعدوني ف بيع بتي الملك , جزاهم الف خير , انصح فيهم اذا محتاج استشارة .",
    "rating": 5,
    "featured": false
  },
  {
    "name": "سارة ",
    "review": "ماقصروا صراحة تابعو معاي الاجراءات كاملة من يوم مارفعت طلب استشارة ومع الاستاذ محمد ماقصر يعطيكم الف عافية.",
    "rating": 5,
    "featured": true
  },
  {
    "name": "ريم ",
    "review": "ساعدوني في تأجير عقاري بسرعة وبأفضل سعر ممكن، وتولوا جميع التفاصيل باحترافية عالية صراحة شكرا لكم والله",
    "rating": 4,
    "featured": false
  },
  {
    "name": "محمد السهلي",
    "review": "اخذت استشارة في شقة كنت محتارة اشتريها او اذا فيه مكان افضل , ساعدوني اختار مكان نفس طلبي الحمدلله.",
    "rating": 5,
    "featured": false
  }
]
export default assets
