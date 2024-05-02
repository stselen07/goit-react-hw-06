import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const selectContacts = useSelector((state) => state.contacts.items);
  const selectNameFilter = useSelector((state) => state.filter.name);
  const filtered =
    selectNameFilter.trim() !== ""
      ? selectContacts.filter((value) =>
          value.name
            .toLowerCase()
            .includes(selectNameFilter.toLowerCase().trim())
        )
      : selectContacts;
  return (
    <ul className={css.listEl}>
      {filtered.map((item) => (
        <li className={css.itemList} key={item.id}>
          <Contact name={item.name} number={item.number} {...item} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;