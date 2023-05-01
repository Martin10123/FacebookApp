import { useState } from "react";
import { doc, serverTimestamp, writeBatch } from "firebase/firestore";

import { ButtonForm, InputForm } from "../../../Auth";
import { firebaseDB } from "../../../../services";
import { photoUser } from "../../../../assets";
import { useProfile } from "../../../ProfilePage/hook";

import styles from "./createGroup.module.css";

export const CreateGroup = ({ setOpenCreateGroup, infoUserActive }) => {
  const [selectedUsers, setSelectedUsers] = useState([infoUserActive.uid]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [startLoading, setStartLoading] = useState(false);
  const [nameGroup, setNameGroup] = useState("");
  const { friendsListCurrentUser } = useProfile();

  const onCheckUser = ({ target }) => {
    const userUid = target.id;
    const isChecked = target.checked;

    if (isChecked) {
      setSelectedUsers([...selectedUsers, userUid]);
    } else {
      setSelectedUsers(selectedUsers.filter((uid) => uid !== userUid));
    }
  };

  const onCreateGroup = async () => {
    if (nameGroup.trim().length <= 4 || selectedUsers.length <= 2)
      return setFormSubmitted(true);

    setStartLoading(true);

    try {
      const batch = writeBatch(firebaseDB);

      const idUniqGroup = `${nameGroup}${Math.round(
        Math.random() * 10000
      )}${Math.round(Math.random() * 15000)}`.replace(/\s/g, "");

      for (const userUid of selectedUsers) {
        const userChatRef = doc(firebaseDB, "usersChats", userUid);

        batch.update(userChatRef, {
          [idUniqGroup + ".infoUser"]: {
            createGroup: new Date().getTime(),
            idUniqGroup,
            isGroup: true,
            isView: false,
            lastMessage: " ",
            nameCreateGroup: infoUserActive.displayName,
            nameGroup,
            uidCreateGroup: infoUserActive.uid,
            usernameCreateGroup: infoUserActive.username,
            usersFriends: selectedUsers,
          },
          [idUniqGroup + ".date"]: serverTimestamp(),
        });
      }

      await batch.commit();
      setOpenCreateGroup(false);
    } catch (error) {
      console.error(error);
    } finally {
      setStartLoading(false);
    }
  };

  return (
    <div className={styles.create_group__container}>
      <div className={styles.create_group__content}>
        <div className={styles.create_group__nav}>
          <p>Crear grupo</p>
          <button
            className={styles.create_group__btn_close}
            disabled={startLoading}
            onClick={() => setOpenCreateGroup(false)}
          >
            X
          </button>
        </div>

        <div className={styles.create_group__name_group}>
          <InputForm
            errorActive={nameGroup.trim().length <= 4 && formSubmitted}
            onChange={({ target }) => setNameGroup(target.value)}
            placeholder="Nombre del grupo..."
            styleIcon="fa-solid fa-users-rays"
            textError="El nombre del grupo es demasiado corto"
            value={nameGroup}
          />
        </div>

        <ul className={styles.create_group__list_users}>
          {selectedUsers.length <= 2 && formSubmitted && (
            <p style={{ color: "red" }}>
              Debes de seleccionar por lo menos dos amigos
            </p>
          )}

          {friendsListCurrentUser.map((userFriend) => (
            <li className={styles.create_group__li_user} key={userFriend.uid}>
              <figure className={styles.create_group__photo_user}>
                <img
                  src={userFriend.photoUrl || photoUser}
                  alt="Foto de perfil"
                />
                <i className="fa-solid fa-circle"></i>
                <figcaption>{userFriend.displayName}</figcaption>
              </figure>

              <input
                className={styles.create_group__checkbox}
                id={userFriend.uid}
                name={userFriend.displayName}
                onChange={onCheckUser}
                type="checkbox"
              />
            </li>
          ))}
        </ul>

        <div className={styles.create_group__content_buttons}>
          <ButtonForm
            disabled={startLoading}
            onSubmit={onCreateGroup}
            title={startLoading ? "Creando..." : "Crear grupo"}
          />
        </div>
      </div>
    </div>
  );
};
