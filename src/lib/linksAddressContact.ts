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
    name: "Pemerintah Desa Hibun",
    street: "Jalan Langaseng Dusun Empang RT.003",
    village: "Desa Hibun",
    district: "Kecamatan Parindu",
    city: "Kabupaten Sanggau",
    province: "Provinsi Kalimantan Barat",
    postal_code: "78561"
}

export const Contacts: Contact[] = [
    {type: ContactType.PHONE, contact: "082150208664"},
    {type: ContactType.EMAIL, contact: "hibun.parindu@sanggaukab.go.id"}
]

export const PersonalContacts: Contact[] = [
    {type: ContactType.PHONE, label:"Jumadi/Kades Hibun", contact: "081242368478"},
    {type: ContactType.PHONE, label:"Yayan/Ambulan Hibun", contact: "085392095123"}
]

export const Socials: Contact[] = [
    {type: ContactType.SOCIAL, social_media_type: SocialMediaType.IG, label:"@pemdeshisbun", contact:"https://www.instagram.com/hisbun"},
    {type: ContactType.SOCIAL, social_media_type: SocialMediaType.FB, label:"pemdeshisbun", contact:"https://www.facebook.com/profile.php?id=100087087031705"},
    {type: ContactType.SOCIAL, social_media_type: SocialMediaType.X, label:"@pemdeshisbun", contact:"https://mobile.twitter.com/pemdeshisbun"},
    {type: ContactType.SOCIAL, social_media_type: SocialMediaType.YT, label:"@pemdeshisbun", contact:"https://www.youtube.com/channel/???"},
    {type: ContactType.SOCIAL, social_media_type: SocialMediaType.TT, label:"@pemdes_hisbun", contact:"https://www.tiktok.com/@pemdes_hisbun"}
]

export const OuterLinks: Url[] = [
    {name: "Website Kemendesa", url: "https://kemendesa.go.id"},
    {name: "Website Kemendagri", url: "https://kemendagri.go.id"},
    {name: "Website Kabupaten Sanggau", url: "https://sanggaukab.go.id/v2"},
    {name: "Cek DPT Online", url: "https://cekdptonline.kpu.go.id"}
]