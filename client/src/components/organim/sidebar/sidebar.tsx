import Link from "next/link"

interface ItemProp {
    label: string;
    href: string;
}

export const Sidebar = ({ children, title }: { children: JSX.Element[], title?: string }) => (
    <ul className="sidebar">
        <h5 className="sidebar__title">
            {title}
        </h5>
        {children.map((child: JSX.Element) => (
            <li className="sidebar__item">
                {child}
            </li>
        ))}
    </ul>
)

export const SidebarNav = ({ items }: { items: ItemProp[] }) => (
    <nav className="sidebar__nav">
        <ul className="sidebar__nav-list">
            {items.map((item: ItemProp) => (
                <li className="sidebar__item">
                    <Link
                        className="sidebar__link"
                        href={item.href}
                    >
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
)

