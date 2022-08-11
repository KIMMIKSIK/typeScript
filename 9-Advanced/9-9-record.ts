type PageInfo = {
  title: string;
};
type Page = "home" | "about" | "contact";

const nav: Record<Page, PageInfo> = {
  home: { title: "Home" },
  about: {
    title: "About",
  },
  contact: {
    title: "Contact",
  },
};

// Page를 키로 PageInfo를 value로 하는 값을 생성하는 타입 record!
