interface GovernmentAddress {
    name: string;
    street: string;
    village: string;
    district: string;
    city: string;
    province: string;
    postal_code: string;
}

enum ContactType {
    EMAIL = "email",
    PHONE = "phone",
    SOCIAL = "social"
}

enum SocialMediaType {
    IG = "ig", // Instagram
    FB = "fb", // Facebook
    X = "x", // X
    YT = "yt", // Youtube
    TT = "tt" // Tiktok
}

interface Contact {
    type: ContactType;
    label?: string;
    social_media_type?: SocialMediaType;
    contact: string;
}

interface Url {
    name: string;
    url: string;
}

export const Address: GovernmentAddress = {
    name: "Pemerintah Desa Kersik",
    street: "Jalan Langaseng Dusun Empang RT.003",
    village: "Desa Kersik",
    district: "Kecamatan Marang Kayu",
    city: "Kabupaten Kutai Kartanegara",
    province: "Provinsi Kalimantan Timur",
    postal_code: "75385"
}

export const Contacts: Contact[] = [
    {type: ContactType.PHONE, contact: "082150208664"},
    {type: ContactType.EMAIL, contact: "kersik.marangkayu@kukarkab.go.id"}
]

export const PersonalContacts: Contact[] = [
    {type: ContactType.PHONE, label:"Jumadi/Kades Kersik", contact: "081242368478"},
    {type: ContactType.PHONE, label:"Yayan/Ambulan Kersik", contact: "085392095123"}
]

export const Socials: Contact[] = [
    {type: ContactType.SOCIAL, social_media_type: SocialMediaType.IG, contact:"https://www.instagram.com/kersik.desa.id"},
    {type: ContactType.SOCIAL, social_media_type: SocialMediaType.FB, contact:"https://www.facebook.com/profile.php?id=100087087031705"},
    {type: ContactType.SOCIAL, social_media_type: SocialMediaType.X, contact:"https://mobile.twitter.com/pemdeskersik"},
    {type: ContactType.SOCIAL, social_media_type: SocialMediaType.YT, contact:"https://www.youtube.com/channel/UCKeq3qOKrdwvg05alm7zT5w"},
    {type: ContactType.SOCIAL, social_media_type: SocialMediaType.TT, contact:"https://www.tiktok.com/@kersik.desa.id"}
]

export const OuterLinks: Url[] = [
    {name: "Website Kemendesa", url: "https://kemendesa.go.id"},
    {name: "Website Kemendagri", url: "https://kemendagri.go.id"},
    {name: "Website Kabupaten Kutai Kartanegara", url: "https://kukarkab.go.id/v2"},
    {name: "Cek DPT Online", url: "https://cekdptonline.kpu.go.id"}
]