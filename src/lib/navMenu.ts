interface MenuItem {
    name: string;
    path: string;
}

export const navMenu: MenuItem[] = [
    {name: "Beranda", path:"/"},
    {name: "Profil Desa", path:"/profil"},
    {name: "Listing", path:"/listing"},
    {name: "Berita", path:"/berita"},
    {name: "Belanja", path:"/belanja"},
    {name: "Pengaduan", path:"/pengaduan"}
]