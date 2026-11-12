// Registry of official and reputable sources cited across the site.
// Every URL here was checked by hand (HTTP status AND page title/content) before
// being added; uaelegislation.gov.ae and adjd.gov.ae block scripted requests, so
// those were verified in a real browser (2026-09-25). Never paste a source URL
// into a page: add it here first, then let the trigger rules attach it to the
// guides that name the law or topic.

export interface Source {
  title: string;
  titleAr?: string;
  publisher: string;
  publisherAr?: string;
  url: string;
  urlAr?: string;
}

const UAE_LEG = 'UAE Legislation portal';
const UAE_LEG_AR = 'بوابة التشريعات الإماراتية';
const ADJD = 'Abu Dhabi Judicial Department';
const ADJD_AR = 'دائرة القضاء في أبوظبي';

export const SOURCES: Record<string, Source> = {
  'law-41-2024': {
    title: 'Federal Decree-Law No. 41 of 2024 on the Personal Status Law',
    titleAr: 'مرسوم بقانون اتحادي رقم 41 لسنة 2024 في شأن إصدار قانون الأحوال الشخصية',
    publisher: UAE_LEG,
    publisherAr: UAE_LEG_AR,
    url: 'https://uaelegislation.gov.ae/en/legislations/2770',
    urlAr: 'https://uaelegislation.gov.ae/ar/legislations/2770',
  },
  'law-41-2022': {
    title: 'Federal Decree-Law No. 41 of 2022 on Civil Personal Status',
    titleAr: 'مرسوم بقانون اتحادي رقم 41 لسنة 2022 في شأن الأحوال الشخصية المدني',
    publisher: UAE_LEG,
    publisherAr: UAE_LEG_AR,
    url: 'https://uaelegislation.gov.ae/en/legislations/1586',
    urlAr: 'https://uaelegislation.gov.ae/ar/legislations/1586',
  },
  'law-42-2022': {
    title: 'Federal Decree-Law No. 42 of 2022 on the Civil Procedure Code',
    titleAr: 'مرسوم بقانون اتحادي رقم 42 لسنة 2022 بإصدار قانون الإجراءات المدنية',
    publisher: UAE_LEG,
    publisherAr: UAE_LEG_AR,
    url: 'https://uaelegislation.gov.ae/en/legislations/1602',
    urlAr: 'https://uaelegislation.gov.ae/ar/legislations/1602',
  },
  'bd-mflo-1961': {
    title: 'The Muslim Family Laws Ordinance, 1961 (Bangladesh)',
    titleAr: 'قانون الأسرة الإسلامي لعام 1961 في بنغلاديش (بالإنجليزية)',
    publisher: 'Laws of Bangladesh, Ministry of Law, Justice and Parliamentary Affairs',
    url: 'https://bdlaws.minlaw.gov.bd/act-details-305.html',
  },
  'bd-family-courts-2023': {
    title: 'Family Courts Act, 2023 (Bangladesh, Act No. 26 of 2023, in Bangla)',
    titleAr: 'قانون محاكم الأسرة لعام 2023 في بنغلاديش (باللغة البنغالية)',
    publisher: 'Laws of Bangladesh, Ministry of Law, Justice and Parliamentary Affairs',
    url: 'https://bdlaws.minlaw.gov.bd/act-details-1444.html',
  },
  'cabinet-122-2023': {
    title: 'Cabinet Resolution No. 122 of 2023 on the Executive Regulation of Federal Decree-Law No. 41 of 2022 on Civil Personal Status',
    titleAr: 'قرار مجلس الوزراء رقم 122 لسنة 2023 بشأن اللائحة التنفيذية للمرسوم بقانون اتحادي رقم 41 لسنة 2022 في شأن الأحوال الشخصية المدني',
    publisher: UAE_LEG,
    publisherAr: UAE_LEG_AR,
    url: 'https://uaelegislation.gov.ae/en/legislations/2301',
    urlAr: 'https://uaelegislation.gov.ae/ar/legislations/2301',
  },
  'dubai-law-21-2015': {
    title: 'Dubai Law No. (21) of 2015 Concerning Judicial Fees of the Dubai Courts',
    titleAr: 'قانون دبي رقم (21) لسنة 2015 بشأن الرسوم القضائية في محاكم دبي (بالإنجليزية)',
    publisher: 'Dubai Legislation Portal, Government of Dubai',
    publisherAr: 'بوابة تشريعات دبي، حكومة دبي',
    url: 'https://dlp.dubai.gov.ae/Legislation%20Reference/2015/Law%20No.%20(21)%20of%202015%20Concerning%20Judicial%20Fees%20of%20the%20Dubai%20Courts.html',
  },
  'law-34-2022': {
    title: 'Federal Decree-Law No. 34 of 2022 Regulating the Legal Profession and Legal Consultation Profession',
    titleAr: 'مرسوم بقانون اتحادي رقم 34 لسنة 2022 بشأن تنظيم مهنتي المحاماة والاستشارات القانونية',
    publisher: UAE_LEG,
    publisherAr: UAE_LEG_AR,
    url: 'https://uaelegislation.gov.ae/en/legislations/1566',
    urlAr: 'https://uaelegislation.gov.ae/ar/legislations/1566',
  },
  'law-31-2021': {
    title: 'Federal Decree-Law No. 31 of 2021 on the Crimes and Penalties Law',
    titleAr: 'مرسوم بقانون اتحادي رقم 31 لسنة 2021 بإصدار قانون الجرائم والعقوبات',
    publisher: UAE_LEG,
    publisherAr: UAE_LEG_AR,
    url: 'https://uaelegislation.gov.ae/en/legislations/1529',
    urlAr: 'https://uaelegislation.gov.ae/ar/legislations/1529',
  },
  'ad-law-14-2021': {
    title: 'Abu Dhabi Law No. 14 of 2021 (as amended) and Regulation No. 8 of 2022, official English text',
    titleAr: 'قانون أبوظبي رقم 14 لسنة 2021 (بتعديلاته) واللائحة رقم 8 لسنة 2022، النص الإنجليزي الرسمي',
    publisher: ADJD,
    publisherAr: ADJD_AR,
    url: 'https://www.adjd.gov.ae/AR/Documents/non-muslims/Abu%20Dhabi%20Law%20No.%2014%20of%202021%20(as%20amended)%20and%20Regulation%208%20of%202022.pdf',
  },
  'adjd-civil-family-court': {
    title: 'Abu Dhabi Civil Family Court',
    titleAr: 'محكمة أبوظبي للأسرة المدنية',
    publisher: ADJD,
    publisherAr: ADJD_AR,
    url: 'https://www.adjd.gov.ae/en/Pages/CivilFamilyCourt.aspx',
    urlAr: 'https://www.adjd.gov.ae/AR/Pages/CivilFamilyCourt.aspx',
  },
  'dv-law-13-2024': {
    title: 'Federal Decree-Law No. 13 of 2024 on Protection Against Domestic Violence',
    titleAr: 'مرسوم بقانون اتحادي رقم 13 لسنة 2024 بشأن الحماية من العنف الأسري',
    publisher: UAE_LEG,
    publisherAr: UAE_LEG_AR,
    url: 'https://uaelegislation.gov.ae/en/legislations/2580',
    urlAr: 'https://uaelegislation.gov.ae/ar/legislations/2580',
  },
  'hcch-abduction': {
    title: 'Status table of the 1980 Hague Child Abduction Convention (the UAE is not a party)',
    titleAr: 'جدول الدول الأطراف في اتفاقية لاهاي لعام 1980 بشأن اختطاف الأطفال (الإمارات ليست طرفاً)',
    publisher: 'Hague Conference on Private International Law (HCCH)',
    url: 'https://www.hcch.net/en/instruments/conventions/status-table/?cid=24',
  },
  'hcch-apostille': {
    title: 'Status table of the 1961 Hague Apostille Convention (the UAE is not a party)',
    titleAr: 'جدول الدول الأطراف في اتفاقية لاهاي لعام 1961 بشأن التصديق (الأبوستيل)، والإمارات ليست طرفاً',
    publisher: 'Hague Conference on Private International Law (HCCH)',
    url: 'https://www.hcch.net/en/instruments/conventions/status-table/?cid=41',
  },
  'sa-v-fa': {
    title: 'SA v FA [2022] EWFC 115 (B), judgment of HHJ Hess',
    titleAr: 'حكم SA v FA [2022] EWFC 115 (B) الصادر عن القاضي هيس',
    publisher: 'The National Archives, Find Case Law',
    url: 'https://caselaw.nationalarchives.gov.uk/ewfc/2022/115',
  },
  'uk-fla-1986': {
    title: 'Family Law Act 1986, Part II (recognition of overseas divorces)',
    titleAr: 'قانون الأسرة البريطاني لعام 1986، الجزء الثاني (الاعتراف بالطلاق الأجنبي)',
    publisher: 'legislation.gov.uk',
    url: 'https://www.legislation.gov.uk/ukpga/1986/55/part/II',
  },
  'adjd-family-guidance': {
    title: 'Family Guidance services',
    titleAr: 'خدمات التوجيه الأسري',
    publisher: ADJD,
    publisherAr: ADJD_AR,
    url: 'https://www.adjd.gov.ae/en/pages/family-guidance.aspx',
    urlAr: 'https://www.adjd.gov.ae/AR/pages/family-guidance.aspx',
  },
  'adjd-visitation': {
    title: 'Child Visitation Center',
    titleAr: 'مركز رؤية الأطفال',
    publisher: ADJD,
    publisherAr: ADJD_AR,
    url: 'https://www.adjd.gov.ae/EN/Pages/Child-Visitation-Center.aspx',
  },
  'legal500-procedure-2024': {
    title: 'Faster and efficient dispute resolution reforms under Federal Decree-Law No. 41 of 2024',
    titleAr: 'إصلاحات تسريع الفصل في النزاعات في المرسوم بقانون رقم 41 لسنة 2024 (بالإنجليزية)',
    publisher: 'The Legal 500',
    url: 'https://www.legal500.com/developments/thought-leadership/faster-and-efficient-dispute-resolution-reforms/',
  },
};

