import { FC } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface NavLink {
  key: string;
  label: string;
  href: string;
}

interface NavItem {
  title: NavLink;
  links: NavLink[];
}

const navItems: NavItem[] = [
  {
    title: { key: "aboutUs", label: "Про нас", href: "/about" },
    links: [
      { key: "founders", label: "Засновники", href: "/founders" },
      { key: "board", label: "Правління", href: "/rule" },
      { key: "ourTeam", label: "Наша команда", href: "/team" },
      { key: "ourPartners", label: "Наші партнери", href: "/about/4" },
      {
        key: "officialDocuments",
        label: "Офіційні документи",
        href: "/about/5",
      },
      { key: "reports", label: "Звіти", href: "/about/6" },
      { key: "contacts", label: "Контакти", href: "/about/7" },
    ],
  },
  {
    title: {
      key: "activities",
      label: "Напрямки діяльності",
      href: "/activities",
    },
    links: [
      {
        key: "workWithYouth",
        label: "Робота з дітьми та молоддю",
        href: "/work-with-teens",
      },
      {
        key: "directions",
        label: "Направлення діяльності",
        href: "/activities/2",
      },
      {
        key: "charityActions",
        label: "Благодійні акції",
        href: "/activities/3",
      },
      {
        key: "environmentalProtection",
        label: "Охорона довкілля",
        href: "/environmentalProtection",
      },
    ],
  },
  {
    title: { key: "news", label: "Новини", href: "/news" },
    links: [{ key: "news", label: "Новини", href: "/news" }],
  },
  {
    title: { key: "support", label: "Підтримати", href: "/support" },
    links: [
      { key: "volunteering", label: "Волонтерством", href: "/support/1" },
      { key: "financially", label: "Фінансово", href: "/support/2" },
      { key: "partnership", label: "Партнерством", href: "/support/3" },
    ],
  },
];

const Navbar: FC = () => {
  const t = useTranslations("Navbar");
  return (
    <nav>
      {navItems.map((item) => (
        <div key={item.title.label} className="nav-item">
          <Link href={item.title.href}>
            <span
              className="link"
              style={{ fontSize: "20px", cursor: "pointer", color: "black" }}
            >
              {t(item.title.label)}
            </span>
          </Link>{" "}
          <svg
            id={`svg-${item.title.label}`}
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="svg-icon"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <ul className="dropdown">
            {item.links.map((link) => (
              <li style={{ padding: "5px" }} key={link.label}>
                <Link
                  style={{ fontSize: "18px" }}
                  href={link.href}
                  className="link"
                >
                  {t(link.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <Link
        href="to_contact_page"
        className="link"
        style={{ fontSize: "20px", cursor: "pointer", color: "black" }}
      >
        {t("contacts")}
        {/* Контакти */}
      </Link>
    </nav>
  );
};

export default Navbar;