// Trigger rules: a source is attached to a page when the page's visible text
// matches one of its patterns. Text is lower-cased with punctuation stripped
// before matching ("Decree-Law No. 41 of 2024" becomes "decree law no 41 of 2024").
// Order = priority when a page matches more than MAX_SOURCES.
export const TRIGGERS: Array<[string, RegExp[]]> = [
  ['law-41-2024', [/\b41 of 2024\b/, /\b41 2024\b/, /41 لسنة 2024/, /(?<![\d٠-٩])٤١ لسنة ٢٠٢٤/]],
  ['law-41-2022', [/\b41 of 2022\b/, /\b41 2022\b/, /41 لسنة 2022/, /(?<![\d٠-٩])٤١ لسنة ٢٠٢٢/]],
  ['bd-mflo-1961', [/^(?=.*bangladesh)(?=.*muslim family laws ordinance)/, /^(?=.*بنغلاديش)(?=.*قانون الأسرة الإسلامي)/]],
  ['bd-family-courts-2023', [/^(?=.*bangladesh)(?=.*family courts act 2023)/]],
  ['ad-law-14-2021', [/\b14 of 2021\b/, /\b14 2021\b/, /14 لسنة 2021/, /(?<![\d٠-٩])١٤ لسنة ٢٠٢١/]],
  ['adjd-civil-family-court', [/civil family court/, /الأسرة المدنية/]],
  ['dv-law-13-2024', [/\b13 of 2024\b/, /13 لسنة 2024/, /domestic violence/, /العنف الأسري/, /(?<![\d٠-٩])١٣ لسنة ٢٠٢٤/]],
  ['cabinet-122-2023', [/\b122 of 2023\b/, /(?<![\d٠-٩])122 لسنة 2023/, /(?<![\d٠-٩])١٢٢ لسنة ٢٠٢٣/]],
  ['dubai-law-21-2015', [/\b21 of 2015\b/, /(?<![\d٠-٩])21 لسنة 2015/, /(?<![\d٠-٩])٢١ لسنة ٢٠١٥/]],
  ['law-34-2022', [/\b34 of 2022\b/, /(?<![\d٠-٩])34 لسنة 2022/, /(?<![\d٠-٩])٣٤ لسنة ٢٠٢٢/]],
  ['law-31-2021', [/\b31 of 2021\b/, /(?<![\d٠-٩])31 لسنة 2021/, /(?<![\d٠-٩])٣١ لسنة ٢٠٢١/]],
  ['law-42-2022', [/\b42 of 2022\b/, /\b42 2022\b/, /42 لسنة 2022/, /(?<![\d٠-٩])٤٢ لسنة ٢٠٢٢/]],
  ['sa-v-fa', [/ewfc 115/]],
  ['uk-fla-1986', [/family law act 1986/]],
  ['hcch-abduction', [/^(?=.*\bhague\b)(?=.*(abduct|custody))/, /^(?=.*لاهاي)(?=.*(اختطاف|حضانة))/]],
  ['hcch-apostille', [/apostille/, /أبوستيل|ابوستيل|الأبوستيل/]],
  ['adjd-visitation', [/visitation cent/, /مركز الرؤية|مراكز الرؤية|مراكز رؤية/]],
  ['adjd-family-guidance', [/^(?=.*family guidance)(?=.*abu dhabi)/, /^(?=.*التوجيه الأسري)(?=.*أبوظبي)/]],
  ['legal500-procedure-2024', [/^(?=.*family guidance)(?=.*\b41 of 2024\b)/, /^(?=.*التوجيه الأسري)(?=.*41 لسنة 2024)/]],
];

export const MAX_SOURCES = 5;

export function pickSources(normalizedText: string, max = MAX_SOURCES): string[] {
  const keys: string[] = [];
  for (const [key, patterns] of TRIGGERS) {
    if (!SOURCES[key]) throw new Error(`Source trigger references unknown key: ${key}`);
    if (patterns.some((re) => re.test(normalizedText))) keys.push(key);
    if (keys.length >= max) break;
  }
  return keys;
}
